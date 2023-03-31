import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-cambios-cheroica',
  templateUrl: './cambios-cheroica.component.html',
  styleUrls: ['./cambios-cheroica.component.css']
})
export class CambiosCheroicaComponent implements OnInit {

  @Input() name="";
  names!: [];
  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: SimpleChanges) {

    if (changes['name'].previousValue) {
    console.log("Entra en el cambio");
    }
  }
}
