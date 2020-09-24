import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/services/UsuarioService';
import { Usuario } from 'src/models/Usuario';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.page.html',
  styleUrls: ['./cadastrar-usuario.page.scss'],
})
export class CadastrarUsuarioPage implements OnInit {
  
  public usuario: Usuario = new Usuario();

  constructor(private _usuarioService: UsuarioService) { 
  }

  ngOnInit() {
    
  }

  criarUsuario() {
    console.log(this.usuario);
    this._usuarioService.cadastrar(this.usuario);
  }
}
