import { Component, OnInit } from '@angular/core';
import {DriverBo} from '../../data-object/driver/driver-bo';
import {CrudDriverService} from '../../core/services/driver/crud-driver.service';
@Component({
  selector: 'app-create-driver',
  templateUrl: './create-driver.component.html',
  styleUrls: ['./create-driver.component.css']
})
export class CreateDriverComponent implements OnInit {
  firstName: string;
  middleName: string;
  lastName: string;
  driver: DriverBo;

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private crudDriverService: CrudDriverService) { }

  async createDriver(firstName, middleName, lastName) {
    console.log('First Name: ' + firstName);
    console.log('Middle Name: ' + middleName);
    console.log('Last Name: ' + lastName);
    this.driver = new DriverBo(firstName, middleName, lastName);
    console.log(this.driver);
    console.log(await this.crudDriverService.createDriver(this.driver));
  }
  ngOnInit() {
  }

}
