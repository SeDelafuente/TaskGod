import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage implements OnInit {
  // Variables para el perfil del usuario
  username: string = '$USERNAME';
  email: string = 'usuario@example.com';
  password: string = '**********';

  constructor(private router: Router) {}

  ngOnInit() {
    this.loadUserProfile();
  }

  // Cargar los datos del perfil del usuario
  loadUserProfile() {
    this.username = 'Username';
    this.email = 'username@example.com';
    this.password = '**********';
  }

  // Navegar a la página de cambio de contraseña
  goToChangePassword() {
    this.router.navigate(['/change-password']);
  }

  // Navegar a la página de cambio de nombre de usuario
  goToChangeUsername() {
    this.router.navigate(['/change-username']);
  }

  // Navegar a la página de ayuda
  goToHelp(){
    this.router.navigate(['/help']);
  }

  // Cerrar sesión y navegar a la página de inicio
  goToLogin(){
    this.router.navigate(['/login']);
  }
}
