import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icategory } from '../Models/icategory';

@Injectable({
  providedIn: 'root'
})
export class ApiCategoriesService {

  constructor(private HttpClient:HttpClient) { 

  }
  getallcategory(): Observable<Icategory[]>
  {
  return   this.HttpClient.get<Icategory[]>('http://localhost:3000/Category')
  }
  addnewcategory(newcategory:Icategory)
  {
    return this.HttpClient.post<Icategory>('http://localhost:3000/category',newcategory)
  }

}
