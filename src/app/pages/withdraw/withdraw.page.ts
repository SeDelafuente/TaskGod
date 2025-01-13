import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.page.html',
  styleUrls: ['./withdraw.page.scss'],
  standalone: false
})
export class WithdrawPage implements OnInit {

  currentDate: string = '';
  incomeAmount: string = '';
  keypad: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',];

  constructor(private router: Router) {}

  ngOnInit() {
    this.currentDate = new Date().toLocaleDateString('es-CL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }

  onKeyPress(key: string) {
    if (key === '=') {
      // Lógica para evaluar expresiones matemáticas
      try {
        this.incomeAmount = eval(this.incomeAmount).toString();
      } catch {
        this.incomeAmount = '0';
      }
    } else if (key === 'x') {
      this.incomeAmount += '*'; // Representar multiplicación
    } else if (key === '/') {
      this.incomeAmount += '/'; // Representar división
    } else {
      this.incomeAmount += key;
    }
  }

  clearInput() {
    this.incomeAmount = '';
  }

  chooseCategory() {
    this.router.navigate(['/economic']);
  }

  goToHelp() {
    this.router.navigate(['/help']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}

