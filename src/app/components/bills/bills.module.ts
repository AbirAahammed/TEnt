import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BillsRoutingModule } from './bills-routing.module';


@NgModule({
  declarations: [BillGenComponent],
  imports: [
    CommonModule,
    BillsRoutingModule,
    
  ]
})
export class BillsModule { }
