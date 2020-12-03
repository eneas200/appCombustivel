import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Carro } from 'src/models/Carro';
import { CarroService } from 'src/services/CarroService';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.page.html',
  styleUrls: ['./carro.page.scss'],
})
export class CarroPage implements OnInit {
  public carro_id: number;
  public carro: Carro = new Carro();
  public listaCarro: Carro[] = Array<Carro>();

  constructor(private _carroService: CarroService, private _router: ActivatedRoute, private _nav: Router) { 

    this.listaCarro = this._carroService.carros;

    this._router.params.subscribe((params) => {
      this.carro_id = parseInt(params.carroId);
      //console.log(this.carro_id);
      this.obterCarro();
    });

  }

  ngOnInit() {
  }

  obterCarro(){
    const carroEncontrado = this.listaCarro.find(c => c.id === this.carro_id);
    if(carroEncontrado){
      this.carro = carroEncontrado;
    } else {
      this._nav.navigate(['/listar-carro']);
    }
    //console.log(this.carro);
  }


}
