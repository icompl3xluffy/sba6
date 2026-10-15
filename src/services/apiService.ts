import { Product, type productData } from "../models/Product.js";
import { NetworkError } from "../utils/errorHandler.js";

let URL ="https://dummyjson.com/products";

interface ProductsResponse {
  products: productData[];
  total: number;
  skip: number;
  limit: number;
}
export async function fetchProducts(limit: number = 5): Promise<Product[]> {
  try {
    const response = await fetch(`${URL}limit=${limit}`);

    if (!response.ok) {
      throw new NetworkError(`Server responded with status ${response.status}`);
    }
  
const data = await response.json();
    return data.products.map((item: productData) => new Product(item));
  } catch (error) {
    if (error instanceof NetworkError) {
      throw error;
    }
    throw new NetworkError("Could not reach the server");
  }
}

export async function fetchProductById(id: number): Promise<Product> {
  try {
    const response = await fetch(`${URL}/${id}`);

    if (!response.ok) {
      throw new NetworkError(`Server responded with status ${response.status}`);
    }

    const data: productData = await response.json();
    return new Product(data);
  } catch (error) {
    if (error instanceof NetworkError) {
      throw error;
    }
    throw new NetworkError("Could not reach the server");
  }
}