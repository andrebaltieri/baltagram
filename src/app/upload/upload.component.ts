import { Component, OnInit } from '@angular/core';
import { ImageCropperComponent, CropperSettings } from 'ng2-img-cropper';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html'
})
export class UploadComponent implements OnInit {
  data: any;
  cropperSettings: CropperSettings;
  public user: any = {};
  public message: string = '';

  constructor(public af: AngularFire, public userService: UserService, public router: Router) {
    this.user = userService.user;

    this.cropperSettings = new CropperSettings();
    this.cropperSettings.width = 350;
    this.cropperSettings.height = 350;
    this.cropperSettings.croppedWidth = 350;
    this.cropperSettings.croppedHeight = 350;
    this.cropperSettings.canvasWidth = 350;
    this.cropperSettings.canvasHeight = 350;

    this.data = {};
  }

  ngOnInit() {
  }

  submit() {
    document.getElementById('submit-btn').classList.add('is-loading');
    this.af.database.list('/photos').push({
      image: this.data.image,
      userImage: this.user.image,
      name: this.user.name,
      email: this.user.email,
      message: this.message,
      date: (new Date).toISOString().slice(0, 19)
    }).then(() => {
      this.router.navigateByUrl('/home');
    })
  }

}
