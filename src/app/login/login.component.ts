import { Component, OnInit } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods } from 'angularfire2';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(public af: AngularFire, public userService: UserService, public router: Router) {
    this.af.auth.subscribe(auth => {
      if (auth) {
        if (auth.google) {
          this.userService.setUser({
            name: auth.google.displayName,
            email: auth.google.email,
            image: auth.google.photoURL
          });
        }
        if (auth.github) {
          this.userService.setUser({
            name: auth.github.displayName,
            email: auth.github.email,
            image: auth.github.photoURL
          });
        }
        this.router.navigateByUrl('/home');
      }
    });
  }

  ngOnInit() {
  }

  loginGitHub() {
    this.af.auth.login({
      provider: AuthProviders.Github,
      method: AuthMethods.Popup,
    });
  }

  loginGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    });
  }

}
