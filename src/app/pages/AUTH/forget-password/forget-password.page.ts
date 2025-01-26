import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
  standalone: false,
})
export class ForgetPasswordPage implements OnInit {
  forgetPasswordForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private alertController: AlertController
  ) {
    this.forgetPasswordForm = this.fb.group({
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(30)],
      ],
    });
  }

  ngOnInit() {}

  async onSubmit() {
    if (this.forgetPasswordForm.valid && this.forgetPasswordForm.get('email')?.valid) {
      const email : string = this.forgetPasswordForm.value.email?.trim();
      if (!email) {
        return;
      }

      try {
        // Llama al servicio para enviar el correo de recuperación
        await this.authService.recoverPassword(email);

        // Muestra una alerta de éxito
        const alert = await this.alertController.create({
          header: 'Éxito',
          message: `Se ha enviado un correo para recuperar la contraseña a ${email}.`,
          buttons: ['OK'],
        });
        await alert.present();

        this.router.navigate(['/login']);
      } catch (error: any) {
        console.error('Error al enviar el correo:', error);

        // Muestra una alerta en caso de error
        const errorMessage =
          error.code === 'auth/user-not-found'
            ? 'El correo no está registrado en el sistema.'
            : error.code === 'auth/invalid-email'
            ? 'El correo ingresado no es válido.'
            : error.code === 'auth/network-request-failed'
            ? 'No se pudo conectar al servidor. Verifica tu conexión a internet.'
            : 'Ocurrió un error al enviar el correo. Por favor, inténtalo de nuevo.';
        const alert = await this.alertController.create({
          header: 'Error',
          message: errorMessage,
          buttons: ['OK'],
        });
        await alert.present();
      }
    }
  }

}
