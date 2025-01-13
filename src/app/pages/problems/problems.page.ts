import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.page.html',
  styleUrls: ['./problems.page.scss'],
  standalone: false
})
export class ProblemsPage {
  problems = [
    { userId: 'User123', title: 'Problema ingreso datos' },
    { userId: 'User456', title: 'Error en visualización' },
    { userId: 'User789', title: 'No puedo acceder' },
    { userId: 'User321', title: 'Problema carga archivos' },
    { userId: 'User654', title: 'Solicitud de ayuda' },
  ];

  constructor(private router: Router) {}

  viewProblem(problem: any) {
    alert(`Detalles del problema:\nUsuario: ${problem.userId}\nTítulo: ${problem.title}`);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
