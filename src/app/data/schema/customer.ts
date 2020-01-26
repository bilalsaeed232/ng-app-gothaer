import { Membership } from "./membership";

export class Customer {
    name: string;
    membershipType: Membership;
    password: string;
    age: Number;
    selectedInsurances: string[]
}