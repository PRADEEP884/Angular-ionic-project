import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewChildrenPageRoutingModule } from './view-children-routing.module';

import { ViewChildrenPage } from './view-children.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewChildrenPageRoutingModule
  ],
  declarations: [ViewChildrenPage]
})
export class ViewChildrenPageModule {}
