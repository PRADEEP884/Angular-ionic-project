import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SetTaskPageRoutingModule } from './set-task-routing.module';

import { SetTaskPage } from './set-task.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SetTaskPageRoutingModule
  ],
  declarations: [SetTaskPage]
})
export class SetTaskPageModule {}
