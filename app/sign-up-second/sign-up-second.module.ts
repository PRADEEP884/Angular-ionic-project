import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpSecondPageRoutingModule } from './sign-up-second-routing.module';

import { SignUpSecondPage } from './sign-up-second.page';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SignUpSecondPageRoutingModule
  ],
  declarations: [SignUpSecondPage]
})
export class SignUpSecondPageModule {}
