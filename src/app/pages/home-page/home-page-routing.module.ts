import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateDriverComponent} from '../../components/create-driver/create-driver.component';
import {HomePageComponent} from './home-page.component';
import {CrudInterfaceComponent} from '../../core/interface/crud-interface/crud-interface.component';
import {MatButtonModule, MatIconModule, MatTableModule} from '@angular/material';
import {CommonModule} from '@angular/common';


const routes: Routes = [
  {
    path: '', component: HomePageComponent, children : [
      { path: 'createdriver', component: CreateDriverComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), MatTableModule, CommonModule, MatIconModule, MatButtonModule],
  declarations: [
    CrudInterfaceComponent
  ],
  exports: [RouterModule, CrudInterfaceComponent]
})
export class HomePageRoutingModule { }
