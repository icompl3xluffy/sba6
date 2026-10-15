import { calculateDiscount } from "../utils/discountCalculator.js";
import { calculateTax } from "../utils/taxCalculator.js";
export class Product{
    id: number; 
    title: string;
    price: number; 
    category: string;
    description: string; 
    discount:number

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

    getTax(): number {
        return calculateTax(this.discountPrice(), this.category);
    }

    displayDetails():string{
        let sale= this.discountPrice();
        let tax=this.getTax();
    return `ID: ${this.id} | Title: ${this.title} | Price: $ ${this.price.toFixed(2)}| Category: ${this.category} | Description: ${this.description } |Discount: ${this.discount}`;
    }
}
