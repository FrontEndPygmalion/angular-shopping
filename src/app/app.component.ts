import { Component } from '@angular/core';
import {Product } from './components/product/product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title;

  usuarios = ['Alejandro', 'Edna', 'Santiago', 'Maria']

  usuario;
  addItem(item){
    this.usuarios.push(item)
  }

  deleteItem(){
    this.usuarios.pop()
  }

  deleteSingleItem(index) {
    this.usuarios.splice(index, 1)
  }


  productos: Product[] = [
    {
      id: 1,
      image: 'https://www.mercadoslpineda.co/1749-large_default/quesito-colanta-x-400-g-montefrio.jpg',
      name: 'quesito',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      price: 2500
    },
    {
      id: 2,
      image: 'https://www.vivosano.org/wp-content/uploads/beneficios-chocolate.jpg',
      name: 'chocolate',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      price: 2500
    },
    {
      id: 3,
      image: 'https://www.vivosano.org/wp-content/uploads/beneficios-chocolate.jpg',
      name: 'chocolate',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      price: 2500
    },
    {
      id: 4,
      image: 'https://www.vivosano.org/wp-content/uploads/beneficios-chocolate.jpg',
      name: 'chocolate',
      description: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry   s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      price: 2500
    }
  ]

clickProduct(id: number) {
    console.log('agregaste el producto con id ', id)
}

}
