
// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { environment } from '../../shared/environment/environment.prod';

// @Injectable({
//   providedIn: 'root',
// })
// export class CategoryService {
//   catergory :any;
//    constructor(private http: HttpClient) {
//   }
//   category=[
//     {id:1,name:"phones"},
//     {id:2,name:"Laptop"},
//     {id:3,name:"Electronices"},
//     {id:4,name:"Helthy"},
//     {id:5,name:"Sport"},
//     {id:6,name:"Pets"},

//   ]
//     // getAllCategories(): Observable<any> {
//     //   const result = this.http.get(`${environment.baseUrl}ProductTypes`);
//     //   console.log(result);
//     //   return result;
//     // }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../shared/environment/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }
}

