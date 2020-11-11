import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuarioService } from 'src/interface/IUsuarioService';
import { Usuario } from 'src/models/Usuario';

import { HttpClient }  from '@angular/common/http';
import { Global } from 'src/shared/Global';

@Injectable({
    'providedIn':'root'
})
export class UsuarioService  implements IUsuarioService{
    public apiUrl: string = `${Global.ApiUrl}usuario`;
    constructor(private _httpClient: HttpClient){}
    // retorna o usuario pelo id
    buscarUsuario(): Observable<Usuario> {
        const usuario: Usuario = this.retornarUsuarioLogado();
        return this._httpClient.get<Usuario>(`${this.apiUrl}/${usuario.id}`);
    }
    // cadastrar o usuario
    cadastrar(usuario: Usuario): Observable<Usuario> {
        if(!usuario.nome) throw new Error("campo nome é obrigatorio"); 
        if(!usuario.email) throw new Error("campo email é obrigatorio");
        if(!usuario.senha) throw new Error("campo senha é obrigatorio");
        if(usuario.senha != usuario.confirmarSenha) throw new Error("As senhas não coincidem!");
        throw new Error("já pode salvar!");
    }
    // atualiza os dados do usuario
    atualizar(usuario: Usuario): Observable<Usuario> {
        throw new Error('Method not implemented.');
    }
    logar(usuario: Usuario): void {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
    }
    retornarUsuarioLogado(): Usuario {
        let usuario: Usuario =  JSON.parse(localStorage.getItem('usuarioLogado'));
        return usuario;
    }
    logout(): void {
        // localStorage.removeItem('usuarioLogado');
        localStorage.clear();
    }
    
}