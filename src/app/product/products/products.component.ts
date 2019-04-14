import { Component, OnInit } from '@angular/core';
import { PeriodicElement, ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: PeriodicElement[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.dataSource = this.productService.getProducts();
  }

}
