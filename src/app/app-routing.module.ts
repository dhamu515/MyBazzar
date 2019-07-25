
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path:'product', component:ProductComponent},
  {path:'Home', component:HomeComponent},
  {path:'AllProducts', loadChildren:'./manage-products/manage-products.module#ManageProductsModule'}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
