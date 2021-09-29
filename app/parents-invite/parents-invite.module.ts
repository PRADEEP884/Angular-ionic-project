import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParentsInvitePageRoutingModule } from './parents-invite-routing.module';

import { ParentsInvitePage } from './parents-invite.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParentsInvitePageRoutingModule
  ],
  declarations: [ParentsInvitePage]
})
export class ParentsInvitePageModule {}
