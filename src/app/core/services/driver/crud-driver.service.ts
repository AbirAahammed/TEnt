import { Injectable } from '@angular/core';
import {CrudService} from '../http/crud.service';
import {HttpClient} from '@angular/common/http';
import {StorageService} from '../../storage/storage.service';
import {DriverBo} from '../../../data-object/driver/driver-bo';

@Injectable({
  providedIn: 'root'
})
export class CrudDriverService extends CrudService {
  private body: string;

  constructor(http: HttpClient) {
    super(http);
  }
  public async createDriver(driver: DriverBo) {
    console.log('Outgoing createDriver request');
    this.body = '{\n' +
      '  "driverID": 0,\n' +
      `  "firstName": "${driver.firstName}",\n` +
      `  "lastName": "${driver.lastName}",\n` +
      `  "middleName": "${driver.middleName}"\n` +
      '}';
    return await this.post(this.body, 'driver');
  }

  public  async getDrivers() {
    console.log('Outgoing createDriver request');
    return await this.get('driver');
  }

}
