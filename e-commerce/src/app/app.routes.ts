import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './Core/Layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './Core/Components/login/login.component';
import { RegisterComponent } from './Core/Components/register/register.component';
import { MainLayoutComponent } from './Core/Layouts/main-layout/main-layout.component';
import { HomeComponent } from './Feature/Components/home/home.component';
import { BrandsComponent } from './Feature/Components/brands/brands.component';
import { CategoriesComponent } from './Feature/Components/categories/categories.component';
import { CartComponent } from './Feature/Components/cart/cart.component';
import { ProductComponent } from './Feature/Components/product/product.component';
import { PDetailsComponent } from './Feature/Components/p-details/p-details.component';
import { PaymentsComponent } from './Feature/Components/payments/payments.component';
import { NotfoundComponent } from './Core/Layouts/Feature/Components/notfound/notfound.component';

export const routes: Routes = [
{path:'', redirectTo:'home', pathMatch:'full'},
  {path:'', component:AuthLayoutComponent , children:[
    {path:'login', component:LoginComponent , title:'login'},

    {path:'register' , component:RegisterComponent , title:'register'}
  ]},
  {path:'', component:MainLayoutComponent ,children:[
    {path:'home', component:HomeComponent , title:'home'},
    {path:'brands', component:BrandsComponent , title:'brands'},
    {path:'categories', component:CategoriesComponent , title:'categories'},
    {path:'cart', component:CartComponent , title:'cart'},
    {path:'products', component:ProductComponent , title:'products'},
    {path:'p-details', component:PDetailsComponent , title:'p-details'},
    {path:'payment', component:PaymentsComponent , title:'payment'},
  ]}
  ,
  {path:'**', component:NotfoundComponent , title:'404'}
];
