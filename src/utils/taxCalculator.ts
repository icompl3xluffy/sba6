import { productData } from "../models/Product.js";

export function calculateTax(product: productData): number {
  return product.getTax();
}