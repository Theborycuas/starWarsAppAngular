import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { Tooltip } from 'bootstrap';

@Component({
  selector: 'app-form-character',
  templateUrl: './form-character.component.html',
  styleUrls: ['./form-character.component.css']
})
export class FormCharacterComponent implements OnInit {
  tooltipTop!: string;
  tooltipRight!: string;
  tooltipLeft!: string;
  tooltipBottom!: string;
  character: Character = new Character();

  constructor(private characterService:CharacterService, private router:Router, private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCharacterById();
    this.tooltipTop = "Tooltip on top";
    this.tooltipRight = "Tooltip on right";
    this.tooltipLeft = "Tooltip on left";
    this.tooltipBottom = "Tooltip on bottom";
    //tooltio settings
    setTimeout(()=>{  
    Array.from(document.querySelectorAll('div[data-bs-toggle="tooltip"]'))
   .forEach(tooltipNode => new Tooltip(tooltipNode))
     }, 100);
  }

  getCharacterById():void{
    this.activateRoute.params.subscribe(
      c=>{
        let id=c['id']; 
        this.characterService.getPersonajeById(id).subscribe(
          cha=>{
            console.log(cha);
            if (cha !== null) {              
              this.character=cha;
            }else{
              this.router.navigate(['/pageNotFound'])
            }
          }   
        );
        /*if(id){
          this.characterService.getPersonajeById(id).subscribe(
            cha=>this.character=cha
          );
        }else{
          console.error('Request failed with error')
        }*/
      },      
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

  validateNumber(event: KeyboardEvent) {
    const pattern = /^\d*\.?\d*$/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
        event.preventDefault();
    }
  }   
}

