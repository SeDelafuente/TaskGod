import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { user } from 'src/app/models/user.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  standalone: false,
})
export class UsersPage implements OnInit {
  users: user[] = [];

  constructor(
    private router: Router,
    private userService: UserService,
    private alertController: AlertController
  ) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  // Cargar lista de usuarios desde Firestore
  loadUsers() {
    this.userService.getAllUsers().subscribe((data) => {
      this.users = data;
    });
  }

  // Eliminar usuario
  async deleteUser(user: user) {
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: `¿Estás seguro de que deseas eliminar a ${user.name}?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
        },
        {
          text: 'Eliminar',
          handler: async () => {
            try {
              await this.userService.deleteUser(user.uid);
              this.presentAlert('Éxito', `Usuario ${user.name} eliminado.`);
              this.loadUsers(); // Refrescar lista de usuarios
            } catch (error) {
              this.presentAlert('Error', 'No se pudo eliminar al usuario.');
            }
          },
        },
      ],
    });
    await alert.present();
  }

  // Mostrar un ion-alert con mensajes personalizados
  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['Aceptar'],
    });
    await alert.present();
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
