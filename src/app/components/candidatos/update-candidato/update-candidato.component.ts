import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatoService } from 'src/app/services/candidato.service';
import { ICandidato } from 'src/models/candidato.model';

@Component({
  selector: 'app-update-candidato',
  templateUrl: './update-candidato.component.html',
  styleUrls: ['./update-candidato.component.css']
})
export class UpdateCandidatoComponent implements OnInit {
  request: ICandidato = {
    id:0,
    nome:'',
    dataNascimento: new Date
  }
  id:any;
  constructor(private candidatoService: CandidatoService, private route: ActivatedRoute, private _router: Router) { }

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

  alterar()
  {
    this.candidatoService.alterar(this.id,this.request).subscribe(res=>
      alert(`Atualizar:' ${res.id}, Nome: ${res.nome} `)  
    );

    this.voltar();
  }

  voltar()
  {
    this._router.navigate([`/candidato`]);
  }


}
