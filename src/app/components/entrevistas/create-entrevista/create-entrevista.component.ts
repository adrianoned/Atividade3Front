import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatoService } from 'src/app/services/candidato.service';
import { EntrevistaService } from 'src/app/services/entrevista.service';
import { TecnologiaService } from 'src/app/services/tecnologia.service';
import { VagaService } from 'src/app/services/vaga.service';
import { ICandidato } from 'src/models/candidato.model';
import { IEntrevista } from 'src/models/entrevista.model';
import { ITecnologia, ITecnologiaOpcoes } from 'src/models/tecnologia.model';

@Component({
  selector: 'app-create-entrevista',
  templateUrl: './create-entrevista.component.html',
  styleUrls: ['./create-entrevista.component.css']
})
export class CreateEntrevistaComponent implements OnInit {

  request: IEntrevista = {
    id:0,
    observacoes:'',
    vagaId: 0,
    candidatoId:0
  }

  responseVaga: any;
  responseCandidato: any;
  responseTecnologias: any;
  selecionados: any[] = [];

  tecnologias: ITecnologia[] = [];

  constructor(private entrevistaService: EntrevistaService,
              private vagaService : VagaService,
              private candidatoService : CandidatoService, 
              private tecnologiasService : TecnologiaService, 
              private router_: Router) { }


  ngOnInit(): void {
    this.vagaService.get()
    .subscribe( res=> this.responseVaga = res   );

    this.candidatoService.get()
    .subscribe( res=> this.responseCandidato = res   );

    this.tecnologiasService.get()
    .subscribe( res=> this.responseTecnologias = res   );
  }

  
  salvar()
  {
    this.tecnologiasService.get()
    .subscribe( res=> this.tecnologias.push(res)  );

      this.candidatoService.getPorId(this.request.candidatoId).subscribe(res=>
      this.request.candidato = {
          nome: res.nome,
          id: res.id,
          dataNascimento: res.dataNascimento,
          tecnologias: this.tecnologias
      });

      this.entrevistaService.criar(this.request).subscribe(res=> {
        this.request = res;
      });

      this.voltar();
  }

  voltar()
  {
    this.router_.navigate([`/entrevista`]);

    
  }

  checked(item : ITecnologia){
    if(this.selecionados.indexOf(item) != -1){
      return true;
    }

    return false;
  }
  
  // when checkbox change, add/remove the item from the array
  onChange(checked :any, item : ITecnologia){
    if(checked.checked){
    this.selecionados.push(item);
    } else {
      this.selecionados.splice(this.selecionados.indexOf(item), 1)
    }
  }

}