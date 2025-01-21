import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {
  registerForm!: FormGroup;
  passwordType: string = 'password'; // Por defecto oculta la contraseña

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z ]+$'),
          Validators.maxLength(30),
        ],
      ],
      username: ['', [Validators.required, Validators.maxLength(30)]],
      email: [
        '',
        [Validators.required, Validators.email, Validators.maxLength(30)],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$'),
        ],
      ],
    });
  }

  togglePasswordType() {
    this.passwordType =
      this.passwordType === 'password' ? 'text' : 'password';
  }

  async onSubmit() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;

      try {
        await this.authService.register(userData);
        await this.showAlert('Éxito', 'Tu cuenta ha sido creada con éxito.');
        this.router.navigate(['/login']); // Redirigir al login
      } catch (error) {
        console.error('Error al registrar usuario:', error);
        await this.showAlert('Error', 'No se pudo crear tu cuenta. Intenta nuevamente.');
      }
    }
  }

  private async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
