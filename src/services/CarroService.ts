import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICarroService } from 'src/interface/ICarroService';
import { Carro } from 'src/models/Carro';
import { Usuario } from 'src/models/Usuario';
import { Global } from 'src/shared/Global';
import { UsuarioService } from './UsuarioService';
@Injectable({
    'providedIn': 'root'
})
export class CarroService implements ICarroService {
    
    public apiUrl: string = Global.ApiUrl+"carros";
    private _usuarioLogado: Usuario = new Usuario();
    
    constructor(
        private _usuarioService: UsuarioService,
        private _http: HttpClient
        ) {
        this._usuarioLogado = this._usuarioService.retornarUsuarioLogado();
    }

    cadastrar(carro: Carro): Observable<Carro> {
        if(!carro.modelo) throw new Error('O campo modelo deve ser prenchido!');
        if(!carro.montadora) throw new Error('O campo montadora deve ser prenchido!');
        if(!carro.consumoAlcool) throw new Error('O campo cosumo alcool deve ser prenchido!'); 
        if(!carro.consumoGasolina) throw new Error('O campo cosumo gasolina deve ser prenchido!');
        
        carro.usuario_id = this._usuarioLogado.id
        console.log(carro);
        return this._http.post<Carro>(this.apiUrl, carro);
    }
    remove(carro_id: number): void {
        throw new Error('Method not implemented.');
    }
    editar(carro: Carro): Observable<Carro> {
        throw new Error('Method not implemented.');
    }
    buscar(carro_id: number): Observable<Carro>{
        throw new Error('Method not implemented.');
    }
    listar(): Promise<Carro[]> {

        const promise = new Promise<Carro[]>(async (resolve, reject) =>{
            try{
                const usuario = await this._usuarioService.buscarUsuario().toPromise();
                resolve(usuario.carros);
            } catch(e) {
                reject(e)
            }
         });
        return promise;
    }
    
    calcularLitros(carro: Carro, tipoCombustivel: number, distancia: number): number {
        throw new Error('Method not implemented.');
    }
    
}