import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-character',
  templateUrl: './form-character.component.html',
  styleUrls: ['./form-character.component.css']
})
export class FormCharacterComponent implements OnInit, OnChanges {
  character: Character = new Character();
  heroic: any[] = [
    {
      "name": "Clase heroica",
      "description": "",
      "image": ""
    },
    {
      "name": "Explorador",
      "description": "Un astuto y diestro pionero capacitado para actuar en la inmensidad del espacio y en los mundos más apartados.",
      "image": "http://images1.wikia.nocookie.net/starwars/images/thumb/1/11/RorworrWookieeScout-WotC.jpg/285px-RorworrWookieeScout-WotC.jpg"
    },
    {
      "name": "Granuja",
      "description": "Un bribón taimado y hábil que logra el éxito a hurtadillas, y no mediante la fuerza bruta.",
      "image": "http://images3.wikia.nocookie.net/starwars/images/thumb/5/51/DeelSuroolTwiLekScoundrel.JPG/241px-DeelSuroolTwiLekScoundrel.JPG"
    },
    {
      "name": "Jedi",
      "description": "Los Jedi son los guardianes de la paz y la justicia en la galaxia. Ellos aprenden a dominar la Fuerza, y su arma icónica es el sable de luz.",
      "image": "http://images4.wikia.nocookie.net/starwars/images/thumb/8/83/SiaLanWezzHumanJediGuardian.JPG/446px-SiaLanWezzHumanJediGuardian.JPG"
    },
    {
      "name": "Noble",
      "description": "Un maestro de la negociación y los acuerdos que inspira confianza y resulta ser un gran líder.",
      "image": "http://images3.wikia.nocookie.net/starwars/images/thumb/8/8c/Aranikorden.jpg/201px-Aranikorden.jpg"
    },
    {
      "name": "Soldado",
      "description": " Un guerrero con excepcional talento combativo y una habilidad con las armas sin parangón.",
      "image": "http://images2.wikia.nocookie.net/starwars/images/thumb/a/aa/VorEnKurnHumanSoldier.JPG/251px-VorEnKurnHumanSoldier.JPG"
    }
  ];
  constructor(private characterService: CharacterService, private router: Router, private activateRoute: ActivatedRoute) { }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

 @Input() heroclassN: String="";
 @Input() heroclassD: String="";
 @Input() heroclassI: String="";
  
  ngOnInit(): void {
    this.getCharacterById();
    //this.heroclass="Clase heroica";

  }
  
  changes(): void{
    console.log(this.heroclassN);
    for (let i = 0; i < this.heroic.length; i++) {
      if(this.heroclassN==this.heroic[i].name){
        console.log(this.heroic[i].description);
        this.heroclassD=this.heroic[i].description;
        this.heroclassI=this.heroic[i].image;
      }
    }
    
  }
  
  getCharacterById(): void {
    this.activateRoute.params.subscribe(
      c => {
        let id = c['id'];
        this.characterService.getPersonajeById(id).subscribe(
          cha => {
            console.log(cha);
            if (cha !== null) {
              this.character = cha;
            } else {
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

  createPersonaje(): void {
    console.log(this.character);
    this.characterService.createPersonaje(this.character)
      .subscribe(
        res => this.router.navigate(['/characters'])
      );
  }

  updateCharacter(): void {
    this.characterService.updatePersonaje(this.character)
      .subscribe(
        res => this.router.navigate(['/characters'])
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

