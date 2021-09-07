import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TecnologiaService } from 'src/app/services/tecnologia.service';
import { ITecnologia } from 'src/models/tecnologia.model';

@Component({
  selector: 'app-update-tecnologia',
  templateUrl: './update-tecnologia.component.html',
  styleUrls: ['./update-tecnologia.component.css']
})
export class UpdateTecnologiaComponent implements OnInit {
  request: ITecnologia = {
    id:0,
    descricao:''
  }
  id:any;
  constructor(private tecnologiaService: TecnologiaService, private route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
    this.id =  this.route.snapshot.paramMap.get('id');
    this.tecnologiaService.getPorId(parseInt(this.id)).subscribe(res=>
        this.request = {
            descricao: res.descricao,
            id: res.id

        }
    );
  }

  alterar()
  {
    this.tecnologiaService.alterar(this.id,this.request).subscribe(res=>
      alert(`Atualizar:' ${res.id}, Descrição: ${res.descricao} `)  
    );

    this.voltar();
  }

  voltar()
  {
    this._router.navigate([`/tecnologia`]);
  }


}
