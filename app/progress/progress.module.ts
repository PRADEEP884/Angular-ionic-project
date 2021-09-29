import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressPageRoutingModule } from './progress-routing.module';

import { ProgressPage } from './progress.page';
import { OpenNativeSettings } from '@ionic-native/open-native-settings/ngx';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressPageRoutingModule
  ],
   providers: [  OpenNativeSettings],
  declarations: [ProgressPage]
})
export class ProgressPageModule {}
