import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {


  productData:undefined |product;
  productMessage:undefined|string;




  constructor (private route:ActivatedRoute, private product:ProductService) { }


  ngOnInit(): void {
    let productId=this.route.snapshot.paramMap.get('id');
    console.warn(productId);
    productId &&   this.product.getProduct(productId).subscribe((data)=>{
      console.warn(data)
      this.productData=data;
    })
    
    
  }

  submit(data:any ){
    console.warn(data)
    if(this.productData){
      data.id=this.productData.id;
    }
    this.product.updateProduct(data).subscribe((res)=>{
      if(res){
        this.productMessage='product has updated'

      }
    })
    setTimeout(()=>{
      this.productMessage=undefined;
    },3000);


  }

  

}
