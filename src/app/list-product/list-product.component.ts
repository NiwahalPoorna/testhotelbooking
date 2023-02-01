import { Component, OnInit } from '@angular/core';
import { product } from '../data-type';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  productList: undefined | product[];
  productMessage: undefined | string;
  constructor(private proudct: ProductService) {}

  // ngOnInit(): void {
  //   this.proudct.productList().subscribe((res)=>{
  //     // console.warn(res);
  //     if(res){
  //       this.productList=res;

  //     }
  //   });

  // }

  ngOnInit(): void {
    this.list();
  }

  deleteProduct(id: number) {
    // console.warn(id)
    this.proudct.deleteProduct(id).subscribe((res) => {
      if (res) {
        this.productMessage = 'product is deleted';

        this.list();
      }
    });
    setTimeout(() => {
      this.productMessage = undefined;
    }, 3000);
  }

  list() {
    this.proudct.productList().subscribe((res) => {
      // console.warn(res);
      if (res) {
        this.productList = res;
      }
    });
  }
}
