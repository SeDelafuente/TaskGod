import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-economic',
  templateUrl: './economic.page.html',
  styleUrls: ['./economic.page.scss'],
  standalone: false,
})
export class EconomicPage implements OnInit {
  savingsGoal: number = 500000; // Meta de ahorro inicial
  currentSavings: number = 200000; // Cantidad ahorrada inicial
  currentMonth: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentMonth = new Date().toLocaleDateString('es-CL', {
      month: 'long',
    });
  }

  goToIncome() {
    this.router.navigate(['/income']);
  }

  goToExpenses() {
    this.router.navigate(['/expenses']);
  }

  goToSavings() {
    this.router.navigate(['/savings']);
  }

  goToWithdraw() {
    this.router.navigate(['/withdraw']);
  }

  goToHistory() {
    this.router.navigate(['/history']);
  }

  goToHelp() {
    this.router.navigate(['/help']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  editSavingsGoal() {
    console.log('Editar meta de ahorro');
  }

  updateSavings() {
    console.log('Actualizar cantidad ahorrada');
  }
}
