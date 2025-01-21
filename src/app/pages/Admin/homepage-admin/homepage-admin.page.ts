import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-homepage-admin',
  templateUrl: './homepage-admin.page.html',
  styleUrls: ['./homepage-admin.page.scss'],
  standalone: false,
})
export class HomepageAdminPage implements OnInit {
  username: string = 'ADMINISTRADOR';
  profilePicture: string = '../../../assets/img/profile-placeholder.png'; // Imagen de perfil predeterminada

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  async ngOnInit() {
    try {
      // Obtener el UID del administrador
      const uid = await this.authService.getUserId();
      if (uid) {
        // Obtener datos del administrador desde Firestore
        this.userService.getUser(uid).subscribe((userData) => {
          if (userData) {
            this.username = userData.name || 'ADMINISTRADOR';
            this.profilePicture = userData.profilePicture?.trim()
              ? userData.profilePicture
              : '../../../assets/img/profile-placeholder.png';
          }
        });
      } else {
        // Redirigir al login si no hay usuario autenticado
        this.router.navigate(['/login']);
      }
    } catch (error) {
      console.error('Error al cargar datos del administrador:', error);
      alert('Ocurrió un problema al cargar la información del administrador.');
      this.router.navigate(['/login']);
    }
  }

  goToUsers() {
    this.router.navigate(['/users']);
  }

  goToProblems() {
    this.router.navigate(['/problems']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  async goToLogin() {
    try {
      await this.authService.logout();
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
      alert('No se pudo cerrar sesión. Por favor, inténtalo de nuevo.');
    }
  }

  goToHelp() {
    this.router.navigate(['/help']);
  }
}
