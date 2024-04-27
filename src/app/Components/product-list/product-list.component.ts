import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { ApiCategoriesService } from 'src/app/Services/api-categories.service';
import { ApiProductsService } from 'src/app/Services/api-products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // Category:Icategory[] 
  // SelectedCategoryId: any;
  SelectedCategoryId: number = 0; // Initialize SelectedCategoryId with a default value
  Category: Icategory[] = [];
  Ordered: any[] = [];
  totalprice:number=0
  Countproduct:number=0
  constructor(private apicategory:ApiCategoriesService){
    // this.Category=[
    //   {id:1,name:'Mobile'},
    //   {id:2,name:'Device Desktop'},
    //   {id:3,name:'Samsung'}
    // ]
   
    
  }
  ngOnInit(): void {
    this.apicategory.getallcategory().subscribe((cat)=>{
      this.Category=cat
    })
  }
  handleOrderedProduct(orderedProduct: any) {
    // Handle the ordered product here
    this.Ordered.push(orderedProduct) 
    this.totalprice += orderedProduct.price
    console.log('Ordered Product:', this.Ordered);

  }
  handleCountProduct(count:number){
   this.Countproduct = count;
  }
  // emitRemoveItem(id:number){
  //     const index = this.Ordered.findIndex(item => item.id === id);
  //     if (index !== -1) {
  //       this.Ordered.splice(index, 1); // Remove 1 element starting from the index
  //       console.log('Item removed:', id);
  //     } else {
  //       console.log('Item not found:', id);
  //     }
  // }
  
}
