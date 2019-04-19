import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/product';
import { Catagory } from '../models/catagory';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Input() product = new Product();
  @Output() isClose = new EventEmitter<boolean>();
  catagory: Catagory[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.catagory = this.productService.getCatogories();
    if (!this.product)
      this.product = new Product();
  }
  close() {
    this.isClose.emit(true);
  }

}