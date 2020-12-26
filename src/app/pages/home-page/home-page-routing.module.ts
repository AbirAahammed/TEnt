import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DriverComponent} from '../../components/driver/driver.component';
import {HomePageComponent} from './home-page.component';


const routes: Routes = [
  {
    path: '', component: HomePageComponent, children : [
      { path: 'createdriver', component: DriverComponent},
      { path: 'drivers', component: DriverComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
