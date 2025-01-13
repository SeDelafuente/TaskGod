import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-username',
  templateUrl: './change-username.page.html',
  styleUrls: ['./change-username.page.scss'],
  standalone: false,
})
export class ChangeUsernamePage implements OnInit {
  currentUsername: string = '$USERNAME'; // Cambiar por el valor dinámico
  usernameForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
    private router: Router
  ) {
    this.usernameForm = this.fb.group({
      newUsername: [
        '',
        [Validators.required, Validators.maxLength(30)],
      ],
    });
  }

  ngOnInit() {}

  async onSubmit() {
    if (this.usernameForm.valid) {
      const newUsername = this.usernameForm.value.newUsername;

      console.log('Nuevo nombre de usuario:', newUsername);

      const alert = await this.alertController.create({
        header: 'Éxito',
        message: 'Tu nombre de usuario ha sido actualizado.',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToHelp() {
    this.router.navigate(['/help']);
  }
}
