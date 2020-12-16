import { Component } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector : 'app-product',
  templateUrl: './product.component.html'
})

export class ProductComponent {
  productos: Product[] = [
    {
      id: 1,
      image: 'https://www.mercadoslpineda.co/1749-large_default/quesito-colanta-x-400-g-montefrio.jpg',
      name: 'quesito',
      description: 'delicioso quesito',
      price: 2500
    },
    {
      id: 2,
      image: 'https://www.vivosano.org/wp-content/uploads/beneficios-chocolate.jpg',
      name: 'chocolate',
      description: 'delicioso quesito',
      price: 2500
    }
  ]
}
