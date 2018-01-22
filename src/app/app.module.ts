import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { LoginComponent } from './components/login/login.component';
import { CarsComponent } from './components/cars/cars.component';
import { AppRoutes } from "./app.routes";
import { NewCarComponent } from './components/new-car/new-car.component';
import { FormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { CarComponent } from './components/car/car.component';


 const firebaseConfig = {
    apiKey: "AIzaSyCLeJeNjiBmuf7CJNqZ6yK1HqDFgYLC-GA",
    authDomain: "elephant-cars-fea3d.firebaseapp.com",
    databaseURL: "https://elephant-cars-fea3d.firebaseio.com",
    projectId: "elephant-cars-fea3d",
    storageBucket: "elephant-cars-fea3d.appspot.com",
    messagingSenderId: "213827759188"
  };



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CarsComponent,
    NewCarComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    MaterialModule,
    AppRoutes,
    AngularFireModule.initializeApp(environment.firebase, 'elephant-cars-fea3d'),
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
