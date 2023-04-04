import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-header-idioma',
  templateUrl: './header-idioma.component.html',
  styleUrls: ['./header-idioma.component.css']
})
export class HeaderIdiomaComponent implements OnInit , OnChanges{

  @Input() name="";
  names : string[] = [];
  titulo="STAR WARS | GUIA";
  navTitulo="Inicio";
  
  constructor() {}

  ngOnInit() {}
  

  ngOnChanges(changes: SimpleChanges) {
    if (changes['name'].currentValue=="Ingles") {
      this.titulo="STAR WARS | GUIDE ";
      this.navTitulo="Home";
    }else if(changes['name'].currentValue=="Espaniol"){
      this.titulo="STAR WARS | GUIA";
      this.navTitulo="Inicio";
    }
  }
}
