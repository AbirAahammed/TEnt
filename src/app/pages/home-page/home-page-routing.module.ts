import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateDriverComponent} from '../../components/create-driver/create-driver.component';
import {HomePageComponent} from './home-page.component';


const routes: Routes = [
  {
    path: '', component: HomePageComponent, children : [
      { path: 'createdriver', component: CreateDriverComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
