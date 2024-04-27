import { OnChanges } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, reduce } from 'rxjs';
import { Iproduct } from '../Models/iproduct';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService  implements OnInit,OnChanges{
  
  constructor(private HttpClientModule:HttpClient) { 

  }
  ngOnChanges(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  getallproduct(): Observable<Iproduct[]>{
    return this.HttpClientModule.get<Iproduct[]>('http://localhost:3000/products')
  }
  getproductbyid(id: number): Observable<Iproduct> {
    return this.HttpClientModule.get<Iproduct>(`http://localhost:3000/products/${id}`);
  }
  getproductsbycategoryids(id:number):Observable<Iproduct[]>
  {
   return this.HttpClientModule.get<Iproduct[]>(`http://localhost:3000/products?Category=${id}`)
  }
  addnewproduct(newprod:Iproduct){
   return this.HttpClientModule.post(`http://localhost:3000/products`,JSON.stringify(newprod))
  }
  // updateproductbyid(id:number):Observable<Iproduct[]>
  // {
  //  return this.HttpClientModule.put<Iproduct[]>(`http://localhost:3000/products?Category${id}`)
  // }
  deleteproductbyid(){

  }
  getlastid(){

  }
  updateProductQuantity(id: number, num: number) {
    const updateData = { quantity: num };
    return this.HttpClientModule.patch(`http://localhost:3000/products/${id}`, updateData);
  }
}
