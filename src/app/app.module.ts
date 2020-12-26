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
import {AddDriverPopupComponent} from './components/driver/add-driver-popup/add-driver-popup.component';
import {FormsModule} from '@angular/forms';
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
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddDriverPopupComponent]
})
export class AppModule { }
