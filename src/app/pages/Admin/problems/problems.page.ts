import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupportService } from 'src/app/services/support.service';
import { HelpForm } from 'src/app/models/helpForm.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.page.html',
  styleUrls: ['./problems.page.scss'],
  standalone: false,
})
export class ProblemsPage implements OnInit {
  problems: HelpForm[] = []; // Lista para almacenar los problemas cargados

  constructor(
    private router: Router,
    private supportService: SupportService,
    private alertController: AlertController // Inyectamos el AlertController
  ) {}

  ngOnInit() {
    this.loadProblems(); // Cargar problemas al inicializar
  }

  // Método para cargar problemas desde Firestore
  loadProblems() {
    this.supportService.getAllProblems().subscribe((data) => {
      this.problems = data;
    });
  }

  // Método para ver los detalles de un problema usando ion-alert
  async viewProblem(problem: HelpForm) {
    const alert = await this.alertController.create({
      header: 'Detalles del problema',
      message: `
        Usuario: ${problem.userid}
        Resumen: ${problem.problemSummary}
        Detalles: ${problem.problemDetails}
        Fecha: ${problem.incidentDate}
        Estado: ${problem.status}
      `,
      buttons: ['Cerrar'],
      cssClass: 'custom-alert', // Agregar una clase CSS personalizada
    });

    await alert.present();
  }

  // Método para navegar al login
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
