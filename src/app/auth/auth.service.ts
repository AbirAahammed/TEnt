import { Injectable } from '@angular/core';
import {StorageKey} from '../core/storage/storage.model';
import {StorageService} from '../core/storage/storage.service';
const { AUTH_TOKEN } = StorageKey;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string;
  redirectUrl: string;

  constructor(private storage: StorageService) {
    this.token = this.storage.read(AUTH_TOKEN) || '';
  }
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
      return await Promise.reject(e.message);
    }
  }
  public getToken(): string {
    return this.token;
  }

  public logout() {
    this.token = '';
    this.storage.remove(AUTH_TOKEN);
  }

  public isLogged(): boolean {
    return this.token.length > 0;
  }
}
