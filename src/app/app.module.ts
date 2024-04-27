import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { OrdersListComponent } from './Components/orders-list/orders-list.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginformComponent } from './Components/loginform/loginform.component';
import { MainappComponent } from './Components/mainapp/mainapp.component';
import { RegisterformComponent } from './Components/registerform/registerform.component'; // Import FormsModule
import { AddproductformComponent } from './Components/addproductform/addproductform.component';
import { AddcategoryformComponent } from './Components/addcategoryform/addcategoryform.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    ProductsComponent,
    OrdersListComponent,
    ProductListComponent,
    ProductDetailsComponent,
    LoginformComponent,
    MainappComponent,
    RegisterformComponent,
    AddproductformComponent,
    AddcategoryformComponent,
    DashboardComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
