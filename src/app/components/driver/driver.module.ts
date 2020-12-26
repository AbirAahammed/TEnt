import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DriverRoutingModule,
    MatDialogModule
  ]
})
export class DriverModule { }
