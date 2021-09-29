import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingUpFirstPage } from './sing-up-first.page';

const routes: Routes = [
  {
    path: '',
    component: SingUpFirstPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingUpFirstPageRoutingModule {}
