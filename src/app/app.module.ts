import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PageoneComponent } from './pageone/pageone.component';
import { PagetwoComponent } from './pagetwo/pagetwo.component';
import {RouterModule, Routes} from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { AlertModule } from 'ngx-bootstrap';
import {MatCardModule} from '@angular/material/card';
const appRoutes: Routes = [
  {path: 'pageone/:id/:id', component: PageoneComponent},
  {path: 'pagetwo', component: PagetwoComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    PageoneComponent,
    PagetwoComponent,
    SidenavComponent,
    CompanyDetailsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes, {enableTracing: true}
    ),
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AlertModule.forRoot(),
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
