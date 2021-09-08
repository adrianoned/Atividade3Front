import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';
import { TecnologiaComponent } from './components/tecnologias/tecnologia/tecnologia.component';
import { CreateTecnologiaComponent } from './components/tecnologias/create-tecnologia/create-tecnologia.component';
import { UpdateTecnologiaComponent } from './components/tecnologias/update-tecnologia/update-tecnologia.component';
import { DeleteTecnologiaComponent } from './components/tecnologias/delete-tecnologia/delete-tecnologia.component';
import { CreateVagaComponent } from './components/vagas/create-vaga/create-vaga.component';
import { VagaComponent } from './components/vagas/vaga/vaga.component';
import { UpdateVagaComponent } from './components/vagas/update-vaga/update-vaga.component';
import { DeleteVagaComponent } from './components/vagas/delete-vaga/delete-vaga.component';
import { CreateCandidatoComponent } from './components/candidatos/create-candidato/create-candidato.component';
import { CandidatosComponent } from './components/candidatos/candidatos/candidatos.component';
import { UpdateCandidatoComponent } from './components/candidatos/update-candidato/update-candidato.component';
import { DeleteCandidatoComponent } from './components/candidatos/delete-candidato/delete-candidato.component';
import { CreateEntrevistaComponent } from './components/entrevistas/create-entrevista/create-entrevista.component';
import { EntrevistaComponent } from './components/entrevistas/entrevista/entrevista.component';
import { UpdateEntrevistaComponent } from './components/entrevistas/update-entrevista/update-entrevista.component';
import { DeleteEntrevistaComponent } from './components/entrevistas/delete-entrevista/delete-entrevista.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about/:id', component: AboutComponent },
  { path: 'tecnologia', component: TecnologiaComponent },
  { path: 'tecnologia/create', component: CreateTecnologiaComponent },
  { path: 'tecnologia/update/:id', component: UpdateTecnologiaComponent },
  { path: 'tecnologia/delete/:id', component: DeleteTecnologiaComponent },

  { path: 'vaga', component: VagaComponent },
  { path: 'vaga/create', component: CreateVagaComponent },
  { path: 'vaga/update/:id', component: UpdateVagaComponent },
  { path: 'vaga/delete/:id', component: DeleteVagaComponent },

  { path: 'candidato', component: CandidatosComponent },
  { path: 'candidato/create', component: CreateCandidatoComponent },
  { path: 'candidato/update/:id', component: UpdateCandidatoComponent },
  { path: 'candidato/delete/:id', component: DeleteCandidatoComponent },

  { path: 'entrevista', component: EntrevistaComponent },
  { path: 'entrevista/create', component: CreateEntrevistaComponent },
  { path: 'entrevista/update/:id', component: UpdateEntrevistaComponent },
  { path: 'entrevista/delete/:id', component: DeleteEntrevistaComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**', component: Error404Component
  }

];


@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})

export class AppRoutingModule { }