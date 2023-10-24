import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private router : Router,
              private alertController: AlertController) { }

  usuario : any;

  ngOnInit() {
    this.usuario = this.router.getCurrentNavigation()?.extras.state;
    this.usuario = this.usuario.user;
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Seguro que quieres salir?',
      buttons: [
        {
          text: 'No',
          cssClass: 'alert-button-cancel',
          role: 'cancel',
        },
        {
          text: 'Si',
          cssClass: 'alert-button-confirm',
          handler: () => {
            this.router.navigate(['/login']);
          },
        },
      ],
    });

    await alert.present();
  }
}
