import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntrevistaService } from 'src/app/services/entrevista.service';
import { IEntrevista } from 'src/models/entrevista.model';

@Component({
  selector: 'app-update-entrevista',
  templateUrl: './update-entrevista.component.html',
  styleUrls: ['./update-entrevista.component.css']
})
export class UpdateEntrevistaComponent implements OnInit {

  request: IEntrevista = {
    id:0,
    observacoes:'',
    vagaId: 0,
    candidatoId:0
  }

  

  constructor(private entrevistaService: EntrevistaService, private router_: Router) { }


  ngOnInit(): void {
  }

  
  salvar()
  {
      this.entrevistaService.criar(this.request).subscribe(res=> {
        this.request = res;
      });

      this.voltar();
  }

  voltar()
  {
    this.router_.navigate([`/entrevista`]);
  }

}
