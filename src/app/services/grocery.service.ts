import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GroceryService {
  constructor(private http: HttpClient) {
    
  }

  getAlGrocery(){
   return this.http.get('http://localhost:5000/api/grocery/get');
  }
}
