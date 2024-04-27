import { Icategory } from 'src/app/Models/icategory';
import { Component, OnInit } from '@angular/core';
import { ApiCategoriesService } from 'src/app/Services/api-categories.service';

@Component({
  selector: 'app-addcategoryform',
  templateUrl: './addcategoryform.component.html',
  styleUrls: ['./addcategoryform.component.css']
})
export class AddcategoryformComponent implements OnInit {

Category:Icategory = {} as Icategory
categpories:Icategory[] =[]

  constructor(private categoryservice :ApiCategoriesService){
  this.categoryservice.getallcategory().subscribe((prod)=>{
this.categpories = prod
  });
  }
  ngOnInit(): void {
  }
  addCategory(){
    this.categoryservice.addnewcategory(this.Category).subscribe((prod)=>{
      console.log('heloo')
    });
  }

}
