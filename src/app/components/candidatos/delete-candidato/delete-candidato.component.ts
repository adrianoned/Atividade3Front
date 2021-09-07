import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatoService } from 'src/app/services/candidato.service';
import { ICandidato } from 'src/models/candidato.model';

@Component({
  selector: 'app-delete-candidato',
  templateUrl: './delete-candidato.component.html',
  styleUrls: ['./delete-candidato.component.css']
})
export class DeleteCandidatoComponent implements OnInit {
  request: ICandidato = {
    id:0,
    nome:'',
    dataNascimento : new Date
  }
  id:any;
  constructor(private candidatoService: CandidatoService, 
                          private route: ActivatedRoute, 
                          private router_: Router) { }

  ngOnInit(): void {
    this.id =  this.route.snapshot.paramMap.get('id');
    this.candidatoService.getPorId(parseInt(this.id)).subscribe(res=>
        this.request = {
            nome: res.nome,
            id: res.id,
            dataNascimento: res.dataNascimento
        }
    );
  }

  excluir()
  {
    this.candidatoService.excluir(this.id).subscribe(res=>
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
    this.router_.navigate([`/candidato`]);
  }

}
