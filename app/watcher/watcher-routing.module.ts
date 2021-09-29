import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WatcherPage } from './watcher.page';

const routes: Routes = [
  {
    path: '',
    component: WatcherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WatcherPageRoutingModule {}
