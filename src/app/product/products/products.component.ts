import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product';
import { Catagory } from '../models/catagory';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[];
  catagory: Catagory[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.catagory = this.productService.getCatogories();
  }

  getCatagory(catagoryId) {
    return this.catagory.find(c => c.CatagoryId === catagoryId).CatagoryName;
  }

}
