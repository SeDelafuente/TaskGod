import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { user } from '../../../models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false,
})
export class ProfilePage implements OnInit {
  profileForm: FormGroup;
  userData!: user;
  profilePicture: string | undefined;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private userService: UserService,
    private router: Router,
    private alertCtrl: AlertController
  ) {
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['**********'],
    });
  }

  ngOnInit() {
    this.loadUserProfile();
  }

  async loadUserProfile() {
    try {
      const uid = await this.authService.getUserId();
      if (uid) {
        this.userService.getUser(uid).subscribe((user) => {
          if (user) {
            this.userData = user;
            this.profilePicture = user.profilePicture?.trim()
              ? user.profilePicture
              : '../../../assets/img/profile-placeholder.png';
            this.profileForm.patchValue({
              name: user.name,
              email: user.email,
              username: user.username
            });
          }
        });
      } else {
        this.router.navigate(['/login']);
      }
    } catch (error) {
      console.error('Error al cargar datos del perfil:', error);
    }
  }

  async updateProfile() {
    if (this.profileForm.valid) {
      try {
        const uid = await this.authService.getUserId();
        const updatedData: user = {
          ...this.userData,
          name: this.profileForm.value.name,
          email: this.profileForm.value.email,
        };

        await this.userService.updateUser(uid, updatedData);
        alert('Perfil actualizado correctamente');
      } catch (error) {
        console.error('Error al actualizar el perfil:', error);
        alert('Error al actualizar el perfil.');
      }
    } else {
      alert('Por favor, completa todos los campos requeridos.');
    }
  }

  async changeProfilePicture() {
    const alert = await this.alertCtrl.create({
      header: 'Cambiar foto de perfil',
      message: 'Selecciona la fuente de la nueva imagen:',
      buttons: [
        {
          text: 'Cámara',
          handler: () => this.selectImage(CameraSource.Camera),
        },
        {
          text: 'Galería',
          handler: () => this.selectImage(CameraSource.Photos),
        },
      ],
    });
    await alert.present();
  }

  async selectImage(source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        resultType: CameraResultType.Base64,
        source: source,
      });

      if (image?.base64String) {
        const base64Image = `data:image/jpeg;base64,${image.base64String}`;
        const uid = await this.authService.getUserId();
        await this.userService.updateProfilePicture(uid, base64Image);
        this.profilePicture = base64Image;
        alert('Foto de perfil actualizada correctamente.');
      }
    } catch (error) {
      console.error('Error al actualizar la foto de perfil:', error);
    }
  }

  goToChangeUsername(){
    this.router.navigate(['/change-username']);
  }

  goToChangePassword() {
    this.router.navigate(['/change-password']);
  }

  goToHelp() {
    this.router.navigate(['/help']);
  }

  async logout() {
    try {
      await this.authService.logout();
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  }
}
