import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HotelsComponent } from './hotels/hotels.component';
import { HoteldetailsComponent } from './hoteldetails/hoteldetails.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { VilaComponent } from './vila/vila.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ResortsComponent } from './resorts/resorts.component';
const routes: Routes = [
  {path:'',redirectTo:'about',pathMatch:'full'},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"home",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"hotels",component:HotelsComponent},
  {path:'details/:id',component:HoteldetailsComponent},
  {path:"addproduct",component:AddProductComponent},
  {path:"listproduct",component:ListProductComponent},
  {path:"updateproduct/:id",component:UpdateProductComponent},
  {path:"vila",component:VilaComponent},
  {path:"navbar",component:NavbarComponent},
  {path:"footer",component:FooterComponent},
  {path:"resorts",component:ResortsComponent},





  
  
 

 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
