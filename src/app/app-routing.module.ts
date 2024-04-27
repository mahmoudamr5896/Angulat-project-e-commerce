import { Component, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrdersListComponent } from './Components/orders-list/orders-list.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { MainappComponent } from './Components/mainapp/mainapp.component';
import { LoginformComponent } from './Components/loginform/loginform.component';
import { RegisterformComponent } from './Components/registerform/registerform.component';
import { AuthgarudGuard } from './Garuad/authgarud.guard';
import { AddproductformComponent } from './Components/addproductform/addproductform.component';
import { AddcategoryformComponent } from './Components/addcategoryform/addcategoryform.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';



export const  routes: Routes = [
  {path: '',  component:  MainappComponent,  children: [
    {path: 'Home',  component:HomeComponent ,  children: []},
    { path: 'products', component: ProductsComponent },
    { path: 'product/Add', component: AddproductformComponent },
    { path: 'category/Add', component: AddcategoryformComponent },
    { path: 'products/:pid', component: ProductDetailsComponent },
    { path: 'orders', component: ProductListComponent,canActivate:[AuthgarudGuard] },
    { path: 'myorders', component: OrdersListComponent,canActivate:[AuthgarudGuard] }
   ]},
   {path:'login',component:LoginformComponent},
   {path:'register',component:RegisterformComponent},  
   {path:'dashboard',component:DashboardComponent},  
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
