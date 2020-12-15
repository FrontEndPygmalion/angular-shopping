import { Component } from '@angular/core';

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

  productos = [
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
