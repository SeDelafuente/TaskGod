import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-homepage-user',
  templateUrl: './homepage-user.page.html',
  styleUrls: ['./homepage-user.page.scss'],
  standalone: false,
})
export class HomepageUserPage implements OnInit {
  username: string = 'Usuario';
  profilePicture: string = '../../../assets/img/profile-placeholder.png'; // Imagen de perfil predeterminada

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  async ngOnInit() {
    try {
      // Obtener el UID del usuario actual
      const uid = await this.authService.getUserId();
      if (uid) {
        // Obtener datos del usuario desde Firestore
        this.userService.getUser(uid).subscribe((userData) => {
          if (userData) {
            this.username = userData.name || 'Usuario';
            this.profilePicture = userData.profilePhoto?.trim()
              ? userData.profilePhoto
              : '../../../assets/img/profile-placeholder.png';
          }
        });
      } else {
        // Redirigir al login si no hay un usuario autenticado
        this.router.navigate(['/login']);
      }
    } catch (error) {
      console.error('Error al cargar datos del usuario:', error);
      alert('Ocurrió un problema al cargar la información del usuario.');
      this.router.navigate(['/login']);
    }
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToDiary() {
    this.router.navigate(['/diary']);
  }

  goToMonthly() {
    this.router.navigate(['/monthly']);
  }

  goToResponsability() {
    this.router.navigate(['/responsability']);
  }

  goToExercise() {
    this.router.navigate(['/exercise']);
  }

  goToSelfcare() {
    this.router.navigate(['/selfcare']);
  }

  goToEconomic() {
    this.router.navigate(['/economic']);
  }

  goToHelp() {
    this.router.navigate(['/help']);
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
}
