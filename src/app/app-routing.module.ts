import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddApiProductComponent } from './components/main/components/api/add-api-product/add-api-product.component';
import { ApiProductDetailsComponent } from './components/main/components/api/api-product-details/api-product-details.component';
import { ApiProductsComponent } from './components/main/components/api/api-products/api-products.component';
import { CategoriesComponent } from './components/main/components/categories/categories.component';
import { NotFoundComponent } from './components/main/components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/main/components/product-details/product-details.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [
  {path:'home',component:MainComponent},
  {path:'products',component:CategoriesComponent},
  {path:'apiProducts',component:ApiProductsComponent},
  {path:'product/:pid',component:ProductDetailsComponent},
  {path:'apiProduct/:id',component:ApiProductDetailsComponent},
  {path:'addApiProduct',component:AddApiProductComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
