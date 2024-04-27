import { User } from './../../Models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserauthService } from 'src/app/Services/userauth.service';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.css']
})
export class RegisterformComponent implements OnInit {
  Newuser:User={} as User
  isloguser : boolean=false

  constructor(private apiuser:UserauthService
    ,private servselogin:UserauthService,
    private router:Router
  ){
  }
  ngOnInit(): void {
    this.isloguser=  this.servselogin.Islogin;
    if(this.isloguser){
    this.router.navigateByUrl('/Home')
    }
  }
  Addnewuser(){
    this.apiuser.addnewuser(this.Newuser).subscribe((pds)=>{
      console.log(this.Newuser)
      this.router.navigateByUrl('/login')
    })
    // console.log('Tis User Is Added ',this.Newuser.name)
  }
}
