import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MessageService } from 'src/app/services/message.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product:any;
  active = 1;

  comment!: any;
  star!: any;

  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue!: number;

  constructor(
    private productService: ProductService,
    public modalService: NgbModal,
    public activeModal: NgbActiveModal,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getTodayDate();
    let data = localStorage.getItem(this.productService.selectedProduct.id)
    if ( data !== null) {
      this.product = JSON.parse(data)
    } else {
      this.product = this.productService.selectedProduct;
    }
  }

  today!: string;
  getTodayDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    this.today = mm + '/' + dd + '/' + yyyy;
  }

  countStar(star: any) {
    this.selectedValue = star;
  }

  addComment() {
    this.modalService.dismissAll();
    this.messageService.show('success', 'Succesfully added');

    this.product.numberof_comments = Number(this.product.numberof_comments) + 1;
    this.product.productComments.push({
      date: this.today,
      rate: this.selectedValue,
      comment: this.comment,
    });

    localStorage.setItem(this.product.id, JSON.stringify(this.product));

    this.comment = '';
    this.selectedValue = 0;
  }
}
