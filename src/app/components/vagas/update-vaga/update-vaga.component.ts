import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VagaService } from 'src/app/services/vaga.service';
import { IVaga } from 'src/models/vaga.model';

@Component({
  selector: 'app-update-vaga',
  templateUrl: './update-vaga.component.html',
  styleUrls: ['./update-vaga.component.css']
})
export class UpdateVagaComponent implements OnInit {
  request: IVaga = {
    id:0,
    descricao:'',
    dataPublicacao: new Date
  }
  id:any;
  constructor(private vagaService: VagaService, private route: ActivatedRoute, private _router: Router) { }

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

  alterar()
  {
    this.vagaService.alterar(this.id,this.request).subscribe(res=>
      alert(`Atualizar:' ${res.id}, Descrição: ${res.descricao} `)  
    );

    this.voltar();
  }

  voltar()
  {
    this._router.navigate([`/vaga`]);
  }


}
