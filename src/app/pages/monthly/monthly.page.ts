import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.page.html',
  styleUrls: ['./monthly.page.scss'],
  standalone: false
})
export class MonthlyPage implements OnInit  {
  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  tasks = [
    { description: 'Terminar mes con $100.000', completed: false },
    { description: 'Hacer ejercicio todas las semanas', completed: false },
    { description: 'Estar al día con informes', completed: false },
    { description: 'Hacer rutina de skincare todas las semanas', completed: false },
  ];

  newTask: string = '';
  isModalOpen = false;

  currentMonth: string = new Date().toLocaleString('es-ES', { month: 'long' });

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ description: this.newTask.trim(), completed: false });
      this.newTask = '';
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  goToHelp(){
    this.router.navigate(['/help']);
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }
}
