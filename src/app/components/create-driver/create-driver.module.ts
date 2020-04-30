import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateDriverRoutingModule } from './create-driver-routing.module';
import {MatDialogModule} from '@angular/material/dialog';
import {CrudInterfaceComponent} from '../../core/interface/crud-interface/crud-interface.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CreateDriverRoutingModule,
    MatDialogModule
  ],
  exports: []
})
export class CreateDriverModule { }
