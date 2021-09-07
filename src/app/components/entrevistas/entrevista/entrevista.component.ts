import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EntrevistaService } from 'src/app/services/entrevista.service';

@Component({
  selector: 'app-entrevista',
  templateUrl: './entrevista.component.html',
  styleUrls: ['./entrevista.component.css']
})
export class EntrevistaComponent implements OnInit {

  response: any;
  constructor(private entrevistaService : EntrevistaService, private _router: Router) { }

  ngOnInit(): void {
    this.entrevistaService.get()
    .subscribe( res=> this.response = res   );
  }

  inserir()
  {
    this._router.navigate([`entrevista/create`]);
  }

}

