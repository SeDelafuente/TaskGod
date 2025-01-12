import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'
@Component({
  selector: 'app-change-username',
  templateUrl: './change-username.page.html',
  styleUrls: ['./change-username.page.scss'],
  standalone: false
})
export class ChangeUsernamePage implements OnInit {

  currentUsername: string = '$USERNAME'; // Se puede reemplazar con el valor dinámico actual
  newUsername: string = '';

  constructor(private alertController: AlertController, private router: Router) {}

  ngOnInit() {}

  // Enviar el formulario
  async onSubmit() {
    if (!this.newUsername) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor ingresa un nuevo nombre de usuario.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    // Lógica para actualizar el nombre de usuario en el backend
    console.log('Nuevo nombre de usuario:', this.newUsername);

    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Tu nombre de usuario ha sido actualizado.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
  goToHelp() {
    this.router.navigate(['/help']);
  }
}
