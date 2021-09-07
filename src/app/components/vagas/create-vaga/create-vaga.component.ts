import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VagaService } from 'src/app/services/vaga.service';
import { IVaga } from 'src/models/vaga.model';

@Component({
  selector: 'app-create-vaga',
  templateUrl: './create-vaga.component.html',
  styleUrls: ['./create-vaga.component.css']
})
export class CreateVagaComponent implements OnInit {

  request: IVaga = {
    id:0,
    descricao:'',
    dataPublicacao : new Date()
  }
  constructor(private vagaService: VagaService, private router_: Router) { }


  ngOnInit(): void {
  }

  
  salvar()
  {
      this.vagaService.criar(this.request).subscribe(res=> {
        this.request = res;
      });

      this.voltar();
  }

  voltar()
  {
    this.router_.navigate([`/vaga`]);
  }

}
