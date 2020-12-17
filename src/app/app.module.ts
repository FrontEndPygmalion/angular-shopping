import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductComponent } from './components/product.component';
import { CardComponent } from './card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { ExponentialPipe } from './pipes/exponential.pipe'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CardComponent,
    HeaderComponent,
    ExponentialPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  exports : [
    /* Declaracion de modulos que van a ser consumidos por otros modulos */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
