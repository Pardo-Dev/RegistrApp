import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { UsuarioStorageService } from 'src/app/services/usuario-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  correo : string = "";
  clave_1 : string = "";

  admin: any = {
    rut: '21336770-6',
    nombre: 'Lucas',
    ap_paterno : 'Antil',
    ap_materno : 'Gaete',
    correo: 'lu.antil@duocuc.cl',
    fecha_nacimiento: '2003-12-03',
    tipo_usuario: 'administrador',
    clave_1: 'CharizardX',
    clave_2: 'CharizardX'
  }

  constructor(private usuarioStorage : UsuarioStorageService,
              private router : Router) { }

  async ngOnInit() {
    await this.usuarioStorage.agregar(this.admin, 'usuarios');
  }

  //Método para loguear:
  async ingresar(){
    var usuario_encontrado: any = await this.usuarioStorage.login(this.correo, this.clave_1, 'usuarios');
    if(usuario_encontrado != undefined){
      //ELEMENTO NUEVO PARA EL LOGIN:
      var navigationExtras: NavigationExtras = {
        state: {
          user: usuario_encontrado
        }
      };
      this.router.navigate(['/home'], navigationExtras);
    }else{
      alert("USUARIO O CLAVE NO EXISTE!");
    }
  }

}
