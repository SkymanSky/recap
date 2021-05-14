import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
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
  
  constructor(private carService:CarService, private brandService:BrandService) { }

  ngOnInit(): void {
    this.getCars();
  }

  getCars(){
    /* this.carService.getCars().subscribe(response=>{
      this.cars=response.data
      this.cars.forEach(car => {
        console.log(car.brandId);
      }); */
       //console.log(this.cars.forEach(c=>{c.brandId}));
    this.carService.getCars().subscribe(response=>{this.cars=response.data, this.dataLoaded=true;});

    this.brandService.getBrands().subscribe((response=>{
      this.brands=response.data
      
      console.log(this.brands);
    }));
    
  }
 /*getCarByBrandId(){
    this.carService.getCarByBrandId().subscribe
  }*/

}
