import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:44328/api/rentals"
  constructor(private httpClient: HttpClient) { }

  getRentals(){
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl+"/getall");
    
  }

  getRentalDetails(){
    return this.httpClient.get<ListResponseModel<Rental>>(this.apiUrl+"/getrentaldetails") }
}
