import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { resorts } from '../data-type';
@Injectable({
  providedIn: 'root'
})
export class ResortsService {

  constructor(private http: HttpClient) { }

    // get mothod

  // gethotel() {
  //   return this.http.get('http://localhost:3000/posts').pipe(
  //     map((res: any) => {
  //       return res;
  //     })
  //   );
  // }


  resortsList(){
    return this.http.get<resorts[]>('http://localhost:3000/resorts');
  }
  
  getvila(resortsid:string){
    return this.http.get<resorts>(`http://localhost:3000/resorts/single/${resortsid}`);
  }
}
