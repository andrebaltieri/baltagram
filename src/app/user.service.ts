import { Injectable } from '@angular/core';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {
  public user: any = {};
  userChange: Observable<any>;
  userChangeObserver: Observer<any>;

  constructor() {
    this.userChange = new Observable((observer: Observer<any>) => {
      this.userChangeObserver = observer;
    });
  }

  setUser(data: any) {
    this.user = data;
    //this.userChangeObserver.next(this.user);
  }
}
