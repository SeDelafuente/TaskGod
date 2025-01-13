import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-responsability',
  templateUrl: './responsability.page.html',
  styleUrls: ['./responsability.page.scss'],
  standalone: false
})
export class ResponsabilityPage implements OnInit {
  constructor(private router: Router) {}

  dailyTasks = [
    { description: 'Entregar informe', completed: false },
  ];

  monthlyTasks = [
    { description: 'Completar el mes con éxito', completed: false },
  ];

  newDailyTask: string = '';
  newMonthlyTask: string = '';

  isDailyModalOpen = false;
  isMonthlyModalOpen = false;

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
    console.log('Ir a artículos de productividad');
  }

  goToHelp(){
    this.router.navigate(['/help']);
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {

  }

}
