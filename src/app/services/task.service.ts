import { Injectable } from '@angular/core';
import { task } from '../models/task.model';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private firestore: AngularFirestore, private authService: AuthService) {}

  addTask(){

  }


}
