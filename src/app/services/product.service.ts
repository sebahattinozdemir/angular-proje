import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  selectedProduct:any;
  getProducts() {
    return this.http.get('/assets/json/products.json');
  }
}
