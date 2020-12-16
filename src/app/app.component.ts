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

  deleteSingleItem(index) {
    this.usuarios.splice(index, 1)
  }




}
