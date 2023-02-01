import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { vila } from '../data-type';
import { HotelService } from '../service/hotel.service';

@Component({
  selector: 'app-vila',
  templateUrl: './vila.component.html',
  styleUrls: ['./vila.component.css']
})
export class VilaComponent implements OnInit {

  
  hotelList: undefined | vila[];
  productMessage: undefined | string;
  constructor(private api:HotelService,private route:ActivatedRoute){ }
  
   ngOnInit(): void {
    this.api.hotelList().subscribe((res)=>{
      console.warn(res);
      if(res){
        this.hotelList=res;

      }
    });

  }

}
