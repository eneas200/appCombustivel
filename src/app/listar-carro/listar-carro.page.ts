import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/models/Carro';
import { CarroService } from 'src/services/CarroService';
 
@Component({
  selector: 'app-listar-carro',
  templateUrl: './listar-carro.page.html',
  styleUrls: ['./listar-carro.page.scss'],
})
export class ListarCarroPage implements OnInit {
  public carros: Carro[] = new Array<Carro>();

  constructor(private _router: Router, private _carroService: CarroService) { 
    this.obterCarros();
  }

  cadastrarCarro(){
    this._router.navigate(['/cadastrar-carro']);
  }

  async obterCarros(){
    const listarCarro = await this._carroService.listar();
    this.carros = listarCarro;
    console.log(this.carros);
  }

  ngOnInit() {
  }

}
