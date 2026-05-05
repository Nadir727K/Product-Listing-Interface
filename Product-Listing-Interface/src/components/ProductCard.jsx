const ProductCard = ({ product }) => {
  if (!product) return null;

  const fallbackImg =
    "https://via.placeholder.com/300x200?text=No+Image";

  const title = product?.title || "No title";
  const price = product?.price ?? "N/A";
  const category = product?.category || "General";

  // ✅ SIMPLE + SAFE resolver (no over-engineering)
  const resolveImage = () => {
    const thumb = product?.thumbnail;
    const images = product?.images;

    if (typeof thumb === "string") return thumb;

    if (Array.isArray(images) && images.length > 0) {
      return images[0];
    }

    return fallbackImg;
  };

  return (
    <div className="card">
      <img
        src={resolveImage()}
        alt={title}
        loading="lazy"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = fallbackImg;
        }}
      />

      <div className="card-body">
        <p className="category">{category}</p>
        <h2 className="title">{title}</h2>
        <p className="price">₹{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;