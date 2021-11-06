import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Products } from './model/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productData: any;

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.getProducts();
  }
  async getProducts() {
    await this.productService.getProducts().subscribe((products) => {
      this.productData = products;
    });
  }

  navigateProductDetail(product: any) {
    this.productService.selectedProduct = product;
    this.router.navigate([`product/product-detail/${product.id}`]);
  }
}
