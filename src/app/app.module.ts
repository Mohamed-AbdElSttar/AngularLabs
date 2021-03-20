import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsComponent } from './components/main/components/products/products.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsdtoegpPipe } from './pipes/usdtoegp.pipe';
import { CategoriesComponent } from './components/main/components/categories/categories.component';
import { NotFoundComponent } from './components/main/components/not-found/not-found.component';
import { ProductDetailsComponent } from './components/main/components/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiProductsComponent } from './components/main/components/api/api-products/api-products.component';
import { ApiProductDetailsComponent } from './components/main/components/api/api-product-details/api-product-details.component';
import { AddApiProductComponent } from './components/main/components/api/add-api-product/add-api-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    ProductsComponent,
    HighlightDirective,
    UsdtoegpPipe,
    CategoriesComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    ApiProductsComponent,
    ApiProductDetailsComponent,
    AddApiProductComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
