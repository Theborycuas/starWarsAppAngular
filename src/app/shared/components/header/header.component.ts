import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectIdioma: any;

  constructor() { }

  ngOnInit(): void {
  }
  CambiarIdioma(idioma: any){
    console.log(idioma);
    this.selectIdioma=idioma;

  }
}
