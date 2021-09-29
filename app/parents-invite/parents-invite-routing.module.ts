import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParentsInvitePage } from './parents-invite.page';

const routes: Routes = [
  {
    path: '',
    component: ParentsInvitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParentsInvitePageRoutingModule {}
