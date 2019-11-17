import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-driver',
  templateUrl: './create-driver.component.html',
  styleUrls: ['./create-driver.component.css']
})
export class CreateDriverComponent implements OnInit {
  firstName: string;
  middleName: string;
  lastName: string;

  constructor() { }

  createDriver(firstName, middleName, lastName) {
    console.log('First Name: ' + firstName);
    console.log('Middle Name: ' + middleName);
    console.log('Last Name: ' + lastName);
  }
  ngOnInit() {
  }

}
