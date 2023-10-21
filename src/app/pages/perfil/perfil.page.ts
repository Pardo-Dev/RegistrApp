import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private router : Router) { }

  usuario : any;

  ngOnInit() {
    this.usuario = this.router.getCurrentNavigation()?.extras.state;
    this.usuario = this.usuario.user;
  }
}
