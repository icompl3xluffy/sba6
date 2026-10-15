import { Product, type ProductData } from "../models/Product.js";
import { NetworkError } from "../utils/errorHandler.js";

let URL ="https://dummyjson.com/products";

interface ProductsResponse {
  products: ProductData[];
  total: number;
  skip: number;
  limit: number;
}


async function getJson<T>(url: string): Promise<T> {
  let response: Response;

  try {
    response = await fetch(url);
  } catch {
    throw new NetworkError(`Could not reach the server at ${url}`);
  }

  if (!response.ok) {
    throw new NetworkError(`Server responded with status ${response.status} for ${url}`);
  }

  try {
    return (await response.json()) as T;
  } catch {
    throw new DataError("The server sent a response that could not be read");
  }
}
export async function fetchProductById(id: number): Promise<Product> {
  try {
    const response = await fetch(`${URL}/${id}`);

    if (!response.ok) {
      throw new NetworkError(`Server responded with status ${response.status}`);
    }

    const data: ProductData = await response.json();
    return new Product(data);
  } catch (error) {
    if (error instanceof NetworkError) {
      throw error;
    }
    throw new NetworkError("Could not reach the server");
  }
}