import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LoginModalComponent } from './shared/components/header/login-modal/login-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoadingComponent } from './shared/components/loading/loading.component';
import { ProductsComponent } from './pages/products/products/products.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './shared/guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ProductService } from './services/product.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductDetailComponent } from './pages/products/pages/product-detail/product-detail.component';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CapitalizeFirstPipe } from './shared/pipes/capitaliaze-first.pipe';
import { UniversalInterceptor } from './shared/interceptors/universal.interceptor';
import { TokenInterceptor } from './shared/interceptors/token.interceptor';
import { JWTTokenService } from './services/jwttoken.service';
import { LocalStorageService } from './services/local-storage.service';
import { StarsComponent } from './pages/products/components/stars/stars.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginModalComponent,
    LoadingComponent,
    ProductsComponent,
    HomeComponent,
    FooterComponent,
    ProductDetailComponent,
    CapitalizeFirstPipe,
    StarsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
  ],
  exports: [CapitalizeFirstPipe],
  providers: [
    AuthService,
    AuthGuard,
    ProductService,
    JWTTokenService,
    NgbActiveModal,
    LocalStorageService,
    { provide: HTTP_INTERCEPTORS, useClass: UniversalInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
