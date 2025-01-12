import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router'

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
  standalone: false
})

export class ChangePasswordPage implements OnInit {
  currentPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  // Controladores de tipo de campo (password/eye)
  currentPasswordType: string = 'password';
  newPasswordType: string = 'password';
  confirmPasswordType: string = 'password';

  constructor(private alertController: AlertController, private router: Router) {}

  ngOnInit() {}

  // Alternar visibilidad de contraseña actual
  toggleCurrentPasswordType() {
    this.currentPasswordType = this.currentPasswordType === 'password' ? 'text' : 'password';
  }

  // Alternar visibilidad de nueva contraseña
  toggleNewPasswordType() {
    this.newPasswordType = this.newPasswordType === 'password' ? 'text' : 'password';
  }

  // Alternar visibilidad de confirmar contraseña
  toggleConfirmPasswordType() {
    this.confirmPasswordType = this.confirmPasswordType === 'password' ? 'text' : 'password';
  }

  // Validar y enviar formulario
  async onSubmit() {
    if (this.newPassword !== this.confirmPassword) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinciden.',
        buttons: ['OK'],
      });
      await alert.present();
      return;
    }

    // Aquí iría la lógica para cambiar la contraseña con un servicio
    console.log('Contraseña cambiada:', this.newPassword);

    const alert = await this.alertController.create({
      header: 'Éxito',
      message: 'Tu contraseña ha sido cambiada correctamente.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  goToHelp() {
    this.router.navigate(['/help']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
