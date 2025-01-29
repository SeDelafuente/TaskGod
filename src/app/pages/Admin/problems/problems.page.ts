import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SupportService } from 'src/app/services/support.service';
import { HelpForm } from 'src/app/models/helpForm.model';

@Component({
  selector: 'app-problems',
  templateUrl: './problems.page.html',
  styleUrls: ['./problems.page.scss'],
  standalone: false,
})
export class ProblemsPage implements OnInit {
  problems: HelpForm[] = []; // Lista para almacenar los problemas cargados

  constructor(private router: Router, private supportService: SupportService) {}

  ngOnInit() {
    this.loadProblems(); // Cargar problemas al inicializar
  }

  // Método para cargar problemas desde Firestore
  loadProblems() {
    this.supportService.getAllProblems().subscribe((data) => {
      this.problems = data;
    });
  }

  // Método para ver los detalles de un problema
  viewProblem(problem: HelpForm) {
    alert(
      `Detalles del problema:\nUsuario: ${problem.userid}\nResumen: ${problem.problemSummary}\nDetalles: ${problem.problemDetails}`
    );
  }

  // Método para navegar al login
  goToLogin() {
    this.router.navigate(['/login']);
  }
}
