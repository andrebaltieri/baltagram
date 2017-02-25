import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { ImageCropperComponent } from 'ng2-img-cropper';

import { Routing, RoutingProviders } from './app.routing';
import { UserService } from './user.service';
import { AuthService } from './auth.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UploadComponent } from './upload/upload.component';
import { LoadingComponent } from './loading/loading.component';

export const config = {
  apiKey: "AIzaSyDgXLFbeJCQTlet5OV0qs7RTzMAs0ZB3SU",
  authDomain: "baltagram-cf563.firebaseapp.com",
  databaseURL: "https://baltagram-cf563.firebaseio.com",
  storageBucket: "baltagram-cf563.appspot.com",
  messagingSenderId: "449067488295"
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    UploadComponent,
    ImageCropperComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Routing,
    AngularFireModule.initializeApp(config)
  ],
  providers: [UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
