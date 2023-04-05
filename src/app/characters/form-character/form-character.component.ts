import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
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
export class FormCharacterComponent implements OnInit, OnDestroy{

  resultado!: string;
  character: Character = new Character();
  imageFormcontrol: FormControl = new FormControl();
  control: FormControl = new FormControl();
  generalValid: FormGroup = new FormGroup({
    birthyear: new FormControl('', [
      Validators.required,      // Es requerido
      Validators.maxLength(50), // Máximo de 50 caracteres
      Validators.minLength(5),  // Mínimo de 4 caracteres   
    ]),
    specie: new FormControl('', [
      Validators.required,      // Es requerido
      Validators.maxLength(50), // Máximo de 50 caracteres
      Validators.minLength(5),  // Mínimo de 4 caracteres   
    ]),
    gender: new FormControl('', [
      Validators.required,      // Es requerido
      Validators.maxLength(50), // Máximo de 50 caracteres
      Validators.minLength(5),  // Mínimo de 4 caracteres   
    ]),
    haircolor: new FormControl('', [
      Validators.required,      // Es requerido
      Validators.maxLength(50), // Máximo de 50 caracteres
      Validators.minLength(5),  // Mínimo de 4 caracteres   
    ]),
    skincolor: new FormControl('', [
      Validators.required,      // Es requerido
      Validators.maxLength(50), // Máximo de 50 caracteres
      Validators.minLength(5),  // Mínimo de 4 caracteres   
    ]),
    homeworld: new FormControl('', [
      Validators.required,      // Es requerido
      Validators.maxLength(50), // Máximo de 50 caracteres
      Validators.minLength(5),  // Mínimo de 4 caracteres   
    ]),
    mass: new FormControl('', [Validators.required, ValidacionesPropias.nocero, ValidacionesPropias.nonegativos]),    
    height: new FormControl('', [Validators.required, ValidacionesPropias.nocero, ValidacionesPropias.nonegativos]),// Es requerido
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
     
    
  } 

  submit() {
    if (this.generalValid.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }

  ngOnInit(): void {
    this.getCharacterById();
    console.log(this.imageFormcontrol);
  }

  ngOnDestroy(): void {
    console.log("OnDestroy On")
  }

  getCharacterById():void{
    this.activateRoute.params.subscribe(
      c=>{
        let id=c['id']; 
        this.characterService.getPersonajeById(id).subscribe(
          cha=>{
            console.log("Obtener Personaje por ID");
            console.log(cha);
            if (cha !== null) {              
              this.character=cha;
            }else{
              this.router.navigate(['/pageNotFound'])
            }
          }   
        );        
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

