import { Component, OnInit } from '@angular/core';
import { Character } from '../characters-list/character';
import { CharacterService } from '../characters-list/character.service';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-character',
  templateUrl: './form-character.component.html',
  styleUrls: ['./form-character.component.css']
})
export class FormCharacterComponent implements OnInit {
  character: Character = new Character();
  tittle: String = "Prueba Crear";

  constructor(private characterService:CharacterService, private router:Router, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.cargarCharacter();
  }

  cargarCharacter():void{
    this.activateRoute.params.subscribe(
      c=>{
        let id=c['id'];
        if(id){
          this.characterService.getPersonaje(id).subscribe(
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

  updateCharacter():void{
    this.characterService.updatePersonaje(this.character)
    .subscribe(
      res=>this.router.navigate(['/characters'])
    );
  }  

}
