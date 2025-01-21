import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';
  passwordType: string = 'password'; // Por defecto oculta la contraseña

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) { }

  ngOnInit() { }

  // Alterna entre mostrar y ocultar la contraseña
  togglePasswordType() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

  // Inicia sesión con Firebase
  async onSubmit() {
    if (!this.email || !this.password) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    try {
      // Llama al servicio de autenticación para iniciar sesión
      const cred = await this.authService.login(this.email, this.password);
      console.log('Inicio de sesión exitoso:', cred);

      // Obtén datos del usuario desde Firestore
      const userData = await this.userService.getUser(cred.user?.uid || '').toPromise();
      console.log('Datos del usuario:', userData);

      // Redirige a la página de inicio para usuarios
      this.router.navigate(['/homepage-user']);
    } catch (error : unknown) {
      console.error('Error durante el inicio de sesión:', error);

      if (error instanceof Error) {
        console.error('Error durante el inicio de sesión:', error.message);
        const firebaseError = error as any;
        if (firebaseError.code === 'auth/user-not-found') {
          alert('No existe un usuario con este correo.');
        } else if (firebaseError.code === 'auth/wrong-password') {
          alert('Contraseña incorrecta.');
        } else {
          alert('Ocurrió un error al iniciar sesión.');
        }
      } else {
        console.error('Error desconocido:', error);
        alert('Ocurrió un error inesperado.');
    }
  }}

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToForget() {
    this.router.navigate(['/forget-password']);
  }

  goToUserHome() {
    this.router.navigate(['/homepage-user']);
  }
}
