import { Injectable, Injector } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { user } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth!: AngularFireAuth;
  private firestore!: AngularFirestore;

  constructor(private injector: Injector) {}

  // Resolver AngularFireAuth dinámicamente
  private getAuth(): AngularFireAuth {
    if (!this.auth) {
      this.auth = this.injector.get(AngularFireAuth);
    }
    return this.auth;
  }

  // Resolver AngularFirestore dinámicamente
  private getFirestore(): AngularFirestore {
    if (!this.firestore) {
      this.firestore = this.injector.get(AngularFirestore);
    }
    return this.firestore;
  }

  // Login
  login(email: string, password: string): Promise<any> {
    return this.getAuth().signInWithEmailAndPassword(email, password);
  }

  // Registro de usuario
  register(user: user): Promise<any> {
    return this.getAuth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then((cred) => {
        return this.getFirestore()
          .collection('users')
          .doc(cred.user?.uid)
          .set({
            name: user.name,
            userName: user.username,
            email: user.email,
            rol: 'usuario',
            profilePhoto: '',
          });
      });
  }

  // Recuperar contraseña
  recoverPassword(email: string): Promise<void> {
    return this.auth.sendPasswordResetEmail(email)
      .then(() => {
        console.log('Correo de restablecimiento enviado correctamente a:', email);
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error.code, error.message);
        if (error.code === 'auth/user-not-found') {
          console.error('El usuario no existe en la base de datos.');
        }
        throw error;
      });
  }


  // Logout
  logout(): Promise<void> {
    return this.getAuth().signOut();
  }

  // Obtener el UID del usuario actual
  getUserId(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.getAuth().onAuthStateChanged((user) => {
        if (user) {
          resolve(user.uid);
        } else {
          resolve('');
        }
      });
    });
  }
}
