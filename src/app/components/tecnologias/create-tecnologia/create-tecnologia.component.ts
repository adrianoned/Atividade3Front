import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TecnologiaService } from 'src/app/services/tecnologia.service';
import { ITecnologia } from 'src/models/tecnologia.model';

@Component({
  selector: 'app-create-tecnologia',
  templateUrl: './create-tecnologia.component.html',
  styleUrls: ['./create-tecnologia.component.css']
})
export class CreateTecnologiaComponent implements OnInit {

  request: ITecnologia = {
    id:0,
    descricao:''
  }
  constructor(private tecnologiaService: TecnologiaService, private router_: Router) { }

  ngOnInit(): void {
  }

  salvar()
  {
      this.tecnologiaService.criar(this.request).subscribe(res=> {
        this.request = res;
      });

      this.voltar();
  }

  voltar()
  {
    this.router_.navigate([`/tecnologia`]);
  }

}
