import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResponsabilityPageRoutingModule } from './responsability-routing.module';

import { ResponsabilityPage } from './responsability.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResponsabilityPageRoutingModule
  ],
  declarations: [ResponsabilityPage]
})
export class ResponsabilityPageModule {}
