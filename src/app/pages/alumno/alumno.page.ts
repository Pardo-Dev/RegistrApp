import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClasesService } from 'src/app/services/clases.service';
import { UsuarioStorageService } from 'src/app/services/usuario-storage.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {

  clases : any[] = [];
  KEY : string = "clases";
  codigoClase : string = "";
  usuario: any;
  rut_alumnos : any[] = []

  constructor(private clasesStorage : ClasesService,
              private usuarioStorage : UsuarioStorageService,
              private router : Router) { }

  async ngOnInit() {
    //vamos a recibir al usuario:
    this.usuario = this.router.getCurrentNavigation()?.extras.state;
    //sobrescribo el usuario con la propiedad .user del usuario que viaja con navigationExtras
    this.usuario = this.usuario.user;
  }
  async listar(){
    this.clases = await this.clasesStorage.listar(this.KEY)
  }

  async agregarAlumno(){
    var claseEncontrada = await this.clasesStorage.buscarCodigo(this.codigoClase, this.KEY)
    if(claseEncontrada.codigo_qr == this.codigoClase){
      this.rut_alumnos = claseEncontrada.rut_alumnos
      this.rut_alumnos.push(this.usuario.rut)
      this.clasesStorage.modificar(claseEncontrada, this.KEY)
      alert("Usuario Agregado: " + this.usuario.rut)
    }
  }
}
