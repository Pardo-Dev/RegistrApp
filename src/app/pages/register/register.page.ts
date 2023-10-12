import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UsuarioStorageService } from 'src/app/services/usuario-storage.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  usuario = new FormGroup(
    {
      rut : new FormControl('', [
                                Validators.required,
                                Validators.pattern('[0-9]{1,2}[0-9]{3}[0-9]{3}-[0-9kK]')
                              ]),

      nombre : new FormControl('', [
                                    Validators.required,
                                    Validators.minLength(3)
                                  ]),

      ap_paterno : new FormControl('', [
                                        Validators.required,
                                        Validators.minLength(3)
                                      ]),

      ap_materno : new FormControl('', [
                                        Validators.required,
                                        Validators.minLength(3)
                                      ]),

      fecha_nacimiento : new FormControl('', [Validators.required]),

      correo  : new FormControl('', [
                                    Validators.required,
                                    Validators.pattern('[a-zA-Z]+@+(duocuc.cl)')
                                  ]),
      
      tipo_usuario : new FormControl('alumno', [Validators.required]),

      clave_1 : new FormControl('', [
                                    Validators.required,
                                    Validators.minLength(6),
                                    Validators.maxLength(20),
                                    Validators.pattern('[0-9a-zA-Z._]{6,20}')
                                    ]),

      clave_2 : new FormControl('', [
                                    Validators.required,
                                    Validators.minLength(6),
                                    Validators.maxLength(20),
                                    Validators.pattern('[0-9a-zA-Z._]{6,20}')
      ])
    }
  )

  usuarios : any[] = [];
  KEY : string = 'usuarios';
  tipo_usuario : boolean = true;

  constructor(private toastController : ToastController,
              private usuarioStorage : UsuarioStorageService,
              private router : Router) { }

  ngOnInit() {
  }

  // Metodos de formulario
  async guardar(){
    var resp:boolean = await this.usuarioStorage.agregar(this.usuario.value, this.KEY);
    if(resp){
      this.alerta('bottom', 'USUARIO REGISTRADO!', 3000, 'success')
      this.router.navigate(['/login'])
    }else{
      this.alerta('bottom', 'USUARION NO REGISTRADO!', 3000, 'danger')
    }
  }

  // Metodo para la tostada
  async alerta(position: 'top' | 'middle' | 'bottom', 
                    message: string,
                    duration: number,
                    color: 'danger'|'success'|'warning') {
    const toast = await this.toastController.create({
      message,
      duration: duration,
      position: position,
      color: color
    });

    await toast.present();
  }
}
