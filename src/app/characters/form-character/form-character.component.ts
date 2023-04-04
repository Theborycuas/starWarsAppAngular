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
  idiomas: any[] = [];

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
  selectIdioma: any;

  CambiarIdioma(idioma: any){
    this.selectIdioma=idioma;

  }
  onMensajeHijo(idioma: any) {
   if(idioma=='Ingles'){
    this.idiomas[0].titulo="Create character"
    this.idiomas[0].nombre="Name"
    this.idiomas[0].anionacimiento="Bithday"
    this.idiomas[0].especie="Specie"
    this.idiomas[0].altura="Height"
    this.idiomas[0].masa="Mass"
    this.idiomas[0].genero="Gender"
    this.idiomas[0].pelocolor="Hair color"
    this.idiomas[0].pielcolor="Skin color"
    this.idiomas[0].mundo="Homeworld"
    this.idiomas[0].url="Url image"
   }   else{
    this.idiomas[0].titulo="Crear personaje"
    this.idiomas[0].nombre="Nombre"
    this.idiomas[0].anionacimiento="Año de nacimiento"
    this.idiomas[0].especie="Especie"
    this.idiomas[0].altura="Altura"
    this.idiomas[0].masa="Masa"
    this.idiomas[0].genero="Genero"
    this.idiomas[0].pelocolor="Color de pelo"
    this.idiomas[0].pielcolor="Color de piel"
    this.idiomas[0].mundo="Mundo natal"
    this.idiomas[0].url="Url imagen"

   } 
   
  }

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

