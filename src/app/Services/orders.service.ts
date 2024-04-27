import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iorders } from '../Models/iorders';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  order:Iorders[]=[]
  constructor(
    private HttpClient: HttpClient
  ) { }

  getallorder(){
    return this.HttpClient.get('http://localhost:3000/Orders')
  }
  getOrdersByUserIdAndStatusFalse(userId: string): Observable<Iorders[]> {
    return this.HttpClient.get<Iorders[]>(`http://localhost:3000/Orders?UserIds=${userId}`);
  }
  
  AddtoOrders(prod:Iorders){
    return this.HttpClient.post('http://localhost:3000/Orders',prod)
  }
  updateOrderStatus(id: number){
    const updateData = { status: false };
    return this.HttpClient.patch(`http://localhost:3000/Orders/${id}`, updateData);
  }
  removeallbyuserid(id:string){
   return  this.HttpClient.delete(`http://localhost:3000/Orders?UserIds=${id}`)
  }
  removeall(){
   return  this.HttpClient.delete(`http://localhost:3000/Orders`)
  }
  
}
