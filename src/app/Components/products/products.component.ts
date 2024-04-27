import { ApiProductsService } from './../../Services/api-products.service';
import { routes } from './../../app-routing.module';
import { ProductsService } from './../../Services/products.service';
import { Icategory } from "src/app/Models/icategory";
import { Iproduct } from "./../../Models/iproduct";
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange } from "@angular/core";
import { Route, Router } from '@angular/router';
import { Iorders } from 'src/app/Models/iorders';
import { OrdersService } from 'src/app/Services/orders.service';

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnChanges ,OnInit{
  Productordered: Iorders[] =[];
  Product: Iproduct[] = [];
  ProductOfCaegory: Iproduct[] = [];
  totalprice: number = 0;
  userId:string=''
  @Input() selectId: number = 0;
  @Output() orderedProduct: EventEmitter<any> = new EventEmitter<any>();
  @Output() countProduct: EventEmitter<number> = new EventEmitter<number>();
id: any;
  // @Input() ProductOfCategory: any[] = []; // Input property to receive products of the selected category
  constructor(private productservice:ProductsService
    ,
              private routes:Router,
              private apiservice : ApiProductsService,
              private cartService:OrdersService
  ){
 

  }

  ngOnChanges(): void {
    // this.FilterProductByCategory()
    console.log(this.selectId)
    // this.ProductOfCaegory=this.productservice.getProductBycategory(this.selectId)
    this.apiservice.getproductsbycategoryids(this.selectId).subscribe((prod)=>{
      console.log(prod)
      if(this.selectId == 0){
        this.apiservice.getallproduct().subscribe((prod)=>{
          this.ProductOfCaegory = prod
        })
      }else{
        this.ProductOfCaegory = prod

      }
   });
  }
  ngOnInit(): void {
    // this.ProductOfCaegory=this.productservice.getProductBycategory(this.selectId)
    this.apiservice.getproductsbycategoryids(this.selectId).subscribe((prod)=>{
      console.log(prod)
      if(this.selectId){
        this.ProductOfCaegory = prod
      }else{
        this.apiservice.getallproduct().subscribe((prod)=>{
          this.ProductOfCaegory = prod
        })
      }
   });
   let User = localStorage.getItem('user')
   if(User){
    this.userId = JSON.parse(User) 
    console.log(this.userId)
   }
  }

  Addtocart(product: Iorders,numitem:string): void {
    // Check if the product is available in stock before adding to cart
    if (product) {
      let User = localStorage.getItem('user')
      if(User){
     let user_id = JSON.parse(User) 
       console.log(user_id)
       product.UserIds = user_id.id
       product.status=true
       product.numitem=numitem
      }
      this.cartService.AddtoOrders(product).subscribe((prod)=>{
        console.log('Hi Sir ')
      });
    } else {
      alert('This product is out of stock!');
    }
  }

  openproductId(id:number){
   this.routes.navigate(['/products',id])
   }
  
}
 // private FilterProductByCategory() {
  //   this.ProductOfCaegory =ProductsService.getProductBycategory(this.selectId)

  // //   if (this.selectId == 0) 
  // //     {
  // //       this.ProductOfCaegory = this.Product;
  // //       console.log('Hello 0',this.selectId)

  // //     }      
  // //   else
  // //   {
  // //         console.log('Error',this.selectId)
  // //     this.ProductOfCaegory = this.Product.filter(
  // //       (item) => (item.Category == this.selectId)
  // //     );
  // //   }
  
  // } // Addtocart(id: number, quantity: any,item:any) {
  //   const productIndex = this.Product.findIndex((product) => product.id === id);
  //   if (productIndex !== -1){
  //     if (quantity > 0 && quantity <= this.Product[productIndex].quantity) {
  //       this.Product[productIndex].quantity -= quantity;
  //       this.totalprice = this.Product[productIndex].price * quantity;
  //       this.orderedProduct.emit(item);
  //       this.countProduct.emit(quantity)
  //       console.log(
  //         `Item with ID ${id} and quantity ${quantity} has been purchased.`
  //       );
  //     } else {
  //       console.log(`Invalid quantity for item with ID ${id}.`);
  //     }
  //   } else {
  //     console.log(`Item with ID ${id} not found.`);
  //   }
  // }