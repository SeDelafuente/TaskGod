import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../../components/popover/popover.component';

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
  progressPercentage: number = 0;

  constructor(private router: Router, private popoverController: PopoverController) {}

  ngOnInit() {
    this.currentMonth = new Date().toLocaleDateString('es-CL', {
      month: 'long',
      year: 'numeric',
    });
    this.updateChart();
  }

  updateChart() {
    this.progressPercentage = Math.min(
      Math.max((this.currentSavings / this.savingsGoal) * 100, 0),
      100
    );
    const chartElement = document.getElementById('circle-chart');
    if (chartElement) {
      chartElement.style.setProperty('--percent', this.progressPercentage.toString());
      chartElement.textContent = `${Math.round(this.progressPercentage)}%`;
    }
  }

  async presentPopover(type: 'goal' | 'savings') {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      translucent: true,
      componentProps: {
        title: type === 'goal' ? 'Editar Meta de Ahorro' : 'Editar Cantidad Ahorrada',
        value: type === 'goal' ? this.savingsGoal : this.currentSavings,
        onSave: (newValue: number) => {
          if (type === 'goal') {
            this.savingsGoal = newValue;
          } else {
            this.currentSavings = newValue;
          }
          this.updateChart();
          popover.dismiss();
        },
      },
    });
    await popover.present();
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
}
