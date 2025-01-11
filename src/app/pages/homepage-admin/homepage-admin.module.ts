import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomepageAdminPageRoutingModule } from './homepage-admin-routing.module';

import { HomepageAdminPage } from './homepage-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomepageAdminPageRoutingModule
  ],
  declarations: [HomepageAdminPage]
})
export class HomepageAdminPageModule {}
