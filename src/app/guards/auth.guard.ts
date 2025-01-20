import { CanActivateFn, Router} from '@angular/router';
import { inject } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

export const authGuard: CanActivateFn = async (route, state) => {
  const auth = inject(AngularFireAuth);
  const router = inject(Router);
  const user = await auth.currentUser;

  if(user){
    return true //user autenticado
  } else{
    router.navigate(['login']) //redirigir a login
  }
  return true;
};
