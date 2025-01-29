import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { HelpForm } from '../models/helpForm.model';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class SupportService {
  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService
  ) {}

  // Enviar un formulario
  async submitForm(newForm: HelpForm): Promise<void> {
    const formId = this.firestore.createId();
    const userid = await this.authService.getUserId();
    return this.firestore
      .collection('supportForms')
      .doc(formId)
      .set({ ...newForm, uid: formId, userid });
  }

  // Obtener todos los problemas
  getAllProblems(): Observable<HelpForm[]> {
    return this.firestore
      .collection<HelpForm>('supportForms', (ref) =>
        ref.orderBy('createdAt', 'desc')
      )
      .valueChanges();
  }

  // Cambiar estado del problema
  updateStatus(
    formId: string,
    newStatus: 'pending' | 'in-progress' | 'resolved'
  ): Promise<void> {
    return this.firestore
      .collection('supportForms')
      .doc(formId)
      .update({ status: newStatus });
  }
}
