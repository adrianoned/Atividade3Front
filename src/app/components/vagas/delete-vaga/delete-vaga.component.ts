import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VagaService } from 'src/app/services/vaga.service';
import { IVaga } from 'src/models/vaga.model';

@Component({
  selector: 'app-delete-vaga',
  templateUrl: './delete-vaga.component.html',
  styleUrls: ['./delete-vaga.component.css']
})
export class DeleteVagaComponent implements OnInit {
  request: IVaga = {
    id:0,
    descricao:'',
    dataPublicacao : new Date
  }
  id:any;
  constructor(private vagaService: VagaService, 
                          private route: ActivatedRoute, 
                          private router_: Router) { }

  ngOnInit(): void {
    this.id =  this.route.snapshot.paramMap.get('id');
    this.vagaService.getPorId(parseInt(this.id)).subscribe(res=>
        this.request = {
            descricao: res.descricao,
            id: res.id,
            dataPublicacao: res.dataPublicacao
        }
    );
  }

  excluir()
  {
    this.vagaService.excluir(this.id).subscribe(res=>
      alert('Removido com sucesso!')
      );

      this.voltar();
  }

  cancelar()
  {
    this.voltar();
  }

  voltar()
  {
    this.router_.navigate([`/vaga`]);
  }

}
