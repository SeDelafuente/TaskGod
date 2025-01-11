import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage implements OnInit {

  email: string = '';
  password: string = '';
  passwordType: string = 'password'; // Por defecto oculta la contraseña
  confirmPassword: string = '';
  passwordConfirmType: string = 'password'; // Por defecto oculta la contraseña de confirmación
  name: string = '';
  userName: string = '';

  constructor() { }

  ngOnInit() {
  }

}
