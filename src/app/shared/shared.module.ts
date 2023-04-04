import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AppRoutingModule } from '../app-routing.module';
import { HeaderIdiomaComponent } from './components/header-idioma/header-idioma.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HeaderIdiomaComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports:[HeaderComponent,FooterComponent]
})
export class SharedModule { }
