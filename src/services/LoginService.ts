import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ILoginService } from 'src/interface/ILoginService';
import { Login } from 'src/models/Login';
import { Usuario } from 'src/models/Usuario';
import { Global } from 'src/shared/Global';
@Injectable({
    'providedIn': 'root'
})
export class LoginService implements ILoginService {

    public apiUrl: string = Global.ApiUrl+"usuarios/login";
    
    constructor(private _http: HttpClient){

    }
     
    login(dados: Login): Observable<Usuario> {
        if(!dados.email) { throw new Error('Campo email é obrigatorio'); }
        if(!dados.senha) { throw new Error('Campo senha é obrigatorio'); }
        
        //  solitação http client
        return this._http.post<Usuario>(this.apiUrl,dados);
    }
}
