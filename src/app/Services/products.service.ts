import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  Product : Iproduct[]
  ProductOfCaegory?:[]
  constructor() {
    this.Product = [
      {
        id: 1,
        name: "Labtop",
        price: 120,
        quantity: 0,
        imgURL: "https://fakeimg.pl/350x200/?text=Hello",
        Category: 3,
      },
      {
        id: 2,
        name: "Phone 12",
        price: 120,
        quantity: 3,
        imgURL: "https://fakeimg.pl/350x200/?text=Hello",
        Category: 1,
      },
      {
        id: 3,
        name: "Suamsong 13",
        price: 120,
        quantity: 3,
        imgURL: "https://fakeimg.pl/350x200/?text=Hello",
        Category: 1,
      },
      {
        id: 4,
        name: "Hard 123",
        price: 120,
        quantity: 3,
        imgURL:
          "https://fakeimg.pl/200x100/?retina=1&text=こんにちは&font=noto",
        Category: 2,
      },
      {
        id: 5,
        name: "Labtop",
        price: 120,
        quantity: 3,
        imgURL: "https://fakeimg.pl/350x200/?text=Hello",
        Category: 2,
      },
      {
        id: 6,
        name: "Labtop",
        price: 120,
        quantity: 3,
        imgURL: "https://fakeimg.pl/350x200/?text=Hello",
        Category: 1,
      },
      {
        id: 7,
        name: "Labtop",
        price: 120,
        quantity: 3,
        imgURL: "https://fakeimg.pl/350x200/?text=Hello",
        Category: 1,
      },
      {
        id: 8,
        name: "Labtop",
        price: 120,
        quantity: 2,
        imgURL: "https://fakeimg.pl/350x200/?text=Hello",
        Category: 1,
      },
      {
        id: 9,
        name: "Labtop",
        price: 120,
        quantity: 0,
        imgURL: "https://fakeimg.pl/350x200/?text=Hello",
        Category: 3,
      },
    ];
   }
   getAllproducts(): Iproduct[] {
    return this.Product;
  }

  getProductBycategory(selectId:number): Iproduct[] {
    if (selectId == 0) {
      return this.Product;
    } else {
      return this.Product.filter(item => item.Category == selectId);
    }
  }
   getProductByIds(id:number){
    return this.Product.find((prod=> prod.id === id))
   }
   Addnewproduct(){

   }
   
}
