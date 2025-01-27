import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { task } from 'src/app/models/task.model';
<<<<<<< HEAD
=======
import { AuthService } from 'src/app/services/auth.service';
>>>>>>> 6a907e9 (Responsability / Diary / Monthly - TaskService implementation)

@Component({
  selector: 'app-responsibility',
  templateUrl: './responsability.page.html',
  styleUrls: ['./responsability.page.scss'],
  standalone: false,
})
<<<<<<< HEAD
export class ResponsibilityPage implements OnInit {
=======
export class ResponsabilityPage implements OnInit {
>>>>>>> 6a907e9 (Responsability / Diary / Monthly - TaskService implementation)
  dailyTasks: task[] = [];
  monthlyTasks: task[] = [];
  newDailyTask: string = '';
  newMonthlyTask: string = '';
  isDailyModalOpen = false;
  isMonthlyModalOpen = false;

<<<<<<< HEAD
  constructor(private router: Router, private taskService: TaskService) {}
=======
  constructor(
    private router: Router,
    public taskService: TaskService,
    private authService: AuthService
  ) {}
>>>>>>> 6a907e9 (Responsability / Diary / Monthly - TaskService implementation)

  ngOnInit(): void {
    this.loadDailyTasks();
    this.loadMonthlyTasks();
  }

  // Cargar tareas diarias de tipo 'daily' y categoría 'Responsability'
  loadDailyTasks() {
    this.taskService
<<<<<<< HEAD
      .getTasksByCategoryAndType('Responsability', 'daily')
=======
      .getTasksByCategoryAndType('Responsabilidades', 'daily')
>>>>>>> 6a907e9 (Responsability / Diary / Monthly - TaskService implementation)
      .subscribe((tasks) => {
        this.dailyTasks = tasks;
      });
  }

  // Cargar tareas mensuales de tipo 'monthly' y categoría 'Responsability'
  loadMonthlyTasks() {
    this.taskService
<<<<<<< HEAD
      .getTasksByCategoryAndType('Responsability', 'monthly')
=======
      .getTasksByCategoryAndType('Responsabilidades', 'monthly')
>>>>>>> 6a907e9 (Responsability / Diary / Monthly - TaskService implementation)
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
<<<<<<< HEAD
  addDailyTask() {
    if (this.newDailyTask.trim()) {
      const newTask: task = {
        titulo: this.newDailyTask.trim(),
        tipo: 'daily',
        category: 'Responsability',
        isCompleted: false,
        userId: '', // Se añade automáticamente en TaskService
=======
  async addDailyTask() {
    if (this.newDailyTask.trim()) {
      const userId = await this.authService.getUserId();
      const newTask: Partial<task> = {
        titulo: this.newDailyTask.trim(),
        tipo: 'daily',
        category: 'Responsabilidades',
        isCompleted: false,
        userId,
>>>>>>> 6a907e9 (Responsability / Diary / Monthly - TaskService implementation)
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
<<<<<<< HEAD
  addMonthlyTask() {
    if (this.newMonthlyTask.trim()) {
      const newTask: task = {
        titulo: this.newMonthlyTask.trim(),
        tipo: 'monthly',
        category: 'Responsability',
        isCompleted: false,
        userId: '', // Se añade automáticamente en TaskService
=======
  async addMonthlyTask() {
    if (this.newMonthlyTask.trim()) {
      const userId = await this.authService.getUserId();
      const newTask: Partial<task> = {
        titulo: this.newMonthlyTask.trim(),
        tipo: 'monthly',
        category: 'Responsabilidades',
        isCompleted: false,
        userId,
>>>>>>> 6a907e9 (Responsability / Diary / Monthly - TaskService implementation)
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
