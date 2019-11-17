import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;
  redirectUrl: string;

  constructor() { }

  public async mockLogin(email: string, password: string) {
    try {
      if (!(email === 'user' && password === 'user')) {
        throw new Error(
          'When using mockLogin, login with credentials: \nemail: user\npassword:user',
        );
      }
      this.token = 'user';
      this.storage.save(StorageKey.AUTH_TOKEN, this.token);
      return this.redirectUrl;
    } catch (e) {
      return Promise.reject(e.message);
    }
  }
}
