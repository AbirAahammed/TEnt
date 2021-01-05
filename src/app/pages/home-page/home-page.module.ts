import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import {DriverComponent} from '../../components/driver/driver.component';
import {HomePageComponent} from './home-page.component';
import {
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule, MatCardModule, MatFormFieldModule, MatInputModule, MatTableModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { BillsComponent } from 'src/app/components/bills/bills.component';
import { BillGenComponent } from 'src/app/components/bills/bill-gen/bill-gen.component';



@NgModule({
  declarations: [
    HomePageComponent,
    DriverComponent,
    BillsComponent,
    BillGenComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatTableModule
  ]
})
export class HomePageModule { }
