import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelfcarePageRoutingModule } from './selfcare-routing.module';

import { SelfcarePage } from './selfcare.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelfcarePageRoutingModule
  ],
  declarations: [SelfcarePage]
})
export class SelfcarePageModule {}
