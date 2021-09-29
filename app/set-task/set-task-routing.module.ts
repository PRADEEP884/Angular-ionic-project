import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SetTaskPage } from './set-task.page';

const routes: Routes = [
  {
    path: '',
    component: SetTaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SetTaskPageRoutingModule {}
