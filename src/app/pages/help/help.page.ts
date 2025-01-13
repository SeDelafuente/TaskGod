import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
  standalone: false,
})
export class HelpPage implements OnInit {
  helpForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.helpForm = this.fb.group({
      problemSummary: [
        '',
        [Validators.required, Validators.maxLength(30)],
      ],
      problemDetails: ['', Validators.required],
      incidentDate: ['', Validators.required],
      affectedPages: [''],
    });
  }

  ngOnInit(): void {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  submitForm() {
    if (this.helpForm.valid) {
      console.log('Formulario enviado:', this.helpForm.value);
      alert('Formulario enviado correctamente');
      this.helpForm.reset(); // Reinicia el formulario
    } else {
      alert('Por favor, completa todos los campos requeridos.');
    }
  }
}
