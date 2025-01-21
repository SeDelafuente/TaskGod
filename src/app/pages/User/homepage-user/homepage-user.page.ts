import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-user',
  templateUrl: './homepage-user.page.html',
  styleUrls: ['./homepage-user.page.scss'],
  standalone: false,
})
export class HomepageUserPage {
  username: string = 'Username';

  constructor(private router: Router) {}

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToDiary() {
    this.router.navigate(['/diary']);
  }

  goToMonthly() {
    this.router.navigate(['/monthly']);
  }

  goToResponsability() {
    this.router.navigate(['/responsability']);
  }

  goToExercise() {
    this.router.navigate(['/exercise']);
  }

  goToSelfcare() {
    this.router.navigate(['/selfcare']);
  }

  goToEconomic() {
    this.router.navigate(['/economic']);
  }

  goToHelp() {
    this.router.navigate(['/help']);
  }

  goToLogin(){
    this.router.navigate(['/login']);
  }
}
