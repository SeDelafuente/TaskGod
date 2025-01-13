import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
  standalone: false
})
export class HelpPage {
  form = {
    problemSummary: '',
    problemDetails: '',
    incidentDate: '',
    affectedPages: '',
  };

  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  submitForm() {
    if (this.isFormValid()) {
      console.log('Formulario enviado:', this.form);
      alert('Formulario enviado correctamente');
      this.resetForm();
    } else {
      alert('Por favor, completa todos los campos requeridos.');
    }
  }

  isFormValid() {
    return (
      this.form.problemSummary.trim() !== '' &&
      this.form.problemDetails.trim() !== ''
    );
  }

  resetForm() {
    this.form = {
      problemSummary: '',
      problemDetails: '',
      incidentDate: '',
      affectedPages: '',
    };
  }
}
