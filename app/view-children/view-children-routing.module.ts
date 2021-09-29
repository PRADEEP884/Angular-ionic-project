import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewChildrenPage } from './view-children.page';

const routes: Routes = [
  {
    path: '',
    component: ViewChildrenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewChildrenPageRoutingModule {}
