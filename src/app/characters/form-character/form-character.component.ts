import { Component, OnInit } from '@angular/core';
import { Character } from '../characters-list/character';
import { CharacterService } from '../characters-list/character.service';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-form-character',
  templateUrl: './form-character.component.html',
  styleUrls: ['./form-character.component.css']
})
export class FormCharacterComponent implements OnInit {
  character: Character = new Character();
  tittle: String = "Prueba Crear";

  constructor(private characterService:CharacterService, private router:Router) { }

  ngOnInit(): void {
  }

  createPersonaje(): void {
    console.log(this.character);
    this.characterService.createPersonaje(this.character)
    .subscribe(
      res=>this.router.navigate(['/characters'])
    );
  }

  validateNumber(event: KeyboardEvent) {
    const pattern = /^\d*\.?\d*$/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
        event.preventDefault();
    }
  }
}
