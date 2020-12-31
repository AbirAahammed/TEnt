import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillsRoutingModule } from './bills-routing.module';
import { BillGenComponent } from './bill-gen/bill-gen.component';


@NgModule({
  declarations: [BillGenComponent],
  imports: [
    CommonModule,
    BillsRoutingModule
  ]
})
export class BillsModule { }
