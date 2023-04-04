import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-idioma-form',
  templateUrl: './idioma-form.component.html',
  styleUrls: ['./idioma-form.component.css']
})
export class IdiomaFormComponent implements OnInit {
  @Input() idiomaInput="Espaniol"; 
  @Output () eventoHijo: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  

  ngOnChanges(changes: SimpleChanges) {
    this.eventoHijo.emit(changes['idiomaInput'].currentValue);

    if (changes['idiomaInput'].previousValue=="Ingles" || changes['idiomaInput'].currentValue=="Espaniol") {
     console.log("holaa");
    }
  }
 
}
