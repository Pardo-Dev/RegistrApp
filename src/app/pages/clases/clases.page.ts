import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClasesService } from 'src/app/services/clases.service';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.page.html',
  styleUrls: ['./clases.page.scss'],
})
export class ClasesPage implements OnInit {

  clase = new FormGroup(
    {
      codigo_clase : new FormControl('',Validators.required),
      fecha_clase : new FormControl('', Validators.required),
      codigo_asignatura : new FormControl('', Validators.required),
      rut_alumnos : new FormControl('', Validators.required)
    }
  )

  clase1: any = {
    codigo_clase : "1",
    dia : "Lunes",
    hora_inicio : "08:30",
    hora_termino : "10:00",
    codigo_asignatura : "MDY-3131",
    rut_alumnos : ["12123123-4"], 
    codigo_qr : ""
  }

  clase2: any = {
    codigo_clase : "2",
    dia : "Lunes",
    hora_inicio : "10:11",
    hora_termino : "11:30",
    codigo_asignatura : "PGY3121",
    rut_alumnos : ["12123123-4"], 
    codigo_qr : ""
  }

  clase3: any = {
    codigo_clase : "3",
    dia : "Lunes",
    hora_inicio : "11:41",
    hora_termino : "13:10",
    codigo_asignatura : "EMP1101",
    rut_alumnos : ["12123123-4"], 
    codigo_qr : ""
  }

  clase4: any = {
    codigo_clase : "4",
    dia : "Lunes",
    hora_inicio : "14:00",
    hora_termino : "16:10",
    codigo_asignatura : "INI3111",
    rut_alumnos : ["12123123-4"], 
    codigo_qr : ""
  }

  clase5: any = {
    codigo_clase : "5",
    dia : "Lunes",
    hora_inicio : "16:20",
    hora_termino : "18:20",
    codigo_asignatura : "PRY3111",
    rut_alumnos : ["12123123-4"], 
    codigo_qr : ""
  }

  KEY : string = "clases"

  clases : any[] = [];

  constructor(private clasesStorage : ClasesService,
              private router : Router) { }

  async ngOnInit() {
    await this.clasesStorage.agregar(this.clase1, this.KEY);
    await this.clasesStorage.agregar(this.clase2, this.KEY);
    await this.clasesStorage.agregar(this.clase3, this.KEY);
    await this.clasesStorage.agregar(this.clase4, this.KEY);
    await this.clasesStorage.agregar(this.clase5, this.KEY);
    await this.listar()
  }

  async listar(){
    this.clases = await this.clasesStorage.listar(this.KEY)
  }

  async generarCodigo(codigo_clase : string){
    var claseEncontrada = await this.clasesStorage.buscar(codigo_clase, this.KEY)
    claseEncontrada.codigo_qr = this.generarCodigoUnico(8);
    this.router.navigate(['/home/qr-code',claseEncontrada.codigo_clase]);
  }

  async buscar(buscarClase: string){
    var claseEncontrada: any = await this.clasesStorage.buscar(buscarClase, this.KEY);
    this.clase.setValue(claseEncontrada);
  }

  generarCodigoUnico(longitud: number): string {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';
  
    for (let i = 0; i < longitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      codigo += caracteres.charAt(indiceAleatorio);
    }
  
    return codigo;
  }

}
