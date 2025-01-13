import { Component } from '@angular/core';

@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.page.html',
  styleUrls: ['./monthly.page.scss'],
  standalone: false
})
export class MonthlyPage {
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
}
