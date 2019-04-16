import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { Catagory } from './models/catagory';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Product[] {
    return PRODUCTS;
  }
   getCatogories(): Catagory[] {
    return CATAGORIES;
  }
}
const CATAGORIES: Catagory[] = [
  { CatagoryId: 1, CatagorCode: 'C1', CatagoryName: 'Cata1', CatagoryDesc: 'Catagory' },
  { CatagoryId: 2, CatagorCode: 'C2', CatagoryName: 'Cata2', CatagoryDesc: 'Catagory' },
  { CatagoryId: 3, CatagorCode: 'C3', CatagoryName: 'Cata3', CatagoryDesc: 'Catagory' },
  { CatagoryId: 4, CatagorCode: 'C4', CatagoryName: 'Cata4', CatagoryDesc: 'Catagory' },
  { CatagoryId: 5, CatagorCode: 'C5', CatagoryName: 'Cata5', CatagoryDesc: 'Catagory' },
]

const PRODUCTS: Product[] = [
  { ProductId: 1, ProductName: 'Hydrogen', Price: 1.0079, Description: 'H', CatagoryId: 1 },
  { ProductId: 2, ProductName: 'Helium', Price: 4.0026, Description: 'He', CatagoryId: 1 },
  { ProductId: 3, ProductName: 'Lithium', Price: 6.941, Description: 'Li', CatagoryId: 2 },
  { ProductId: 4, ProductName: 'Beryllium', Price: 9.0122, Description: 'Be', CatagoryId: 1 },
  { ProductId: 5, ProductName: 'Boron', Price: 10.811, Description: 'B', CatagoryId: 4 },
  { ProductId: 6, ProductName: 'Carbon', Price: 12.0107, Description: 'C', CatagoryId: 1 },
  { ProductId: 7, ProductName: 'Nitrogen', Price: 14.0067, Description: 'N', CatagoryId: 4 },
  { ProductId: 8, ProductName: 'Oxygen', Price: 15.9994, Description: 'O', CatagoryId: 1 },
  { ProductId: 9, ProductName: 'Fluorine', Price: 18.9984, Description: 'F', CatagoryId: 1 },
  { ProductId: 10, ProductName: 'Neon', Price: 20.1797, Description: 'Ne', CatagoryId: 1 },
  { ProductId: 11, ProductName: 'Hydrogen', Price: 1.0079, Description: 'H', CatagoryId: 3 },
  { ProductId: 12, ProductName: 'Helium', Price: 4.0026, Description: 'He', CatagoryId: 1 },
  { ProductId: 13, ProductName: 'Lithium', Price: 6.941, Description: 'Li', CatagoryId: 1 },
  { ProductId: 14, ProductName: 'Beryllium', Price: 9.0122, Description: 'Be', CatagoryId: 5 },
  { ProductId: 15, ProductName: 'Boron', Price: 10.811, Description: 'B', CatagoryId: 1 },
  { ProductId: 16, ProductName: 'Carbon', Price: 12.0107, Description: 'C', CatagoryId: 3 },
  { ProductId: 17, ProductName: 'Nitrogen', Price: 14.0067, Description: 'N', CatagoryId: 1 },
  { ProductId: 18, ProductName: 'Oxygen', Price: 15.9994, Description: 'O', CatagoryId: 4 },
  { ProductId: 19, ProductName: 'Fluorine', Price: 18.9984, Description: 'F', CatagoryId: 1 },
  { ProductId: 20, ProductName: 'Neon', Price: 20.1797, Description: 'Ne', CatagoryId: 1 },
];