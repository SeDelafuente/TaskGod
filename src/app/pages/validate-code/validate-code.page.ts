import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-validate-code',
  templateUrl: './validate-code.page.html',
  styleUrls: ['./validate-code.page.scss'],
  standalone: false,
})
export class ValidateCodePage implements OnInit {
  code: string = '';

  constructor(private router: Router) {}

  ngOnInit() {}

  redirectToLogin(){
    this.router.navigate(['/login'])
  }

}
