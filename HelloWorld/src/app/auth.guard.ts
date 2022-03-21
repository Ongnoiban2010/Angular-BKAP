import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { nextTick } from 'process';
import { Observable } from 'rxjs';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUser = this.loginService.currentUser;
    if(currentUser) {
      // check if route is restricted by role
      if(route.data['roles'] && route.data['roles'].indexOf(currentUser.role) === -1) {
        this.router.navigate(['/']);
        return false;
      }
      return true;
    }
    // not logged in so redirect to login page with the return url
    return false;
  }
  
}
