import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomepageUserPageRoutingModule } from './homepage-user-routing.module';

import { HomepageUserPage } from './homepage-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomepageUserPageRoutingModule
  ],
  declarations: [HomepageUserPage]
})
export class HomepageUserPageModule {}
