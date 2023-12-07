import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable()
export class AuthService {
  userData: any;
  credentialData: any;
  token: string | undefined;
  constructor(public fbAuth: AngularFireAuth) {
    this.fbAuth.authState.subscribe((user) => {
      if (user) {
        this.userData = JSON.parse(JSON.stringify(user));
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user') || '{}');
      } else {
        localStorage.setItem('user', '');
        JSON.parse(localStorage.getItem('user') || '{}');
        console.log(this.userData);
      }
    });
  }
}
