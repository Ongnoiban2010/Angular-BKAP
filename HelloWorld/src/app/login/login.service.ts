import { Injectable } from '@angular/core';
import { Role } from '../_models/role';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public currentUser!: any;

  constructor() { }

  login(username: string, password: string) {
    if (username == 'admin' && password == 'admin') {
      this.currentUser = {
        id: 1,
        username: 'admin',
        password: 'admin',
        firstName: 'Q',
        lastName: 'T',
        role: Role.Admin,
        token: '1293872983hdhshshshshsQWEQWE'
      }
    } else if (username == 'user' && password == 'user') {
      this.currentUser = {
        id: 1,
        username: 'user',
        password: 'user',
        firstName: 'Guest',
        lastName: '1',
        role: Role.User,
        token: 'QWEQWE1293872983hdhshshshshs'
      }
    }
    return this.currentUser;
  }

  logout() {
    this.currentUser = null;
  }
}
