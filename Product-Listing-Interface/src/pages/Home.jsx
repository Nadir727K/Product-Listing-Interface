import { useEffect, useState } from "react";
import { fetchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const loadProducts = async () => {
      try {
        const data = await fetchProducts(controller.signal);

        
        if (!Array.isArray(data)) {
          throw new Error("Invalid product data");
        }

        setProducts(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    loadProducts();

    return () => controller.abort();
  }, []);


  if (loading) return <p className="status">Loading products...</p>;
  if (error) return <p className="status error">{error}</p>;
  if (products.length === 0) {
    return <p className="status">No products found</p>;
  }

  return (
    <div className="container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;