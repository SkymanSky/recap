import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImages } from '../models/carImages';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl="https://localhost:44328/api/";
  constructor(private httpClient:HttpClient) { }

  getCarsImagesById(id:number):Observable<ListResponseModel<CarImages>>{
    
    let newPath=this.apiUrl+"carimages/getbycarid?carid="+id
    return this.httpClient.get<ListResponseModel<CarImages>>(newPath);
    
   }
}
