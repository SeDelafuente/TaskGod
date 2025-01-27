import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { task } from 'src/app/models/task.model';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.page.html',
  styleUrls: ['./monthly.page.scss'],
  standalone: false,
})
export class MonthlyPage implements OnInit {
  tasks: task[] = [];
  currentMonth: string = new Date().toLocaleString('es-ES', { month: 'long' });

  constructor(private router: Router, private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  // Cargar tareas de tipo "monthly"
  loadTasks() {
    this.taskService.getTasksByType('monthly').subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  goToHelp() {
    this.router.navigate(['/help']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
