import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateDriverRoutingModule } from './create-driver-routing.module';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CreateDriverRoutingModule,
    MatDialogModule
  ]
})
export class CreateDriverModule { }
