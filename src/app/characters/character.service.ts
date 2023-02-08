import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Character } from './character';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private baseURL: string = "http://localhost:9094/personaje/";
  
  constructor(private http: HttpClient) {
  }
 
  //Obtener Todos los Personajes
  public getListPersonajes():Observable<Character[]> { 
    return this.http.get<Character[]>(this.baseURL);      
  }

  //Crear Personaje

  public createPersonaje(character:Character):Observable<Character>{
    return this.http.post<Character>(this.baseURL  + 'create', character);
  }

  //Actualizar Personaje

  public updatePersonaje(character:Character):Observable<Character>{
    return this.http.post<Character>(this.baseURL + 'update', character);
  }

  //Obtener Personaje por Id

  public getPersonajeById(id:number):Observable<Character>{
    return this.http.get<Character>(this.baseURL + id);
  }

  //Eliminar Personaje por Id

  public deletePersonajeById(id:number):Observable<Character>{
    return this.http.get<Character>(this.baseURL + 'delete/' + id);
  }
}
