import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingUpFirstPageRoutingModule } from './sing-up-first-routing.module';

import { SingUpFirstPage } from './sing-up-first.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SingUpFirstPageRoutingModule
  ],
  declarations: [SingUpFirstPage]
})
export class SingUpFirstPageModule {}
