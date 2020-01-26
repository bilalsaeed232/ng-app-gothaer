import { Membership } from "./membership";


const enum ProductType {
    INSURANCE,
    STICKER
}

interface PriceInterface {
    currency: string;
    minAge: Number;
    maxAge: Number;
    price: string;
    label: string;
}


export class Product {
    names: string;
    availability: Membership;
    type: ProductType;
    prices: PriceInterface[];
}