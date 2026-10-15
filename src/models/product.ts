import { calculateDiscount } from "../utils/discountCalculator.js";
import { calculateTax } from "../utils/taxCalculator.js";
export class productData{
    id: number; 
    title: string;
    price: number; 
    category: string;
    description: string; 
    discount:number;

    constructor(id: number,  title: string, price: number, category:string, description:string, discount:number)
    {
        this.id= id;
        this.title= title;
        this.price= price;
        this.category=category;
        this.description=description
        this.discount=discount
    }
     discountPrice(): number {
        return this.price - calculateDiscount(this.price, this.discount);
    }

    }

     displayDetails(): string {
        const sale = this.discount();
        const tax = this.getTax();
        return `ID: ${this.id} | Title: ${this.title} | Category: ${this.category} | Price: $${this.price.toFixed(2)} | Discount: ${this.discountPercentage}% | Sale price: $${sale.toFixed(2)} | Tax: $${tax.toFixed(2)} | Total: $${(sale + tax).toFixed(2)}`;
    }

