import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { user } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private firestore: AngularFirestore) {}

  // Obtener datos del usuario por UID
  getUser(uid: string): Observable<user | undefined> {
    return this.firestore.collection<user>('users').doc(uid).valueChanges();
  }

  // Actualizar datos del usuario
  updateUser(uid: string, data: user): Promise<any> {
    return this.firestore.collection('users').doc(uid).update(data);
  }

  updateUsername(uid: string, username: string): Promise<any> {
    return this.firestore.collection('users').doc(uid).update({ username });
  }

  updatePassword(uid: string, password: string): Promise<any> {
    return this.firestore.collection('users').doc(uid).update({ password });
  }

  // Subir foto de perfil
  updateProfilePicture(uid: string, profilePicture: string): Promise<any> {
    return this.firestore
      .collection('users')
      .doc(uid)
      .update({ profilePicture });
  }

  // Obtener todos los usuarios
  getAllUsers(): Observable<user[]> {
    return this.firestore.collection<user>('users').valueChanges();
  }

  //eliminar Usuario
  deleteUser(uid: string): Promise<void> {
    return this.firestore.collection('users').doc(uid).delete();
  }
}
