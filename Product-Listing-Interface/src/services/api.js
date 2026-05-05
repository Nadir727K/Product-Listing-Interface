const BASE_URL = "https://api.freeapi.app/api/v1";

export const fetchProducts = async (signal) => {
  try {
    const res = await fetch(`${BASE_URL}/public/randomproducts`, {
      signal,
    });

    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }

    const data = await res.json();

    console.log("PRODUCT API RESPONSE:", data);

    const products = data?.data?.data;

    if (!Array.isArray(products)) {
      console.error("Unexpected API structure:", data);
      throw new Error("Invalid API response structure");
    }

    return products;
  } catch (error) {
    console.error("fetchProducts error:", error.message);
    throw error;
  }
};