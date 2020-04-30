import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import {AppRoutingModule} from './app-routing/app-routing.module';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule, MatDialogModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {AddDriverPopupComponent} from './components/create-driver/add-driver-popup/add-driver-popup.component';
import {FormsModule} from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {CreateDriverModule} from './components/create-driver/create-driver.module';
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    AddDriverPopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    MatDialogModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    CreateDriverModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
  ],
  entryComponents: [AddDriverPopupComponent]
})
export class AppModule { }
