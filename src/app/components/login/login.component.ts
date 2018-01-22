import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	user = {
   		email: '',
   		password: ''
		};

  constructor(private router: Router, private authService: AuthService) { }

  signInWithEmail() {
   this.authService.signInRegular(this.user.email, this.user.password)
      .then((res) => {
         console.log(res);
         this.router.navigate(['home']);
      })
      .catch((err) => console.log('error: ' + err));
	}

  ngOnInit() {
  }

}