import { Component } from '@angular/core';
import { FirebaseUISignInFailure, FirebaseUISignInSuccessWithAuthResult } from 'firebaseui-angular';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(public fbAuth: AngularFireAuth){

}
errorLoginCallback($event: FirebaseUISignInFailure) {
throw new Error('Method not implemented.');
}
successLoginCallback($event: FirebaseUISignInSuccessWithAuthResult) {
throw new Error('Method not implemented.');
}
  title = 'ChatBox-Front';
}
