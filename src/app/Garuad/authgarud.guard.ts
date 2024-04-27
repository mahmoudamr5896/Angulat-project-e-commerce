import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserauthService } from '../Services/userauth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthgarudGuard implements CanActivate {
  constructor(private authuser:UserauthService){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authuser.Islogin){
      return true;
    }else
    {
       return false ;
    }
   
  }
  
}
