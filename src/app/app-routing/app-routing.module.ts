import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginModule} from '../pages/login/login.module';
import {AuthGuard} from '../auth/auth.guard';


// ANGULAR 7
// const routes: Routes = [{
//   path: '',
//   loadChildren: './pages/login/login.module#LoginModule'
// }];
// ANGULAR 8
const routes: Routes = [{
  path: '',
  loadChildren: () =>
    import('../pages/login/login.module').then(
      m => m.LoginModule
    )
  },
  {
    path: 'login',
    loadChildren: () =>
      import('../pages/login/login.module').then(
        m => m.LoginModule
      )
  },
  { path: '',
    loadChildren: () => import(`../pages/home-page/home-page.module`).then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  { path: 'first-component',
    loadChildren: () => import(`../first/first.module`).then(m => m.FirstModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes), LoginModule],
  exports: [RouterModule]

})
export class AppRoutingModule { }
