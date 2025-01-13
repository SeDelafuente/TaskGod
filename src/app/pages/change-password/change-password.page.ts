import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

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

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
    private router: Router
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

  ngOnInit() {}

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
      console.log('Contraseña cambiada:', this.passwordForm.value.newPassword);
      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Tu contraseña ha sido cambiada correctamente.',
        buttons: ['OK'],
      });
      await alert.present();
      this.passwordForm.reset();
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
