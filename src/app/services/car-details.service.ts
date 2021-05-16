import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetails } from '../models/carDetails';
import { CarImages } from '../models/carImages';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailsService {
  apiUrl="https://localhost:44328/api/";
  constructor(private httpClient:HttpClient) { }

  getCarsById(id:number):Observable<ListResponseModel<CarDetails>>{
    
    let newPath=this.apiUrl+"cars/getcardetailsbyid?id="+id
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
    
   }

   //deletable
   getCarsImagesById(id:number):Observable<ListResponseModel<CarImages>>{
    
    let newPath=this.apiUrl+"carimages/getbycarid?carid="+id
    return this.httpClient.get<ListResponseModel<CarImages>>(newPath);
    
   }

   
}
