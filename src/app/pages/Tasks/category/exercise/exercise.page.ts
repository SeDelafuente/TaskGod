import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { task } from 'src/app/models/task.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.page.html',
  styleUrls: ['./exercise.page.scss'],
  standalone: false,
})
export class ExercisePage implements OnInit {
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

  // Cargar tareas diarias de tipo 'daily' y categoría 'Actividad fisica'
  loadDailyTasks() {
    this.taskService
      .getTasksByCategoryAndType('Actividad fisica', 'daily')
      .subscribe((tasks) => {
        this.dailyTasks = tasks;
      });
  }

  // Cargar tareas mensuales de tipo 'monthly' y categoría 'Actividad fisica'
  loadMonthlyTasks() {
    this.taskService
      .getTasksByCategoryAndType('Actividad fisica', 'Monthly')
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
      const uid = await this.authService.getUserId();
      const newTask: Partial<task> = {
        titulo: this.newDailyTask.trim(),
        tipo: 'daily',
        category: 'Actividad fisica',
        isCompleted: false,
        userId: uid,
      };
      this.taskService.createTask(newTask).then(() => {
        this.newDailyTask = '';
        this.loadDailyTasks(); // Refrescar lista de tareas
      });
    }
  }

  // Eliminar tarea diaria
  deleteDailyTask(taskId: string) {
    this.taskService.deleteTask(taskId).then(() => {
      this.loadDailyTasks();
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
      const uid = await this.authService.getUserId();
      const newTask: Partial<task> = {
        titulo: this.newMonthlyTask.trim(),
        tipo: 'Monthly',
        category: 'Actividad fisica',
        isCompleted: false,
        userId: uid,
      };
      this.taskService.createTask(newTask).then(() => {
        this.newMonthlyTask = '';
        this.loadMonthlyTasks(); // Refrescar lista de tareas
      });
    }
  }

  // Eliminar tarea mensual
  deleteMonthlyTask(taskId: string) {
    this.taskService.deleteTask(taskId).then(() => {
      this.loadMonthlyTasks();
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
