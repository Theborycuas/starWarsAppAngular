import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../character';
import { CharacterService } from '../character.service';



@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit {
  
  character!: Character[];
  
  constructor(private characterService: CharacterService) {
  }
 
  ngOnInit() {
    this.characterService.getListPersonajes()
    .subscribe(
      (response) => {                           //Next callback
        console.log('response received')
        console.log(response);
        this.character = response; 
      },
      (error) => {                              //Error callback
        console.error('Request failed with error')
        alert(error);
      },
      () => {                                   //Complete callback
        console.log('Request completed')
      })
  }
  
  deleteCharacter(character:Character):void{
    console.log("Delete Character");
    this.characterService.deletePersonajeById(parseInt(character.id))
    .subscribe(
      res=>this.characterService.getListPersonajes()
      .subscribe(
        response=>this.character=response
      )
    );

  }

}
