import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(public fbAuth: AngularFireAuth){
    
  }

  Login(): void {}

  onSubmit(username: String, password: String) {
    alert(username +" " + password);
  }
}
