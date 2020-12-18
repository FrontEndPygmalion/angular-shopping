import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { ExponentialPipe } from './pipes/exponential.pipe';
import { DetailComponent } from './pages/detail/detail.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormRegisterComponent } from './components/form-register/form-register.component'

import { HttpClientModule } from '@angular/common/http' /* Modulo http que me sirve para hacer peticione sa un API  */
import { AppRoutingModule  } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CardComponent,
    HeaderComponent,
    ExponentialPipe,
    DetailComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    FormRegisterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule

  ],
  exports : [
    /* Declaracion de modulos que van a ser consumidos por otros modulos */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
