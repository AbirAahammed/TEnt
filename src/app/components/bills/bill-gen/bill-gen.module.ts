import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillGenComponent } from './bill-gen.component';



@NgModule({
  declarations: [BillGenComponent],
  imports: [
    CommonModule
  ],
  exports: [
    BillGenComponent
  ]
})
export class BillGenModule { }
