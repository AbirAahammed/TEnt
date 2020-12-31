import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BillGenComponent } from './bill-gen/bill-gen.component';
import { BillsComponent } from './bills.component';


const routes: Routes = [{
  path:'Bills', component:BillsComponent, children:[
    {path: 'bill-gen', component:BillGenComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillsRoutingModule { }
