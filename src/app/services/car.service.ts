import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44328/api/";
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
   let newPath=this.apiUrl+"cars/getcardetails"
   return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  
  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    
    let newPath=this.apiUrl+"cars/getcardetailsbybrandid?brandid="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
   }

   getCarsByColor(colorName:string):Observable<ListResponseModel<Car>>{
    
    let newPath=this.apiUrl+"cars/getcardetailsbycolorname?colorName="+colorName
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
   }

   
}
