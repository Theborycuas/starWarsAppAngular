import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Personaje {
  id!: string;
  name!: string;
  birthyear!: string;
  specie!: string;
  height!: string;
  image!: string;
}

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  baseURL: string = "http://localhost:9094/";
  repos!: Personaje[];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPesonajeById(1)
  }
  

  public getPesonajeById(id: number){
    return this.http.get<Personaje[]>(this.baseURL + 'personaje/' + id)
    .subscribe(
      (response) => {
        console.log('Response receibed - Perosnaje By Id')
        console.log(response);
        this.repos = response;
      },
      (error) => {
        console.error('Request failed with error')
        alert(error);
      },
      () => {
        console.log('request completed')
      }
    )

  }

}
