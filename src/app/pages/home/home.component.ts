import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('https://rickandmortyapi.com/api/character/?page=1')
      .subscribe(
        result => {
          // console.log(result)
          this.products = result.results
        },
        error => {
          console.log(error)
        }
      )
  }

}
