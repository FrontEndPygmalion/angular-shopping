import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChange,
  OnInit,
  DoCheck,
  OnDestroy
} from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {

  constructor() {
    console.log('1. Constructor')
  }

  // ngOnChanges(changes: SimpleChange) {
  //   console.log('2. ngOnChanges', changes)
  // }

  ngOnInit() {
    console.log('3. ng On Init')

  }

  ngDoCheck(){
    console.log('4. DoCheck')
  }

  ngOnDestroy(){
    console.log('5. OnDestroy')
  }

  @Input() product: Product /* este input nos permite traer informacion de un componente padre, en este caso el producto */


  @Output() productClicked: EventEmitter<any> = new EventEmitter();

  addCart() {
    this.productClicked.emit(this.product.id)
  }
}
