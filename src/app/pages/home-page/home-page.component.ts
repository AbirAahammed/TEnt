import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {AuthService} from '../../auth/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  sidenavItems: string[] = ['Drivers', 'Vehicles', 'Companies',  'Bills'];
  title = 'TEnt';
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver,
              private authService: AuthService,
              private router: Router) {}

  public logout() {
    this.authService.logout();
    this.router.navigate(['login'], { replaceUrl: true });
  }
  ngOnInit() {
  }

}
