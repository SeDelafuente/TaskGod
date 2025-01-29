import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupportService } from 'src/app/services/support.service';
import { HelpForm } from 'src/app/models/helpForm.model';

@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
  standalone: false,
})
export class HelpPage implements OnInit {
  helpForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private supportService: SupportService
  ) {
    this.helpForm = this.fb.group({
      problemSummary: ['', [Validators.required, Validators.maxLength(30)]],
      problemDetails: ['', Validators.required],
      incidentDate: ['', Validators.required],
      affectedPages: [''],
    });
  }

  ngOnInit(): void {}

  goToLogin() {
    this.router.navigate(['/login']);
  }

  async submitForm() {
    if (this.helpForm.valid) {
      const formData: HelpForm = {
        ...this.helpForm.value,
        status: 'pending',
        createdAt: new Date(),
      };

      try {
        await this.supportService.submitForm(formData);
        console.log('Formulario enviado con éxito.');
        this.helpForm.reset();
      } catch (error) {
        console.error('Error al enviar formulario:', error);
      }
    }
  }
}
