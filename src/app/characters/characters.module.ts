import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
//Importa FormCharacter
import { FormCharacterComponent } from './form-character/form-character.component';
//Importa FormModule
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CharactersListComponent,
    CharacterDetailComponent,
    FormCharacterComponent
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    //Importa FormModule
    FormsModule
  ]
})
export class CharactersModule { }
