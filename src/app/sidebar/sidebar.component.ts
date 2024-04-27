import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  seller:boolean=false

  constructor(){
  }
  ngOnInit(): void {
    let seller =  localStorage.getItem('seller')
    if(seller){
       this.seller = true
    }
  }
}
