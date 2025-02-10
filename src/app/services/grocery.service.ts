import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class YGroceryService {
  constructor(private http: HttpClient) {
    this.http.get('http://localhost:5000/api/grocery/get');
  }
}
