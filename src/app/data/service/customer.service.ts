import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { Customer } from "../schema/customer";
import { JSONApiService } from "./json-api.service";

@Injectable({
    providedIn: "root"
})
export class CustomerService {

    constructor(private jsonApiService: JSONApiService) {
    }

    //public methods
    getAll(): Observable<Array<Customer>> {
        return this.jsonApiService.get('/customers');
    }


    //private methods
}