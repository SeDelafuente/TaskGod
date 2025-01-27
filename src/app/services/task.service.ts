import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AuthService } from './auth.service';
import { task } from '../models/task.model';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {}

  // Crea un task
  createTask(newTask: Partial<task>): Promise<void> {
    const taskId = this.firestore.createId();
    return this.firestore
      .collection('tasks')
      .doc(taskId)
      .set({ ...newTask, id: taskId });
  }

  // Actualiza un task
  updateTask(taskId: string, updatedFields: Partial<task>): Promise<void> {
    return this.firestore.collection('tasks').doc(taskId).update(updatedFields);
  }

  // Borra un task
  deleteTask(taskId: string): Promise<void> {
    return this.firestore.collection('tasks').doc(taskId).delete();
  }

  // Consigue los task por tipo para el usuario actual
  getTasksByType(tipo: string): Observable<task[]> {
    return from(this.authService.getUserId()).pipe(
      switchMap((userId) =>
        this.firestore
          .collection<task>('tasks', (ref) =>
            ref.where('userId', '==', userId).where('tipo', '==', tipo)
          )
          .valueChanges()
      )
    );
  }

  // Conseguir Task por categoria y tipo para el usuario actual
  getTasksByCategoryAndType(
    category: string,
    tipo: string
  ): Observable<task[]> {
    return from(this.authService.getUserId()).pipe(
      switchMap((userId) =>
        this.firestore
          .collection<task>('tasks', (ref) =>
            ref
              .where('userId', '==', userId)
              .where('category', '==', category)
              .where('tipo', '==', tipo)
          )
          .valueChanges()
      )
    );
  }

  // cambiar estado de realizado a los task
  markTaskAsCompleted(taskId: string): Promise<void> {
    return this.updateTask(taskId, { isCompleted: true });
  }

  unmarkTaskAsCompleted(taskId: string): Promise<void> {
    return this.updateTask(taskId, { isCompleted: false });
  }
}
