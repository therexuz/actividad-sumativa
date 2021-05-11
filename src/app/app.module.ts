import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { CrearNotaComponent } from './crear-nota/crear-nota.component';
import { MisNotasComponent } from './mis-notas/mis-notas.component';
import { FooterComponent } from './footer/footer.component';
import { EditarNOtaComponent } from './editar-nota/editar-nota.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { NotasService } from './servicios/notas.service';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    CrearNotaComponent,
    MisNotasComponent,
    FooterComponent,
    EditarNOtaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [NotasService],
  bootstrap: [AppComponent]
})
export class AppModule {}
