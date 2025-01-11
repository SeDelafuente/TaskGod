import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
  standalone: false,
})
export class ForgetPasswordPage implements OnInit {
  email: string = '';

  constructor(private router: Router) {}

  goToValidate(){
    this.router.navigate(['/validate-code'])
  }
  ngOnInit() {}
}

