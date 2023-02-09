import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';


@NgModule({
  declarations: [
    HomeComponent,
    ErrorNotFoundComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
