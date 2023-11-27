import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  Login(): void {}

  onSubmit(username: String, password: String) {
    alert(username +" " + password);
  }
}
