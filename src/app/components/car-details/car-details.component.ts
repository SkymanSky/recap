import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetails } from 'src/app/models/carDetails';
import { CarImages } from 'src/app/models/carImages';
import { CarDetailsService } from 'src/app/services/car-details.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  carDetails:CarDetails[]=[];
  carImages:CarImages[]=[];
  carImageUrl:string;
  carImage: CarImages;
  
  constructor(private carDetailsService:CarDetailsService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getCarsById(params["id"]);
        this.getCarsImagesById(params["id"])
      }
    })
  }

  getCarsById(id:number){
    this.carDetailsService.getCarsById(id).subscribe(response=>{
      this.carDetails=response.data
      console.log(this.carDetails)
    })
  }

  //deletable

  getCarsImagesById(id:number){
    this.carDetailsService.getCarsImagesById(id).subscribe(response=>{
      this.carImages=response.data;
      console.log(this.carImages)
    })
  }
}
