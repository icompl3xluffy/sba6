import { Product } from "../models/Product.js";

export function calculateTax(product: Product): number {
  return product.getPriceWithTax();
}