import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VagaService } from 'src/app/services/vaga.service';

@Component({
  selector: 'app-vaga',
  templateUrl: './vaga.component.html',
  styleUrls: ['./vaga.component.css']
})
export class VagaComponent implements OnInit {

  response: any;
  constructor(private vagaService : VagaService, private _router: Router) { }

  ngOnInit(): void {
    this.vagaService.get()
    .subscribe( res=> this.response = res   );
  }

  inserir()
  {
    this._router.navigate([`vaga/create`]);
  }

}
