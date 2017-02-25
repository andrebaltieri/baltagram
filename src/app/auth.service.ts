import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthService implements CanActivate {

  constructor(private router: Router, public userService: UserService) {
  }

  canActivate() {
    if (!this.userService.user.email) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}