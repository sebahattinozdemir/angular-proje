import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductDetailComponent } from './pages/products/pages/product-detail/product-detail.component';
import { ProductsComponent } from './pages/products/products/products.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'product',
    component: ProductsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'product/product-detail/:id',
    component: ProductDetailComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{  initialNavigation: 'enabled',})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
