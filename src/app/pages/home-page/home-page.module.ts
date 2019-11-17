import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import {CreateDriverComponent} from '../create-driver/create-driver.component';
import {HomePageComponent} from './home-page.component';
import {
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule, MatCardModule, MatFormFieldModule, MatInputModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    HomePageComponent,
    CreateDriverComponent
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
    FormsModule
  ]
})
export class HomePageModule { }
