import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCTS;
  }
}

const PRODUCTS: Product[] = [
  { ProductId: 1, ProductName: 'Hydrogen', Price: 1.0079, Description: 'H', CatagoryId: 1 },
  { ProductId: 2, ProductName: 'Helium', Price: 4.0026, Description: 'He', CatagoryId: 1 },
  { ProductId: 3, ProductName: 'Lithium', Price: 6.941, Description: 'Li', CatagoryId: 1 },
  { ProductId: 4, ProductName: 'Beryllium', Price: 9.0122, Description: 'Be', CatagoryId: 1 },
  { ProductId: 5, ProductName: 'Boron', Price: 10.811, Description: 'B', CatagoryId: 1 },
  { ProductId: 6, ProductName: 'Carbon', Price: 12.0107, Description: 'C', CatagoryId: 1 },
  { ProductId: 7, ProductName: 'Nitrogen', Price: 14.0067, Description: 'N', CatagoryId: 1 },
  { ProductId: 8, ProductName: 'Oxygen', Price: 15.9994, Description: 'O', CatagoryId: 1 },
  { ProductId: 9, ProductName: 'Fluorine', Price: 18.9984, Description: 'F', CatagoryId: 1 },
  { ProductId: 10, ProductName: 'Neon', Price: 20.1797, Description: 'Ne', CatagoryId: 1 },
  { ProductId: 11, ProductName: 'Hydrogen', Price: 1.0079, Description: 'H', CatagoryId: 1 },
  { ProductId: 12, ProductName: 'Helium', Price: 4.0026, Description: 'He', CatagoryId: 1 },
  { ProductId: 13, ProductName: 'Lithium', Price: 6.941, Description: 'Li', CatagoryId: 1 },
  { ProductId: 14, ProductName: 'Beryllium', Price: 9.0122, Description: 'Be', CatagoryId: 1 },
  { ProductId: 15, ProductName: 'Boron', Price: 10.811, Description: 'B', CatagoryId: 1 },
  { ProductId: 16, ProductName: 'Carbon', Price: 12.0107, Description: 'C', CatagoryId: 1 },
  { ProductId: 17, ProductName: 'Nitrogen', Price: 14.0067, Description: 'N', CatagoryId: 1 },
  { ProductId: 18, ProductName: 'Oxygen', Price: 15.9994, Description: 'O', CatagoryId: 1 },
  { ProductId: 19, ProductName: 'Fluorine', Price: 18.9984, Description: 'F', CatagoryId: 1 },
  { ProductId: 20, ProductName: 'Neon', Price: 20.1797, Description: 'Ne', CatagoryId: 1 },
];