
import { Routes } from '@angular/router';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './core/components/login/login.component';
import { RegisterComponent } from './core/components/register/register.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { HomeComponent } from './features/components/home/home.component';
import { NotfoundComponent } from './features/components/notfound/notfound.component';
import { BrandsComponent } from './features/components/brands/brands.component';
import { CategoriesComponent } from './features/components/categories/categories.component';
import { CartComponent } from './features/components/cart/cart.component';
import { ProductsComponent } from './features/components/products/products.component';
import { authGuard } from './core/guards/auth-guard';
import { CheckoutComponent } from './features/components/Checkout/checkout/checkout.component';
import { AllordersComponent } from './features/components/AllOrders/allorders/allorders.component';
import { WishlistComponent } from './features/components/wishlist/wishlist.component';

export const routes: Routes = [

    {path:'' , redirectTo:'login' , pathMatch:'full'},

    {path:'' , component:AuthLayoutComponent , children:[
        {path: 'login' , component:LoginComponent , title:'Login'},
        {path: 'register' , component:RegisterComponent , title:'Register'}
    ]},

    {path:'' , component:MainLayoutComponent , canActivate:[authGuard]  , children:[

        {path:'home' , component:HomeComponent , title:'Home'},
        {path:'brands' , component:BrandsComponent , title:'Home'},
        {path:'categories' , component:CategoriesComponent , title:'Home'},
        {path:'cart'  , component:CartComponent , title:'Home'},
           { path: 'wishlist', component:WishlistComponent, title: 'Wishlist' },
        {path:'products' , component:ProductsComponent , title:'Home'},
        {path:'checkout/:c_id' , component:CheckoutComponent , title:'Check-Out'},
        {path:'allorders' , component:AllordersComponent , title:'Orders'},
        {path:'p_details/:p_id' , loadComponent: ()=> import('./features/components/p-details/p-details.component').then( (c)=>c.PDetailsComponent )  , title:'product details'},
    ]},
    {path:"**" , component:NotfoundComponent , title:'404'}

];
