import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpSecondPage } from './sign-up-second.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpSecondPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpSecondPageRoutingModule {}
