import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selfcare',
  templateUrl: './selfcare.page.html',
  styleUrls: ['./selfcare.page.scss'],
  standalone: false
})
export class SelfcarePage implements OnInit {
  dailyTasks = [
    { description: 'Meditar 15 min', completed: false },
  ];

  monthlyTasks = [
    { description: 'Hacer skincare todas las semanas', completed: false },
  ];

  newDailyTask: string = '';
  newMonthlyTask: string = '';

  isDailyModalOpen = false;
  isMonthlyModalOpen = false;

  constructor(private router: Router) {}

  openDailyModal() {
    this.isDailyModalOpen = true;
  }

  closeDailyModal() {
    this.isDailyModalOpen = false;
  }

  addDailyTask() {
    if (this.newDailyTask.trim()) {
      this.dailyTasks.push({ description: this.newDailyTask.trim(), completed: false });
      this.newDailyTask = '';
    }
  }

  deleteDailyTask(index: number) {
    this.dailyTasks.splice(index, 1);
  }

  openMonthlyModal() {
    this.isMonthlyModalOpen = true;
  }

  closeMonthlyModal() {
    this.isMonthlyModalOpen = false;
  }

  addMonthlyTask() {
    if (this.newMonthlyTask.trim()) {
      this.monthlyTasks.push({ description: this.newMonthlyTask.trim(), completed: false });
      this.newMonthlyTask = '';
    }
  }

  deleteMonthlyTask(index: number) {
    this.monthlyTasks.splice(index, 1);
  }

  goToArticles() {
    this.router.navigate(['/articles']);
  }

  goToHelp() {
    this.router.navigate(['/help']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {}
}
