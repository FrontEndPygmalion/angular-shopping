import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  id: any;
  product: any;


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( (parammetros: ParamMap)=> {
      this.id = parammetros.get('id')
    } )


   this.http.get(`https://rickandmortyapi.com/api/character/${this.id}`)
  .subscribe(
    result => {
      console.log(result)
      this.product = result
    },
    error => {
      console.log(error)
    }
  )
  }


}
