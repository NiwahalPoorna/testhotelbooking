import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import {MatListModule} from '@angular/material/list';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HotelsComponent } from './hotels/hotels.component';
import { HoteldetailsComponent } from './hoteldetails/hoteldetails.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { VilaComponent } from './vila/vila.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import { ResortsComponent } from './resorts/resorts.component';
import {MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    HotelsComponent,
    HoteldetailsComponent,
    AddProductComponent,
    ListProductComponent,
    UpdateProductComponent,
    VilaComponent,
    NavbarComponent,
    FooterComponent,
    ResortsComponent,
  
    
    
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule, 

    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatSelectModule,
    MatMenuModule,
    MatDatepickerModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
