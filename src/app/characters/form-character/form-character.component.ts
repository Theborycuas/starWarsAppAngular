import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-character',
  templateUrl: './form-character.component.html',
  styleUrls: ['./form-character.component.css']
})
export class FormCharacterComponent implements OnInit {
  character: Character = new Character();

  constructor(private characterService:CharacterService, private router:Router, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCharacterById();
  }


  createPersonaje(): void {

  getCharacterById():void{
    this.activateRoute.params.subscribe(
      c=>{
        let id=c['id'];
        if(id){
          this.characterService.getPersonajeById(id).subscribe(
            cha=>this.character=cha
          );
        }
      }
    )
  }
 
  createPersonaje():void{

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
  updateCharacter():void{
    this.characterService.updatePersonaje(this.character)
    .subscribe(
      res=>this.router.navigate(['/characters'])
    );
  }  
}
