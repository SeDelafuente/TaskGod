import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service'; // Servicio de usuario
import { AuthService } from '../../../services/auth.service'; // Servicio para obtener el UID

@Component({
  selector: 'app-change-username',
  templateUrl: './change-username.page.html',
  styleUrls: ['./change-username.page.scss'],
  standalone: false,
})
export class ChangeUsernamePage implements OnInit {
  currentUsername: string = ''; // Nombre de usuario actual dinámico
  usernameForm: FormGroup;
  uid: string = ''; // ID del usuario autenticado

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
    private router: Router,
    private userService: UserService,
    private authService: AuthService
  ) {
    this.usernameForm = this.fb.group({
      newUsername: ['', [Validators.required, Validators.maxLength(30)]],
    });
  }

  ngOnInit() {
    // Obtener UID del usuario autenticado y cargar el nombre actual
    this.authService.getUserId().then((id) => {
      this.uid = id;
      this.userService.getUser(this.uid).subscribe((user) => {
        this.currentUsername = user?.username || 'Usuario desconocido';
      });
    });
  }

  async onSubmit() {
    if (this.usernameForm.valid) {
      const newUsername = this.usernameForm.value.newUsername;

      try {
        // Actualizar el nombre de usuario
        await this.userService.updateUsername(this.uid, newUsername);
        const alert = await this.alertController.create({
          header: 'Éxito',
          message: 'Tu nombre de usuario ha sido actualizado.',
          buttons: ['OK'],
        });
        await alert.present();
        this.router.navigate(['/profile']); // Redirigir al perfil
      } catch (error) {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Hubo un problema al actualizar tu nombre de usuario. Inténtalo de nuevo.',
          buttons: ['OK'],
        });
        await alert.present();
      }
    }
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToHelp() {
    this.router.navigate(['/help']);
  }
}
