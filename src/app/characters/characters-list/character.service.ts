import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  baseURL: string = "http://localhost:9094/";
  repos!: Character[];
  
  constructor(private http: HttpClient) {
  }
 
  ngOnInit() {
    this.getListPersonajes()
  }
  //Obtener un Personaje
  public getListPersonajes() { 
    return this.http.get<Character[]>(this.baseURL + 'personaje/all' );      
  }

  //Crear Personaje

  public createPersonaje(character:Character){
    return this.http.post<Character>(this.baseURL  + 'personaje/create', character);
  }

  //Obtener Personaje

  public getPersonaje(id:number){
    return this.http.get<Character>(this.baseURL + 'personaje/' + id);
  }

  //Actualizar Personaje

  public updatePersonaje(character:Character){
    return this.http.post<Character>(this.baseURL + 'personaje/update', character);
  }

  //Eliminar Personaje

  public deletePersonaje(id:number){
    return this.http.get<Character>(this.baseURL + 'personaje/delete/' + id);
  }
}
