import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharacterService } from '../character.service';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';
import { FormControl, Validators, FormGroup ,FormBuilder} from '@angular/forms';
import { ValidacionesPropias } from 'src/app/validaciones-propias';


@Component({
  selector: 'app-form-character',
  templateUrl: './form-character.component.html',
  styleUrls: ['./form-character.component.css']
})
export class FormCharacterComponent implements OnInit {

  resultado!: string;

  character: Character = new Character();
  imageFormcontrol: FormControl = new FormControl();
  control: FormControl = new FormControl();
  generalValid: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    name: new FormControl(''),
    birthyear: new FormControl(''),
    specie: new FormControl(''),
    gender: new FormControl(''),
    haircolor: new FormControl(''),
    skincolor: new FormControl(''),
    homeworld: new FormControl('')
  });

  constructor(private characterService:CharacterService, private router:Router, private activateRoute:ActivatedRoute, private formBuilder: FormBuilder) {

    this.control = new FormControl('', [
      Validators.required,      // Es requerido
      Validators.maxLength(50), // Máximo de 50 caracteres
      Validators.minLength(5),  // Mínimo de 4 caracteres   
    ]);  
    
    this.imageFormcontrol = new FormControl('', [
      Validators.required,      // Es requerido
      Validators.minLength(5),  // Mínimo de 5 caracteres
      Validators.pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/)   //Validamos que sea una url correcta.
    ]); 
     
    
  }/*
  formularioContacto = new FormGroup({
    mass: new FormControl('',[ValidacionesPropias.multiplo5]),
    
    height: new FormControl('')
  });*/

  formularioContacto = this.formBuilder.group({
    mass: ['', [Validators.required, ValidacionesPropias.nocero, ValidacionesPropias.nonegativos]],// Es requerido
    height: ['', [Validators.required]]// Es requerido

  });

  

  submit() {
    if (this.formularioContacto.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }

  ngOnInit(): void {
    this.getCharacterById();
    console.log(this.imageFormcontrol);
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

