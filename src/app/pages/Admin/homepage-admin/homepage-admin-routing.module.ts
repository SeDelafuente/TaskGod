import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomepageAdminPage } from './homepage-admin.page';

const routes: Routes = [
  {
    path: '',
    component: HomepageAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageAdminPageRoutingModule {}
