import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  photos: FirebaseListObservable<any>;
  loading: boolean = true;

  constructor(af: AngularFire) {
    this.photos = af.database.list('/photos');
    this.photos.subscribe(() => {
      this.loading = false;
    })
  }

  ngOnInit() {
  }

}