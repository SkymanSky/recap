import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Brand } from "../models/brand";
import { ListResponseModel } from "../models/listResponseModel";


@Injectable({
  providedIn: 'root'
})
export class BrandService {
  currentBrand:Brand;
  nullBrand:Brand;
  apiUrl="https://localhost:44328/api/brands/getall";
  constructor(private httpClient:HttpClient) { }
  getBrands():Observable<ListResponseModel<Brand>>{
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
    
  }

  setCurrentBrandToClear(){
    return this.currentBrand=this.nullBrand;
    //currentColor=this.nullColor;
    
    //this.colorComponent.currentColor=this.nullColor;
    //this.colorComponent.setCurrentColorToClear();
  }

}
