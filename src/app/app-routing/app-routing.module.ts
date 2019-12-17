import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginModule} from '../pages/login/login.module';
import {SidenavComponent} from '../components/sidenav/sidenav.component';
import {CreateDriverComponent} from '../components/create-driver/create-driver.component';
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
  { path: 'home',
    loadChildren: () => import(`../pages/home-page/home-page.module`).then(m => m.HomePageModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes), LoginModule],
  exports: [RouterModule]

})
export class AppRoutingModule { }

// src/app/pages/home-page/home-page/home-page.module.ts
// src/app/app-routing/app-routing.module.ts
