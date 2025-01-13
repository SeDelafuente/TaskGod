import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
  standalone: false
})
export class UsersPage implements OnInit{
  ngOnInit(): void {

  }

  users = [
    { id: '1', username: 'usuario1' },
    { id: '2', username: 'usuario2' },
    { id: '3', username: 'usuario3' },
    { id: '4', username: 'usuario4' },
    { id: '5', username: 'usuario5' },
  ];

  constructor(private router: Router) {}

  blockUser(user: any) {
    alert(`Usuario ${user.username} bloqueado.`);
    // Aquí se implementaría la lógica para bloquear al usuario.
  }

  deleteUser(user: any) {
    const index = this.users.indexOf(user);
    if (index > -1) {
      this.users.splice(index, 1);
      alert(`Usuario ${user.username} eliminado.`);
    }
  }

  goToHelp() {
    this.router.navigate(['/help']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
