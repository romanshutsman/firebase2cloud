import { Routes } from '@angular/router';
import { GalleryComponent } from './app/gallery/gallery.component';
import { ImageDetailComponent } from './app/image-detail/image-detail.component';
import { LoginComponent } from './app/login/login.component';
import { UploadComponent } from './app/upload/upload.component';
import { AuthenticationGuard } from './app/services/authenticationGuard.service';
import { RegisterComponent } from './app/register/register.component';
import { HomeComponent } from './app/home/home.component';

export const appRoutes: Routes = [
    { path: 'gallery', component: GalleryComponent, canActivate: [AuthenticationGuard]},
    { path: 'upload', component: UploadComponent, canActivate: [AuthenticationGuard]},
    { path: 'image/:id', component: ImageDetailComponent, canActivate: [AuthenticationGuard]},
    { path: 'login', component: LoginComponent},
    { path: 'register', component: RegisterComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component: HomeComponent}
];
