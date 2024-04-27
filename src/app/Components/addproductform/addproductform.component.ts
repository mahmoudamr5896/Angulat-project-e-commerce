import { CategoryService } from './../../Services/category.service';
import { Component, OnInit } from '@angular/core';
import { Icategory } from 'src/app/Models/icategory';
import { Iproduct } from 'src/app/Models/iproduct';
import { ApiProductsService } from 'src/app/Services/api-products.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-addproductform',
  templateUrl: './addproductform.component.html',
  styleUrls: ['./addproductform.component.css']
})
export class AddproductformComponent implements OnInit {
productName: string = '';
productPrice: number= 0;
productQuantity: number=0;
productImgURL: string='';
selectedCategory: string='';
categories: Icategory[]=[];
newprod:Iproduct={} as Iproduct
constructor(private productService: ProductsService
  ,private categoryservices:CategoryService
  ,private apiserives: ApiProductsService
){
}

ngOnInit(): void {
this.categories = this.categoryservices.getallcategory(); 
 }


addProduct(){
 this.apiserives.addnewproduct(this.newprod).subscribe((prd)=>{
 console.log('his successsssssssssssssssssssssssssssssssssssss ')
 })
}

}
