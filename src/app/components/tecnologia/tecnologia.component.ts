import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TecnologiaService } from 'src/app/services/tecnologia.service';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {

  responseTecnologia: any;
  constructor(private tecnologiaService : TecnologiaService, private _router: Router) { }

  ngOnInit(): void {
    this.tecnologiaService.get()
    .subscribe( res=> this.responseTecnologia = res   );
  }

  inserir()
  {
    this._router.navigate([`tecnologia/create`]);
  }

}
