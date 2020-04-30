import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {DriverBo} from '../../../data-object/driver/driver-bo';
import {MatDialog} from '@angular/material';
import {AddDriverPopupComponent} from '../../../components/create-driver/add-driver-popup/add-driver-popup.component';

@Component({
  selector: 'app-crud-interface',
  templateUrl: './crud-interface.component.html',
  styleUrls: ['./crud-interface.component.css']
})
export class CrudInterfaceComponent implements  OnInit {
  driver: DriverBo;
  @Input() displayedColumns: string[] ;
  @Input() columnNames: string[];
  dataSource: string;
  @Input() crudService: any;
  @Input() popUpComponent: any;
  // dataSource = [{position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  //   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'}];
  constructor(public dialog: MatDialog) { }

  async ngOnInit() {
    this.dataSource = await this.crudService.getDrivers();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(this.popUpComponent, {
      width: '500px'});

    dialogRef.afterClosed().subscribe(async result => {
      this.dataSource = await this.crudService.getDrivers();
    });
  }
}
