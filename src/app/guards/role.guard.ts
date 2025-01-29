import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { user } from '../models/user.model';

export const roleGuard: CanActivateFn = async (route, state) => {
  const auth = inject(AngularFireAuth);
  const firestore = inject(AngularFirestore);
  const router = inject(Router);

  const user = await auth.currentUser;

  if (user) {
    const userData = (await firstValueFrom(
      firestore.collection('users').doc(user.uid).valueChanges()
    )) as user;
    const requiredRole = route.data?.['role'];

    if (userData?.rol === 'admin') {
      return true;
    } else {
      router.navigate(['/unauthorized']); // Redirigir a una página de acceso denegado
      return false;
    }
  } else {
    router.navigate(['/login']); // Redirigir a login si no está autenticado
    return false;
  }
};
