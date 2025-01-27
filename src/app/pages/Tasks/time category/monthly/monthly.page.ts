import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { task } from 'src/app/models/task.model';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.page.html',
  styleUrls: ['./monthly.page.scss'],
  standalone: false,
})
export class MonthlyPage implements OnInit {
  tasks: task[] = []; // Lista de tareas diarias desde Firebase
  newTask: string = ''; // Nueva tarea a añadir
  isModalOpen = false; // Estado del modal

  constructor(
    private router: Router,
    public taskService: TaskService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadTasks(); // Cargar tareas al inicializar
  }

  // Cargar tareas diarias desde Firebase
  loadTasks() {
    this.taskService.getTasksByType('Monthly').subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  // Abrir modal
  openModal() {
    this.isModalOpen = true;
  }

  // Cerrar modal
  closeModal() {
    this.isModalOpen = false;
  }

  // Agregar tarea diaria
  async addTask() {
    if (this.newTask.trim()) {
      const uid = await this.authService.getUserId(); // Obtener el ID del usuario
      const newTask: Partial<task> = {
        titulo: this.newTask.trim(),
        tipo: 'Monthly',
        category: 'Mensual', // Categoría de las tareas diarias
        isCompleted: false,
        userId: uid,
      };

      // Crear tarea en Firebase
      this.taskService.createTask(newTask).then(() => {
        this.newTask = ''; // Limpiar campo de nueva tarea
        this.loadTasks(); // Recargar tareas
      });
    }
  }

  // Eliminar tarea diaria
  deleteTask(taskId: string) {
    console.log('Delete task', { taskId });
    this.taskService.deleteTask(taskId).then(() => {
      this.loadTasks(); // Recargar tareas
    });
  }

  // Navegación
  goToHelp() {
    this.router.navigate(['/help']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
