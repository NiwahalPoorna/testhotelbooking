import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { vila } from '../data-type';

@Injectable({
  providedIn: 'root'
})
export class HotelService {


  constructor(private http:HttpClient) { }


// get mothod

gethotel(){
  return this.http.get("http://localhost:3000/posts")
  .pipe(map((res:any)=>{
    return res;
  }))

}

hotelList(){
  return this.http.get<vila[]>('http://localhost:3000/posts');
}

getvila(id:string){
  return this.http.get<vila>(`http://localhost:3000/posts/${id}`);
}



}
