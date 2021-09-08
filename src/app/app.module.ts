import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TecnologiaComponent } from './components/tecnologias/tecnologia/tecnologia.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';
import { CreateTecnologiaComponent } from './components/tecnologias/create-tecnologia/create-tecnologia.component';
import { UpdateTecnologiaComponent } from './components/tecnologias/update-tecnologia/update-tecnologia.component';
import { DeleteTecnologiaComponent } from './components/tecnologias/delete-tecnologia/delete-tecnologia.component';
import { VagaComponent } from './components/vagas/vaga/vaga.component';
import { CreateVagaComponent } from './components/vagas/create-vaga/create-vaga.component';
import { UpdateVagaComponent } from './components/vagas/update-vaga/update-vaga.component';
import { DeleteVagaComponent } from './components/vagas/delete-vaga/delete-vaga.component';
import { CandidatosComponent } from './components/candidatos/candidatos/candidatos.component';
import { CreateCandidatoComponent } from './components/candidatos/create-candidato/create-candidato.component';
import { UpdateCandidatoComponent } from './components/candidatos/update-candidato/update-candidato.component';
import { DeleteCandidatoComponent } from './components/candidatos/delete-candidato/delete-candidato.component';
import { EntrevistaComponent } from './components/entrevistas/entrevista/entrevista.component';
import { DeleteEntrevistaComponent } from './components/entrevistas/delete-entrevista/delete-entrevista.component';
import { CreateEntrevistaComponent } from './components/entrevistas/create-entrevista/create-entrevista.component';
import { UpdateEntrevistaComponent } from './components/entrevistas/update-entrevista/update-entrevista.component';
@NgModule({
  declarations: [
    AppComponent,
    TecnologiaComponent,
    HomeComponent,
    AboutComponent,
    Error404Component,
    CreateTecnologiaComponent,
    UpdateTecnologiaComponent,
    DeleteTecnologiaComponent,
    VagaComponent,
    CreateVagaComponent,
    UpdateVagaComponent,
    DeleteVagaComponent,
    CandidatosComponent,
    CreateCandidatoComponent,
    UpdateCandidatoComponent,
    DeleteCandidatoComponent,
    EntrevistaComponent,
    DeleteEntrevistaComponent,
    CreateEntrevistaComponent,
    UpdateEntrevistaComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
