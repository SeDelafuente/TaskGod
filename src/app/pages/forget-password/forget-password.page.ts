import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
  standalone: false,
})
export class ForgetPasswordPage implements OnInit {
  forgetPasswordForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.forgetPasswordForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.maxLength(30),
        ],
      ],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.forgetPasswordForm.valid) {
      // Aquí procesamos el envío
      console.log('Formulario enviado con éxito:', this.forgetPasswordForm.value);
      this.router.navigate(['/validate-code']);
    }
  }
}
