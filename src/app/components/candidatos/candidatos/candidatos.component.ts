import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidatoService } from 'src/app/services/candidato.service';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.css']
})
export class CandidatosComponent implements OnInit {
  response: any;
  constructor(private candidatoService : CandidatoService, private _router: Router) { }

  ngOnInit(): void {
    this.candidatoService.get()
    .subscribe( res=> this.response = res   );
  }

  inserir()
  {
    this._router.navigate([`candidato/create`]);
  }

}
