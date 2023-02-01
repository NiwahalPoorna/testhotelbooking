import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { product } from '../data-type';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  
  addproductMessage:string|undefined;
  ngForm!: NgForm;
  constructor(private product:ProductService){ }
  
  
  
  ngOnInit(): void {
    
  }

  submit(data:product){
    // console.warn(data);
    this.product.addProduct(data).subscribe((res)=>{
      console.warn(res)
      if(res){
       this.addproductMessage="product is added successfully";
       
      }
    });
    setTimeout(()=>{
      this.addproductMessage=undefined

    },3000);

  }




}
