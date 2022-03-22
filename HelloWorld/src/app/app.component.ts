import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  constructor(private loginService: LoginService, private router: Router) {

  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
