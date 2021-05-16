import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { BrandColorClear } from 'src/app/models/brandColorClear';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';
import { ColorComponent } from '../color/color.component';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand[]=[];
  currentBrand:Brand;
  nullBrand:Brand;
  nullColor:Color;

  constructor(private brandService:BrandService, private activatedRoot: ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    

    this.getBrands()
    this.setCurrentBrandToClear()
  }

  getBrands(){
    this.brandService.getBrands().subscribe((response=>{
      this.brands=response.data;
    }))
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
  }

  getCurrentBrandClass(brand:Brand){
    if(brand==this.currentBrand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  getAllBrandClass(){
    if(!this.currentBrand){
      return "list-group-item active"
    }else{
      return "list-group-item"
    }
  }

  setCurrentBrandToClear(){
    this.currentBrand=this.nullBrand;
    //let colorComponent:ColorComponent = new Col(ColorService);
    //currentColor=this.nullColor;
    
    //this.colorComponent.currentColor=this.nullColor;
    //this.colorComponent.setCurrentColorToClear();
    //this.brandColorClear.setCurrentColorToClear();
  }

}
