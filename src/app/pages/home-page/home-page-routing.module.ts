import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillsComponent } from 'src/app/components/bills/bills.component';
import {DriverComponent} from '../../components/driver/driver.component';
import {HomePageComponent} from './home-page.component';


const routes: Routes = [
  {
    path: '', component: HomePageComponent, children : [
      { path: 'createdriver', component: DriverComponent},
      { path: 'drivers', component: DriverComponent},
      { path: 'bills', component: BillsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
