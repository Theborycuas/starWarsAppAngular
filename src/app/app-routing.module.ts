import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [{
    path: '', 
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home', 
    redirectTo: 'home',
    pathMatch: 'full'
  }, 
  {
    path: 'characters', 
    redirectTo: 'characters',
    pathMatch: 'full'
  }, 
  {
    path: 'films', 
    redirectTo: 'films',
    pathMatch: 'full'
  }, 
  {
    path: '**', 
    redirectTo: 'home/pageNotFound',
    pathMatch: 'full'
  },  
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'characters',
    loadChildren: () => import('./characters/characters.module').then(m => m.CharactersModule),
  },
  {
    path: 'films',
    loadChildren: () => import('./films/films.module').then(m => m.FilmsModule),
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
