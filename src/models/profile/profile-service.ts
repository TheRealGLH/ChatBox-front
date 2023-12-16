import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import {
  HandleError,
  HttpErrorHandler,
} from '../http-services/http-error-handling-service';
import { AuthService } from '../http-services/auth-service';
import { environment } from 'src/environments/environment';
import { ProfileSubmission } from './profile-submission';
import { Profile } from './profile';

@Injectable()
export class ProfileService {
  profileUrl = environment.apiProtocol+environment.apiLocation+':'+environment.apiPort+'/profile'; // URL to web api
  private handleError: HandleError;
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler,
    public authService: AuthService
  ) {
    this.handleError = httpErrorHandler.createHandleError('ProfileService');
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization:
        'Bearer ' +
        JSON.parse(localStorage.getItem('user') || '{}').stsTokenManager
          .accessToken,
    }),
  };

  updateProfile(profileToUpdate: ProfileSubmission, characterId: string): Observable<Profile> {
    return this.http
      .put<Profile>(this.profileUrl + "/" + characterId, profileToUpdate, this.httpOptions)
      //.pipe(catchError(this.handleError('updateProfile', profile)));
  }

  readProfile(characterId: string): Observable<Profile> {
    return this.http
      .get<Profile>(this.profileUrl+"/"+characterId, this.httpOptions)
      //.pipe(catchError(this.handleError('readProfile', profile)));
  }

}
