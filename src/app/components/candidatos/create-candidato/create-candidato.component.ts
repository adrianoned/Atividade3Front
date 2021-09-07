import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatoService } from 'src/app/services/candidato.service';
import { ICandidato } from 'src/models/candidato.model';

@Component({
  selector: 'app-create-candidato',
  templateUrl: './create-candidato.component.html',
  styleUrls: ['./create-candidato.component.css']
})
export class CreateCandidatoComponent implements OnInit {

  request: ICandidato = {
    id:0,
    nome:'',
    dataNascimento : new Date()
  }
  constructor(private candidatoService: CandidatoService, private router_: Router) { }


  ngOnInit(): void {
  }

  
  salvar()
  {
      this.candidatoService.criar(this.request).subscribe(res=> {
        this.request = res;
      });

      this.voltar();
  }

  voltar()
  {
    this.router_.navigate([`/candidato`]);
  }

}
