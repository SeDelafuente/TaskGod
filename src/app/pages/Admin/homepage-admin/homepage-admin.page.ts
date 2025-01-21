import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homepage-admin',
  templateUrl: './homepage-admin.page.html',
  styleUrls: ['./homepage-admin.page.scss'],
  standalone: false
})
export class HomepageAdminPage implements OnInit {
  username: string = '$ADMINISTRADOR';

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToUsers() {
    this.router.navigate(['/users']);
  }

  goToProblems() {
    this.router.navigate(['/problems']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  goToHelp() {
    this.router.navigate(['/help']);
  }
}
