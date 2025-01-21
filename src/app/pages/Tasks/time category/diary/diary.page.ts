import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-diary',
  templateUrl: './diary.page.html',
  styleUrls: ['./diary.page.scss'],
  standalone: false,
})
export class DiaryPage implements OnInit  {
    constructor(private router: Router) {}

    ngOnInit(): void {

    }
  tasks = [
    { description: 'Poner en ahorro $2,500', completed: false },
    { description: 'Hacer rutina de cardio', completed: false },
    { description: 'Entregar informe', completed: false },
    { description: 'Meditar 15 min', completed: false },
  ];

  newTask: string = '';
  isModalOpen = false;

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

