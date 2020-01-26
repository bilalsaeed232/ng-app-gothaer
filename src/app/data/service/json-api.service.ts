import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

import customers from "./json/customers";
import products from "./json/products";
import memberships from "./json/memberships";

@Injectable({
    providedIn: "root"
})
export class JSONApiService {
    
    get(url: string): Observable<any> {
        switch(url){
            case '/customers':
                return of(customers);
            case '/memberships':
                return of(memberships);
            case '/memberships':
                return of(products); 
        }
    }
}