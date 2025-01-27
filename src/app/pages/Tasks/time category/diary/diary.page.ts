import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { task } from 'src/app/models/task.model';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.page.html',
  styleUrls: ['./diary.page.scss'],
  standalone: false,
})
export class DiaryPage implements OnInit {
  tasks: task[] = [];

  constructor(private router: Router, private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks();
  }

<<<<<<< HEAD
  // Cargar tareas de tipo "diary"
  loadTasks() {
    this.taskService.getTasksByType('diary').subscribe((tasks) => {
=======
  // Cargar tareas de tipo "daily"
  loadTasks() {
    this.taskService.getTasksByType('daily').subscribe((tasks) => {
>>>>>>> 6a907e9 (Responsability / Diary / Monthly - TaskService implementation)
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
