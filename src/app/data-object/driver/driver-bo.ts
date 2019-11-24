export class DriverBo {
  private _firstName: string;
  private _middleName: string;
  private _lastName: string;

  constructor(firstName: string, middleName: string, lastName: string) {
    this._firstName = firstName;
    this._middleName = middleName;
    this._lastName = lastName;
  }
  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get middleName(): string {
    return this._middleName;
  }

  set middleName(value: string) {
    this._middleName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }


}
