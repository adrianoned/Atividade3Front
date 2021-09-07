import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TecnologiaService } from 'src/app/services/tecnologia.service';
import { ITecnologia } from 'src/models/tecnologia.model';

@Component({
  selector: 'app-delete-tecnologia',
  templateUrl: './delete-tecnologia.component.html',
  styleUrls: ['./delete-tecnologia.component.css']
})
export class DeleteTecnologiaComponent implements OnInit {
  request: ITecnologia = {
    id:0,
    descricao:''
  }
  id:any;
  constructor(private tecnologiaService: TecnologiaService, 
                          private route: ActivatedRoute, 
                          private router_: Router) { }

  ngOnInit(): void {
    this.id =  this.route.snapshot.paramMap.get('id');
    this.tecnologiaService.getPorId(parseInt(this.id)).subscribe(res=>
        this.request = {
            descricao: res.descricao,
            id: res.id
        }
    );
  }

  excluir()
  {
    this.tecnologiaService.excluir(this.id).subscribe(res=>
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
    this.router_.navigate([`/tecnologia`]);
  }

}
