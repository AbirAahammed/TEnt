import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import {DriverComponent} from '../../components/driver/driver.component';
import {HomePageComponent} from './home-page.component';
import {BillsComponent} from '../../components/bills/bills.component';


const routes: Routes = [
  {
    path: '', component: HomePageComponent, children : [
      { path: 'Drivers', component: DriverComponent},
      { path: 'Bills', component: BillsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
