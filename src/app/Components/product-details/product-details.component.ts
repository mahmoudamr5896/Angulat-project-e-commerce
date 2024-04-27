import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from 'src/app/Models/iproduct';
import { ApiProductsService } from 'src/app/Services/api-products.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  private ProdId:number = 0
  Currentprod : Iproduct | undefined=undefined;
  constructor(private activerouter:ActivatedRoute,
              private productservice:ProductsService,
              private apiproduct :ApiProductsService
  ){
  }
  ngOnInit(): void {
    this.ProdId = Number(this.activerouter.snapshot.paramMap.get('pid'))
    // this.Currentprod = this.productservice.getProductByIds(this.ProdId)
    // console.log(this.ProdId)
    this.apiproduct.getproductbyid(this.ProdId).subscribe((prod)=>{
     this.Currentprod = prod;
     console.log(prod)
    })
  }
  


}
