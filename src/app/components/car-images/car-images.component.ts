import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImages } from 'src/app/models/carImages';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-images',
  templateUrl: './car-images.component.html',
  styleUrls: ['./car-images.component.css']
})
export class CarImagesComponent implements OnInit {

  constructor(private carImageService: CarImageService,private activatedRoute:ActivatedRoute) { }
  carImages:CarImages[]=[];
  imageUrl:string= "https://localhost:44328/";
  ngOnInit(): void {
this.activatedRoute.params.subscribe(params=>{
  if(params["id"]){
    this.getCarsImagesById(params["id"])
  }
})
  }

  getCarsImagesById(id:number){
    this.carImageService.getCarsImagesById(id).subscribe(response=>{
      this.carImages=response.data;
      console.log(this.carImages)
    })
  }

}
