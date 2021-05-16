import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  currentColor:Color;
  nullColor:Color;
  apiUrl="https://localhost:44328/api/colors/getall"
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseModel<Color>>{
    return this.httpClient.get<ListResponseModel<Color>>(this.apiUrl);
  }

  setCurrentColorToClear(){
    return this.currentColor=this.nullColor;
  }
}
