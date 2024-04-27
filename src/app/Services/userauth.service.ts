import { HttpClient } from '@angular/common/http';
import { ReturnStatement } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class UserauthService {
  private loginsubject: BehaviorSubject<boolean>
  constructor(private routes:Router
    ,private HttpClient:HttpClient
  ) { 
    this.loginsubject = new BehaviorSubject<boolean>(false)
  }

  login(username:string,password:string){
    let token = username+password
    localStorage.setItem('token',token);
    this.loginsubject.next(true)
    this.routes.navigate(['/Home'])

  }
  logout(){
     localStorage.removeItem('token')
     localStorage.removeItem('seller')
     localStorage.removeItem('Admin')
     localStorage.removeItem('user')
     this.loginsubject.next(false)
     this.routes.navigate(['/login'])
  }
  get Islogin():boolean
  {
 
    return localStorage.getItem('token') ? true : false;
 
  }
  getstatuslogin(){
    return this.loginsubject
  }
  addnewuser(user:User)
  {
    return this.HttpClient.post(`http://localhost:3000/Users`,JSON.stringify(user) )
  }
  getalluser(){
    return this.HttpClient.get('http://localhost:3000/Users')
  }
}
