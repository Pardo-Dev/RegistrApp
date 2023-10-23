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
    nombre: 'Carlos',
    ap_paterno : 'Pardo',
    ap_materno : 'Belmar',
    correo: 'administrador@duoc.cl',
    fecha_nacimiento: '2003-12-03',
    tipo_usuario: 'administrador',
    clave_1: 'Administrador123',
    clave_2: 'Administrador123'
  }

  docente: any = {
    rut: '13396463-0',
    nombre: 'Matias',
    ap_paterno : 'Rubilar',
    ap_materno : 'Pinto',
    correo: 'docente@duoc.profesor.cl',
    fecha_nacimiento: '2001-05-22',
    tipo_usuario: 'docente',
    clave_1: 'Docente123',
    clave_2: 'Docente123'
  }

  alumno: any = {
    rut: '15538503-0',
    nombre: 'Lucas',
    ap_paterno : 'Antil',
    ap_materno : 'Gaete',
    correo: 'alumno@duocuc.cl',
    fecha_nacimiento: '2003-11-04',
    tipo_usuario: 'docente',
    clave_1: 'CharizardX',
    clave_2: 'CharizardX'
  }
  

  constructor(private usuarioStorage : UsuarioStorageService,
              private router : Router) { }


  fecha:Date = new Date();

  async ngOnInit() {
    await this.usuarioStorage.agregar(this.admin, 'usuarios');
    await this.usuarioStorage.agregar(this.docente, 'usuarios');
    await this.usuarioStorage.agregar(this.alumno, 'usuarios');
    //alert(this.fecha.toLocaleDateString())
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
      if(usuario_encontrado.tipo_usuario == "administrador"){
        this.router.navigate(['/home/perfil'], navigationExtras);
      } else if(usuario_encontrado.tipo_usuario == "docente"){
        this.router.navigate(['/home/perfil'], navigationExtras);
      } else if(usuario_encontrado.tipo_usuario == "alumno"){
        this.router.navigate(['/home/perfil'], navigationExtras);
      }

    }else{
      alert("USUARIO O CLAVE NO EXISTE!");
    }
  }

}
