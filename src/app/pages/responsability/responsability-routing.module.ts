import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResponsabilityPage } from './responsability.page';

const routes: Routes = [
  {
    path: '',
    component: ResponsabilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResponsabilityPageRoutingModule {}
