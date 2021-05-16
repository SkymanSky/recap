import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';
import { BrandComponent } from '../brand/brand.component';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
 
  cars:Car[]=[];
  brands:Brand[]=[];
  dataLoaded=false;
  
  constructor(private carService:CarService,private activatedRoute:ActivatedRoute, private brandService:BrandService,
    private colorService:ColorService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
        this.brandService.setCurrentBrandToClear();
      }else if(params["colorName"]){
        this.getCarsByColor(params["colorName"])
      }else{
        
        this.colorService.setCurrentColorToClear();
        this.getCars()
        
      }
/* 
      if(params["colorName"]){
        this.getCarsByColor(params["colorName"])
      }else{
        this.getCars()
      } */
    })
  }

  getCars(){
    /* this.carService.getCars().subscribe(response=>{
      this.cars=response.data
      this.cars.forEach(car => {
        console.log(car.brandId);
      }); */
       //console.log(this.cars.forEach(c=>{c.brandId}));
    this.carService.getCars().subscribe(response=>{this.cars=response.data, this.dataLoaded=true;});

    
    
  }
 /*getCarByBrandId(){
    this.carService.getCarByBrandId().subscribe
  }*/

  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrand(brandId).subscribe(response=>{
      this.cars=response.data,
      this.dataLoaded=true
    })
  }

  getCarsByColor(colorName:string){
    this.carService.getCarsByColor(colorName).subscribe(response=>{
      this.cars=response.data,
      this.dataLoaded=true
    })
  }

}
