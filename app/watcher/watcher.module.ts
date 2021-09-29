import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WatcherPageRoutingModule } from './watcher-routing.module';

import { WatcherPage } from './watcher.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    WatcherPageRoutingModule
  ],
  declarations: [WatcherPage]
})
export class WatcherPageModule {}
