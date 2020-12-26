import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {DriverBo} from '../../../data-object/driver/driver-bo';
import {CrudDriverService} from '../../../core/services/driver/crud-driver.service';

@Component({
  selector: 'app-add-driver-popup',
  templateUrl: './add-driver-popup.component.html',
  styleUrls: ['./add-driver-popup.component.css']
})
export class AddDriverPopupComponent implements OnInit {
  firstName: string;
  middleName: string;
  lastName: string;
  driver: DriverBo;
  constructor(
    public dialogRef: MatDialogRef<AddDriverPopupComponent>,
    private crudDriverService: CrudDriverService,
    @Inject(MAT_DIALOG_DATA) public data: string) {}
  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  async createDriver(firstName, middleName, lastName) {
    console.log('First Name: ' + firstName);
    console.log('Middle Name: ' + middleName);
    console.log('Last Name: ' + lastName);
    this.driver = new DriverBo(firstName, middleName, lastName);
    await this.crudDriverService.createDriver(this.driver);
    this.dialogRef.close();
  }

}
