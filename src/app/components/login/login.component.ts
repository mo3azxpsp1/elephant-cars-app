import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

// @Injectable()
// export class AuthService {
//   private user: Observable<firebase.User>;
// constructor(private _firebaseAuth: AngularFireAuth) { 
//       this.user = _firebaseAuth.authState;
//   }
// }

export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}