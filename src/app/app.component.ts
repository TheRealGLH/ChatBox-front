import { Component, OnInit } from '@angular/core';
import { FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {LoginState} from 'src/models/auth/LoginState'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent implements OnInit{

  showFiller = false;
  loginState: LoginState = LoginState.Loading;

constructor(public fbAuth: AngularFireAuth){

}
  ngOnInit(): void {
    this.fbAuth.user.subscribe((user) => {
      if(user == null) this.loginState = LoginState.LoggedOut;
      else this.loginState = LoginState.LoggedIn;
    }

    );
  }
errorLoginCallback($event: FirebaseUISignInFailure) {
throw new Error('Method not implemented.');
}
successLoginCallback($event: FirebaseUISignInSuccessWithAuthResult) {
throw new Error('Method not implemented.');
}
  title = 'ChatBox-Front';
}

