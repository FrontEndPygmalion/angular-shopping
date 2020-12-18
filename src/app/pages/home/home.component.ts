import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from '../../components/product/product.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  products: Product[] = [
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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://rickandmortyapi.com/api/character/?page=1')
      .subscribe(
        result => {
          // this.products = result.results
        },
        error => {
          console.log(error)
        }
      )
  }


  clickProduct(id: number) {
    console.log('agregaste el producto con id ', id)
  }

}
