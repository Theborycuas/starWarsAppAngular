import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from '../character';
import { CharacterService } from '../character.service';



@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css']
})
export class CharactersListComponent implements OnInit, DoCheck, OnDestroy {
  
  character!: Character[];
  errorDoCheck?: Boolean;
  errorMessage?: string;
  errorStatus?: Number;
  errorUrl?: string;
  listCharacter?: any;
  
  constructor(private characterService: CharacterService) {
  }
  
  ngDoCheck(): void {
    console.log("DoCheck");
    if(this.errorDoCheck == false && this.errorStatus == 0){
      alert("Error en la conexión con el API: " + this.errorUrl);
    }
  }
 
  ngOnInit() {
    this.listCharacter = this.characterService.getListPersonajes()
    .subscribe(
      (response) => {                           //Next callback
        console.log('response received')
        console.log(response);
        this.character = response; 
      },
      (error) => {                              //Error callback
        console.error('Request failed with error')
        //alert(error);
        this.errorDoCheck = error.ok;
        this.errorMessage = error.message;
        this.errorStatus = error.status;
        this.errorUrl = error.url;
        console.error(error)
      },
      () => {                                   //Complete callback
        console.log('Request completed')
      })
  }

  
  ngOnDestroy(): void {
    console.log('OnDestroy ON');
    this.listCharacter.unsubscribe();
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
