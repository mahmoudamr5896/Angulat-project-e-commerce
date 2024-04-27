import { Component, OnChanges, OnInit } from '@angular/core';
import { UserauthService } from '../Services/userauth.service';
import { OrdersService } from '../Services/orders.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit ,OnChanges{
  islogin:boolean=false;
  num:number=0
  constructor(private servselogin:UserauthService,
              private orderapi :OrdersService
  ){

  }

  ngOnChanges(): void {
    let User = localStorage.getItem('user')
    // console.log(User)
    if(User){
     let user_id = JSON.parse(User) 
       console.log(user_id.id)
        this.orderapi.getOrdersByUserIdAndStatusFalse(user_id.id).subscribe((prod)=>{
         this.num = prod.length | 0
         console.log(prod.length)
        })
     }  
    }
  
  ngOnInit(): void {
  // this.islogin = this.servselogin.Islogin#
 this.servselogin.getstatuslogin().subscribe(arg =>this.islogin = arg);
 let User = localStorage.getItem('user')
 if(User){
  let user_id = JSON.parse(User) 
    console.log(user_id.id)
     this.orderapi.getOrdersByUserIdAndStatusFalse(user_id.id).subscribe((prod)=>{
      this.num = prod.length
      console.log(prod.length)
     })
  }  
  }

  logout(){
    this.servselogin.logout();
  }

}
