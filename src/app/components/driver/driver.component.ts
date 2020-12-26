import { Component, OnInit } from '@angular/core';
import {DriverBo} from '../../data-object/driver/driver-bo';
import {CrudDriverService} from '../../core/services/driver/crud-driver.service';
import {MatDialog} from '@angular/material/dialog';
import {AddDriverPopupComponent} from './add-driver-popup/add-driver-popup.component';
export interface PeriodicElement {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
}

@Component({
  selector: 'app-create-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  driver: DriverBo;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'middleName'];
  dataSource: string;

  constructor(private crudDriverService: CrudDriverService, public dialog: MatDialog) { }

  async createDriver(firstName, middleName, lastName) {
    this.driver = new DriverBo(firstName, middleName, lastName);
    console.log(await this.crudDriverService.createDriver(this.driver));
  }
  async ngOnInit() {
    this.dataSource = await this.crudDriverService.getDrivers();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddDriverPopupComponent, {
      width: '500px',
      data: {Test: 'Pop'}
    });

    dialogRef.afterClosed().subscribe(async result => {
      this.dataSource = await this.crudDriverService.getDrivers();
    });
  }

}
