import { Component, OnInit } from '@angular/core';
import {DriverBo} from '../../data-object/driver/driver-bo';
import {CrudDriverService} from '../../core/services/driver/crud-driver.service';
import {MatDialog} from '@angular/material/dialog';
import {AddDriverPopupComponent} from './add-driver-popup/add-driver-popup.component';

@Component({
  selector: 'app-create-driver',
  templateUrl: './create-driver.component.html',
  styleUrls: ['./create-driver.component.css']
})
export class CreateDriverComponent implements OnInit {
  driver: DriverBo;
  displayedColumns: string[] = ['driverID', 'firstName', 'middleName', 'lastName'];
  columnNames: string[] = ['ID', 'First Name', 'Middle Name', 'Last Name'];
  popUpCOmponent: any = AddDriverPopupComponent;
  dataSource: string;
  // dataSource = [{position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  //   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'}];
  constructor(private crudDriverService: CrudDriverService, public dialog: MatDialog) { }

  async ngOnInit() {
    this.dataSource = await this.crudDriverService.getDrivers();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(AddDriverPopupComponent, {
      width: '500px'});

    dialogRef.afterClosed().subscribe(async result => {
      console.log('Item closed, getting drivers');
      this.dataSource = await this.crudDriverService.getDrivers();
      console.log('Drivers returned');
    });
  }

}
