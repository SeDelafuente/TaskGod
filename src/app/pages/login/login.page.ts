import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

  ngOnInit() { }

  // Alterna entre mostrar y ocultar la contraseña
  togglePasswordType() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

  // Simula un inicio de sesión usando localStorage
  onSubmit() {
    // const registeredUsers = JSON.parse(localStorage.getItem('users') || '[]');

    // const userFound = registeredUsers.find((user: any) => user.email === this.email && user.password === this.password);

    // if (userFound) {
    //   console.log('Inicio de sesión exitoso');
    //   alert('Inicio de sesión exitoso');
    //   this.router.navigate(['/home']); // Redirecciona a la página de inicio
    // } else {
    //   console.log('Credenciales incorrectas');
    //   alert('Correo o contraseña incorrectos');
    // }
  }

  goToRegister() {
    this.router.navigate(['/register']);
}

  goToForget(){
    this.router.navigate(['/forget-password'])
  }

  goToUserHome() {
    this.router.navigate(['/homepage-user']);
}
}
