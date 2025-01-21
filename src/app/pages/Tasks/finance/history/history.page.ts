import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  standalone: false
})
export class HistoryPage implements OnInit {
  monthlyHistory = [
    { name: 'Enero', year: 2023, income: 700000, expense: 550000 },
    { name: 'Febrero', year: 2023, income: 720000, expense: 530000 },
    { name: 'Marzo', year: 2023, income: 750000, expense: 560000 },
    { name: 'Abril', year: 2023, income: 680000, expense: 520000 },
    { name: 'Mayo', year: 2023, income: 710000, expense: 540000 },
    { name: 'Junio', year: 2023, income: 730000, expense: 570000 },
    { name: 'Julio', year: 2023, income: 690000, expense: 510000 },
    { name: 'Agosto', year: 2023, income: 740000, expense: 560000 },
    { name: 'Septiembre', year: 2023, income: 720000, expense: 550000 },
    { name: 'Octubre', year: 2023, income: 760000, expense: 580000 },
    { name: 'Noviembre', year: 2023, income: 710000, expense: 540000 },
    { name: 'Diciembre', year: 2023, income: 770000, expense: 590000 },
  ];


  constructor(private router : Router) {}

  ngOnInit() {}

  goToHelp() {
    this.router.navigate(['/help']);
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }
}
