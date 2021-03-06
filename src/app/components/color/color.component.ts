import { Component, OnInit } from '@angular/core';
import { BrandColorClear } from 'src/app/models/brandColorClear';
import { Color } from 'src/app/models/color';
import { ColorResponseModel } from 'src/app/models/colorResponseModel';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit, BrandColorClear {
colors:Color[]=[];
currentColor:Color;
nullColor:Color;

  constructor(private colorService:ColorService) { }

  ngOnInit(): void {
    this.getColors();
    this.setCurrentColorToClear();
  }
  getColors(){
    this.colorService.getColors().subscribe((response =>{this.colors=response.data}));
  }

  setCurrentColor(color:Color){
    this.currentColor=color;
  }

  getCurrentColorClass(color:Color){
    if(color==this.currentColor){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  getAllColorClass(){
    if(!this.currentColor){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }

  }

  setCurrentColorToClear(){
    this.currentColor=this.nullColor;
  }
}
