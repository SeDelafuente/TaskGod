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
<<<<<<< HEAD
      .getTasksByCategoryAndType('Responsability', 'daily')
=======
      .getTasksByCategoryAndType('Responsabilidades', 'daily')
>>>>>>> 6a907e9 (Responsability / Diary / Monthly - TaskService implementation)
=======
      .getTasksByCategoryAndType('Responsability', 'daily')
>>>>>>> 083a4ab (Solucion error Responsability)
      .subscribe((tasks) => {
        this.dailyTasks = tasks;
      });
  }

  // Cargar tareas mensuales de tipo 'monthly' y categoría 'Responsability'
  loadMonthlyTasks() {
    this.taskService
<<<<<<< HEAD
<<<<<<< HEAD
      .getTasksByCategoryAndType('Responsability', 'monthly')
=======
      .getTasksByCategoryAndType('Responsabilidades', 'monthly')
>>>>>>> 6a907e9 (Responsability / Diary / Monthly - TaskService implementation)
=======
      .getTasksByCategoryAndType('Responsability', 'monthly')
>>>>>>> 083a4ab (Solucion error Responsability)
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
      const uid = await this.authService.getUserId(); // Espera a obtener el ID del usuario
      const newTask: task = {
        id: '', // El ID será generado automáticamente en el backend
        titulo: this.newDailyTask.trim(),
        tipo: 'daily',
        category: 'Responsability',
        isCompleted: false,
<<<<<<< HEAD
        userId,
>>>>>>> 6a907e9 (Responsability / Diary / Monthly - TaskService implementation)
=======
        userId: uid,
>>>>>>> 083a4ab (Solucion error Responsability)
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
      const uid = await this.authService.getUserId(); // Espera a obtener el ID del usuario
      const newTask: task = {
        id: '', // El ID será generado automáticamente en el backend
        titulo: this.newMonthlyTask.trim(),
        tipo: 'monthly',
        category: 'Responsability',
        isCompleted: false,
<<<<<<< HEAD
        userId,
>>>>>>> 6a907e9 (Responsability / Diary / Monthly - TaskService implementation)
=======
        userId: uid,
>>>>>>> 083a4ab (Solucion error Responsability)
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
