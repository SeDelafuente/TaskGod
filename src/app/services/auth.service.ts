import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { user } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore
  ) { }

  // Login
  login(email: string, password: string) : Promise<any>{
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  // Registro de usuario
  register(user: user) : Promise<any>{
    return this.auth.createUserWithEmailAndPassword(user.email, user.password)
      .then((cred) => {
        return this.firestore.collection('users').doc(cred.user?.uid).set({
          name: user.name,
          userName: user.username,
          email: user.email,
          rol: 'usuario',
          profilePhoto: ''
        });
      });
  }

  // Recuperar contraseña
  recoverPassword(email: string) : Promise<void>{
    return this.auth.sendPasswordResetEmail(email);
  }

  // Logout
  logout() : Promise<void> {
    return this.auth.signOut();
  }

  // Obtener el UID del usuario actual
  getUserId() : Promise<string> {
    return new Promise((resolve, reject) => {
      this.auth.onAuthStateChanged((user) => {
        if(user){
          resolve(user.uid);
        } else {
          resolve('');
        }
      });
    });
  }
}
