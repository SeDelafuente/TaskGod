import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EconomicPageRoutingModule } from './economic-routing.module';
import { EconomicPage } from './economic.page';
import { PopoverComponent } from '../../../../components/popover/popover.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EconomicPageRoutingModule,
  ],
  declarations: [EconomicPage, PopoverComponent]
})
export class EconomicPageModule {}
