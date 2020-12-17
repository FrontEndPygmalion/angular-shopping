import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {

  @Input() product: Product /* este input nos permite traer informacion de un componente padre, en este caso el producto */

  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  addCart() {
    this.productClicked.emit(this.product.id)
  }

}
