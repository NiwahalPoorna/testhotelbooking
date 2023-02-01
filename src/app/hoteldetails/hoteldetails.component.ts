import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { vila } from '../data-type';
import { HotelService } from '../service/hotel.service';

@Component({
  selector: 'app-hoteldetails',
  templateUrl: './hoteldetails.component.html',
  styleUrls: ['./hoteldetails.component.css']
})
export class HoteldetailsComponent implements OnInit{
  hotelData:undefined|vila;
 constructor (private route:ActivatedRoute , private product:HotelService) { }

  
  
  ngOnInit(): void {
    let productId=this.route.snapshot.paramMap.get('id');
    console.warn(productId); 
    productId && this.product.getvila(productId).subscribe((res)=>{
      console.warn(res);
      this.hotelData=res;
    })
  }
 
}
