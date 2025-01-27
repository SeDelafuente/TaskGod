import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { task } from 'src/app/models/task.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-responsability',
  templateUrl: './responsability.page.html',
  styleUrls: ['./responsability.page.scss'],
  standalone: false,
})
export class ResponsabilityPage implements OnInit {
  dailyTasks: task[] = [];
  monthlyTasks: task[] = [];
  newDailyTask: string = '';
  newMonthlyTask: string = '';
  isDailyModalOpen = false;
  isMonthlyModalOpen = false;

  constructor(
    private router: Router,
    public taskService: TaskService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadDailyTasks();
    this.loadMonthlyTasks();
  }

  // Cargar tareas diarias de tipo 'daily' y categoría 'Responsability'
  loadDailyTasks() {
    this.taskService
      .getTasksByCategoryAndType('Responsability', 'daily')
      .subscribe((tasks) => {
        this.dailyTasks = tasks;
      });
  }

  // Cargar tareas mensuales de tipo 'monthly' y categoría 'Responsability'
  loadMonthlyTasks() {
    this.taskService
      .getTasksByCategoryAndType('Responsability', 'monthly')
      .subscribe((tasks) => {
        this.monthlyTasks = tasks;
      });
  }

  // Modal tareas diarias
  openDailyModal() {
    this.isDailyModalOpen = true;
  }

  closeDailyModal() {
    this.isDailyModalOpen = false;
  }

  // Agregar tarea diaria
  async addDailyTask() {
    if (this.newDailyTask.trim()) {
      const uid = await this.authService.getUserId(); // Espera a obtener el ID del usuario
      const newTask: Partial<task> = {
        titulo: this.newDailyTask.trim(),
        tipo: 'daily',
        category: 'Responsability',
        isCompleted: false,
        userId: uid,
      };
      this.taskService.createTask(newTask).then(() => {
        this.newDailyTask = '';
        this.loadDailyTasks(); // Refrescar tareas
      });
    }
  }

  // Eliminar tarea diaria
  deleteDailyTask(taskId: string) {
    this.taskService.deleteTask(taskId).then(() => {
      this.loadDailyTasks(); // Refrescar tareas
    });
  }

  // Modal tareas mensuales
  openMonthlyModal() {
    this.isMonthlyModalOpen = true;
  }

  closeMonthlyModal() {
    this.isMonthlyModalOpen = false;
  }

  // Agregar tarea mensual
  async addMonthlyTask() {
    if (this.newMonthlyTask.trim()) {
      const uid = await this.authService.getUserId(); // Espera a obtener el ID del usuario
      const newTask: Partial<task> = {
        titulo: this.newMonthlyTask.trim(),
        tipo: 'monthly',
        category: 'Responsability',
        isCompleted: false,
        userId: uid,
      };
      this.taskService.createTask(newTask).then(() => {
        this.newMonthlyTask = '';
        this.loadMonthlyTasks(); // Refrescar tareas
      });
    }
  }

  // Eliminar tarea mensual
  deleteMonthlyTask(taskId: string) {
    this.taskService.deleteTask(taskId).then(() => {
      this.loadMonthlyTasks(); // Refrescar tareas
    });
  }

  // Navegación
  goToArticles() {
    this.router.navigate(['/articles']);
  }

  goToHelp() {
    this.router.navigate(['/help']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
