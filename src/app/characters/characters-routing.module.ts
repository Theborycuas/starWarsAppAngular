import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { FormCharacterComponent } from './form-character/form-character.component';

const routes: Routes = [{
  path:'',
  component:CharactersListComponent
},
{
  path: 'character-detail',
  component: CharacterDetailComponent,
  
},
{
  path:'form-character',
  component: FormCharacterComponent,
},
{
  path:'form-character/:id',
  component: FormCharacterComponent,
},
{
  path: 'pageNotFound',
  loadChildren: () => import('../error-not-found/error-not-found.module').then(m => m.ErrorNotFoundModule),
}, 
{
  path: '**', 
  redirectTo: 'pageNotFound'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }
