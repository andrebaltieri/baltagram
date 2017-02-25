import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UploadComponent } from './upload/upload.component';

import { AuthService } from './auth.service';

const appRoutes: Routes = [
    { path: 'home', canActivate: [AuthService], component: HomeComponent },
    { path: 'upload', canActivate: [AuthService], component: UploadComponent },
    { path: '', component: LoginComponent }
];

export const RoutingProviders: any[] = [

];

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);