import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iorders } from 'src/app/Models/iorders';
import { Iproduct } from 'src/app/Models/iproduct';
import { ApiProductsService } from 'src/app/Services/api-products.service';
import { OrdersService } from 'src/app/Services/orders.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit ,OnChanges {
  orders:Iorders[] | any
  product:Iproduct[]  | any
  constructor(
    private apiorder:OrdersService,
    private routes:Router,
    private apiproduct:ApiProductsService
  ){

  }
  ngOnInit(): void {
    let User = localStorage.getItem('user')
  if(User){
   let user_id = JSON.parse(User) 
     console.log(user_id.id)
      this.apiorder.getOrdersByUserIdAndStatusFalse(user_id.id).subscribe((prod)=>{
      this.orders = prod
      this.product = prod
      })

      // this.apiproduct.getallproduct().subscribe((prod)=>{
      // this.product = prod
      // })
    }
  }
  ngOnChanges(): void {
    this.apiproduct.getproductbyid(this.orders.id).subscribe((prod)=>{
      this.product = prod
    })
  }
  calculateTotalPrice(): number {
    let total = 0;
    if (this.orders) {
      for (let order of this.orders) {
        if(order.status==true){
        total += order.price * order.numitem;

        }
      }
    }
    return total;
  }
  

  // purchaseItems(): void {
  //   if (confirm("Are you sure you want to purchase these items?")) {
  //     for (let order of this.product) {
  //       const newQuantity = Number(order.quantity - order.countitem);
  //       this.apiproduct.updateProductQuantity(order.id, newQuantity).subscribe(
  //         () => {
  //           console.log(`Quantity updated for product with ID: ${order.id}`);
  //         }
  //       );
  //     }
  
  //     // Remove all orders associated with the current user
  //     let userId = localStorage.getItem('user');
  //     if (userId) {
  //       let userid= JSON.parse(userId)
  //       console.log(typeof(userid.id))
  //       this.apiorder.removeallbyuserid(userid.id).subscribe(
  //         () => {
  //           console.log('All orders removed successfully');
  //         }
  //       );
  //       this.apiorder.removeall().subscribe(
  //         () => {
  //           console.log('All orders removed successfully');
  //         }
  //       );
  //     } else {
  //       console.error("User ID not found in local storage");
  //     }
  //   }
  // }
  purchaseItems(): void {
    if (confirm("Are you sure you want to purchase these items?")) {
      for (let order of this.product) {
      for (let product of this.orders) {
        let num = Number(product.numitem); // Assuming this.orders.numitem is the total number of items being purchase
        let num1 = Number(order.quantity);
         // Current quantity of the product
        console.log(typeof(num)); // Log the type of num
        console.log(typeof(num1)); // Log the type of num1
        console.log(num); // Log the type of num1
        console.log(num1); // Log the type of num1
      
        let newQuantity: number = num1 - num; // Calculate the new quantity after purchase
      
        console.log(`New quantity for product with ID ${order.id}: ${newQuantity}`);
        
        this.apiproduct.updateProductQuantity(order.id, newQuantity).subscribe(
          () => {
            console.log(`Quantity updated for product with ID: ${order.id}`);
          }
        );
      }
      }
      
      // Change status of orders to false
      let userId = localStorage.getItem('user');
      if (userId) {
        let userid = JSON.parse(userId);
        this.apiorder.getOrdersByUserIdAndStatusFalse(userid.id).subscribe((orders: Iorders[]) => {
          for (let order of orders) {
            order.status = false;
            this.apiorder.updateOrderStatus(order.id).subscribe(() => {
              console.log(`Status updated to false for order with ID: ${order.id}`);
            });
          }
        });    
      } else {
        console.error("User ID not found in local storage");
      }
    }
  }
  
  
  

  openproductId(id:number){
    this.routes.navigate(['/products',id])
    }

}
      // for (let order of this.product) {
      //   const newQuantity = Number(order.quantity - order.countitem);
      //   this.apiproduct.updateProductQuantity(order.id, newQuantity).subscribe(
      //     () => {
      //       console.log(`Quantity updated for product with ID: ${order.id}`);
      //     }
      //   );
      // }
