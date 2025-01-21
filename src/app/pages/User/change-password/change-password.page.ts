import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
  standalone: false,
})
export class ChangePasswordPage implements OnInit {
  passwordForm: FormGroup;
  currentPasswordType: string = 'password';
  newPasswordType: string = 'password';
  confirmPasswordType: string = 'password';
  uid: string = ''; // ID del usuario autenticado

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
    private router: Router,
    private userService: UserService,
    private authService: AuthService // Servicio para obtener el UID
  ) {
    this.passwordForm = this.fb.group(
      {
        currentPassword: ['', Validators.required],
        newPassword: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$'),
          ],
        ],
        confirmPassword: ['', Validators.required],
      },
      {
        validators: this.passwordsMatchValidator,
      }
    );
  }

  ngOnInit() {
    // Obtener UID del usuario autenticado
    this.authService.getUserId().then((id) => {
      this.uid = id;
    });
  }

  toggleCurrentPasswordType() {
    this.currentPasswordType =
      this.currentPasswordType === 'password' ? 'text' : 'password';
  }

  toggleNewPasswordType() {
    this.newPasswordType =
      this.newPasswordType === 'password' ? 'text' : 'password';
  }

  toggleConfirmPasswordType() {
    this.confirmPasswordType =
      this.confirmPasswordType === 'password' ? 'text' : 'password';
  }

  async onSubmit() {
    if (this.passwordForm.valid) {
      const currentPassword = this.passwordForm.value.currentPassword.trim();
      const newPassword = this.passwordForm.value.newPassword.trim();

      // Verificar contraseña actual
      this.userService.getUser(this.uid).subscribe(async (user) => {
        const storedPassword = user?.password?.trim();
        if (storedPassword === currentPassword) {
          // Contraseña correcta, actualizar la contraseña
          try {
            await this.userService.updatePassword(this.uid, newPassword);
            const alert = await this.alertController.create({
              header: 'Éxito',
              message: 'Tu contraseña ha sido cambiada correctamente.',
              buttons: ['OK'],
            });
            await alert.present();
            this.passwordForm.reset();
            this.router.navigate(['/profile']); // Redirigir al perfil
          } catch (error) {
            const alert = await this.alertController.create({
              header: 'Error',
              message: 'Hubo un problema al cambiar tu contraseña. Inténtalo de nuevo.',
              buttons: ['OK'],
            });
            await alert.present();
          }
        } else {
          // Contraseña actual incorrecta
          const alert = await this.alertController.create({
            header: 'Error',
            message: 'La contraseña actual no es correcta.',
            buttons: ['OK'],
          });
          await alert.present();
        }
      });
    }
  }

  passwordsMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const newPassword = group.get('newPassword')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return newPassword === confirmPassword ? null : { passwordsMismatch: true };
  }

  goToHelp() {
    this.router.navigate(['/help']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
