import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { resorts } from '../data-type';
import { ResortsService } from '../service/resorts.service';

@Component({
  selector: 'app-resorts',
  templateUrl: './resorts.component.html',
  styleUrls: ['./resorts.component.css']
})
export class ResortsComponent implements OnInit{

  // public productlist:any;

  resortsList: undefined | resorts[];
  // productMessage: undefined | string;

  constructor(private api:ResortsService,private route:ActivatedRoute){}

  ngOnInit(): void {
    this.api.resortsList().subscribe((res)=>{
      console.warn(res);
      if(res){
        this.resortsList=res;

      }
    });
  }




}
