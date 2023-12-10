import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { environment } from 'src/models/auth/environment';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NewCharacterComponent } from './characters/new-character/new-character.component';
import { ViewCharacterComponent } from './characters/view-character/view-character.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { CharacterService } from 'src/models/character/character-service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { HttpErrorHandler } from 'src/models/http-services/http-error-handling-service';
import { MessageService } from 'src/models/http-services/message-service';
import { ReactiveFormsModule } from "@angular/forms";
import { AuthService } from 'src/models/http-services/auth-service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      /*{
          scopes: [
              'public_profile',
              'email',
              'user_likes',
              'user_friends'
          ],
          customParameters: {
              'auth_type': 'reauthenticate'
          },
          provider:       firebase.auth.FacebookAuthProvider.PROVIDER_ID
      },
      firebase.auth.GithubAuthProvider.PROVIDER_ID,*/
      {
          requireDisplayName: false,
          provider: firebase.auth.EmailAuthProvider.PROVIDER_ID
      }
  ],
  //term of service
  tosUrl: '<your-tos-link>',
  //privacy url
  privacyPolicyUrl: '<your-privacyPolicyUrl-link>',
  //credentialHelper:             firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM
  credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO
};

@NgModule({
  declarations: [
      AppComponent,
      HomePageComponent,
      NotFoundComponent,
      NewCharacterComponent,
      SidenavComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      AppRoutingModule,
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireAuthModule,
      FirebaseUIModule.forRoot(firebaseUiAuthConfig),
      ReactiveFormsModule,
      //material modules
      BrowserAnimationsModule,
      MatFormFieldModule,
      MatSidenavModule,
      MatInputModule,
      MatSelectModule,
      MatListModule,
      MatToolbarModule,
      MatTooltipModule,
      MatButtonModule, MatDividerModule, MatIconModule
  ],
  providers: [CharacterService, HttpClient, HttpErrorHandler, MessageService, AuthService],
  bootstrap: [AppComponent]
  })
export class AppModule { }
