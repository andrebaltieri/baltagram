import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  public user: any = {};

  constructor(public af: AngularFire, public router: Router, public userService: UserService) {
    this.user = userService.user;

    this.userService.userChange.subscribe((data) => {
      this.user = this.userService.user;
    });
  }

  ngOnInit() {
  }

  logout() {
    this.af.auth.logout();
    this.router.navigateByUrl('/home');
  }
}
