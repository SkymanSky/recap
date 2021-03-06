import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {path:"", component:CarComponent},
  {path:"cars", component:CarComponent},
  {path:"cars/brand/:brandId", component:CarComponent},
  {path:"cars/color/:colorName", component:CarComponent},
  {path:"getbyid/:id", component:CarDetailsComponent},
  {path:"cars/getbyid/:id", component:CarDetailsComponent},
  {path:"cars/brand/:brandId/getbyid/:id", component:CarDetailsComponent},
  {path:"cars/color/:colorName/getbyid/:id", component:CarDetailsComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
