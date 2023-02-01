import { Component,OnInit } from '@angular/core';
import { HotelService } from '../service/hotel.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit{



  public productlist:any;


  constructor(private api:HotelService){}

  ngOnInit():void{
    this.api.gethotel().subscribe(res=>{
      // console.log(res);
      this.productlist = res;

    })

  }

}
