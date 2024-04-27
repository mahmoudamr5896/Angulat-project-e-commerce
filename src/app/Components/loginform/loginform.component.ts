import { User } from 'src/app/Models/user';
import { Component, OnInit } from '@angular/core';
import { UserauthService } from 'src/app/Services/userauth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
private users:any
isloguser : boolean=false
constructor(private servselogin:UserauthService,
  private router:Router
){

}
  ngOnInit(): void {
   this.isloguser=  this.servselogin.Islogin;

   console.log(this.isloguser)
  //  this.servselogin.navigate(['Home'])
  this.servselogin.getalluser().subscribe((pdr)=>{
    this.users = pdr 
    console.log(pdr)
  })
  if(this.isloguser){
    this.router.navigateByUrl('/Home')
    }
  }

// loginuser(user:string,pass:string){
//   this.servselogin.login(user,pass);
  
// }
loginuser(user: string, pass: string): void {
  let filteredUsers = this.users.filter((u: User) => u.username === user);
  if (filteredUsers.length > 0) {
    let userL = filteredUsers[0]; 
    if (userL.hasOwnProperty('password')) {
      if (userL.password === pass) {
       let seller =  userL.seller === 'true' ? true : false
       if(seller){
        console.log('Seller logged in successfully');
        this.servselogin.login(user,pass);
        localStorage.setItem('seller',JSON.stringify(userL))
       }else{
        if(userL.isAdmin){
          console.log('Admin logged in successfully');
          this.servselogin.login(user,pass);
          localStorage.setItem('Admin',JSON.stringify(userL))
          this.router.navigateByUrl('/dashboard')
        }else{
          console.log('User logged in successfully');
          this.servselogin.login(user,pass);
          localStorage.setItem('user',JSON.stringify(userL))
        }
       }
      } else {
        console.log('Incorrect password');
      }
    } else {
      console.log('User object does not have a password property');
    }
  } else {
    console.log('User not found');
  }
}
logout(){
  this.servselogin.logout();
}
}
