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

//   [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];
@Component({
  selector: 'app-create-driver',
  templateUrl: './create-driver.component.html',
  styleUrls: ['./create-driver.component.css']
})
export class CreateDriverComponent implements OnInit {
  id: number;
  firstName: string;
  middleName: string;
  lastName: string;
  driver: DriverBo;
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'middleName'];
  dataSource: string;
  // dataSource = [{position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  //   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'}];
  constructor(private crudDriverService: CrudDriverService, public dialog: MatDialog) { }

  async createDriver(firstName, middleName, lastName) {
    console.log('First Name: ' + firstName);
    console.log('Middle Name: ' + middleName);
    console.log('Last Name: ' + lastName);
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
