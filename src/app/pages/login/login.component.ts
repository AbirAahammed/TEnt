import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.errorMessage = '';
    if (this.authService.isLogged()) {
      this.navigateTo();
    }
  }
  public async login(email: string, password: string) {
    console.log(this.authService.isLogged());
    try {
      const url = (await this.authService.mockLogin(
        email,
        password,
      )) as string;
      this.navigateTo(url);
    } catch (e) {
      this.errorMessage = 'Wrong Credentials!';
      console.error('Unable to Login!\n', e);
    }
    console.log(this.authService.isLogged());

  }

  public navigateTo(url?: string) {
    url = url || 'home/createdriver';
    this.router.navigate([url], { replaceUrl: true });
  }

}
