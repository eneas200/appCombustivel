import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  
  constructor(private _menu: MenuController) { }
  
  ngOnInit() {
    console.log("O menu foi bloqueado");
    // bloqueando o menu inicial ao iniciar a view
    this._menu.swipeGesture(false);
  }

}
