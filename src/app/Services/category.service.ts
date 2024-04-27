import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  Category: any[] = [];
  constructor(){
    this.Category=[
      {id:1,name:'Mobile'},
      {id:2,name:'Device Desktop'},
      {id:3,name:'Samsung'}
    ]
  
    
  }
  getallcategory(){
    return this.Category
  }
}
