import { Component, OnInit } from '@angular/core';
import {Datastore} from '../ViewModels/datastore'
import { AdsoffersService } from '../Services/adsoffers.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
storedata: Datastore;
constructor(private adsservise: AdsoffersService){
          this.storedata = new Datastore(
          'hhhhhhh',
          'https://fakeimg.pl/350x200/?text=World&font=lobster',
          6,['1.png','1.png','1.png','1.png']  
          )
}
  ngOnInit(): void {
    this.adsservise.getaddstoshow(3).subscribe(
    {
      next:(data:string)=>{
        console.log(data)
      },
      error:(err:string)=>{
       console.log(err)
      },
      complete:()=>{
        console.log('Finshadds')
      }
       
    });
         
  }
}
