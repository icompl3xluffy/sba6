import { fetchProducts,fetchProductById } from "./services/apiService.js";
import { handleError } from "./utils/errorHandler.js";

async function main(): Promise<void> {
  console.log("Welcome to the Store!\n");

 
  try {
    const products = await fetchProducts(5);
    for (const product of products) {
      console.log(product.displayDetails());
    }
  } catch (error) {
    handleError(error);
  }

  try {
    const one = await fetchProductById(1);
    
    console.log(one.displayDetails());
  } catch (error) {
    handleError(error);
  }

  try {
    await fetchProductById(99999);
  } catch (error) {
    handleError(error);
  } finally {
    console.log("Store is closed. Goodnight!");
  }
}

main();