import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs';
import {
  HandleError,
  HttpErrorHandler,
} from '../http-services/http-error-handling-service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Character } from './character';
import { AuthService } from '../http-services/auth-service';
import { CharacterSubmission } from './character-submission';

@Injectable()
export class CharacterService {
  characterUrl = 'http://localhost:8080/character'; // URL to web api
  private handleError: HandleError;
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler,
    public authService: AuthService
  ) {
    this.handleError = httpErrorHandler.createHandleError('CharacterService');
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

  addCharacter(character: CharacterSubmission): Observable<Character> {
    return this.http
      .post<Character>(this.characterUrl, character, this.httpOptions)
      //.pipe(catchError(this.handleError('addCharacter', character)));
  }

  readCharacter(characterId: string): Observable<Character> {
    return this.http
      .get<Character>(this.characterUrl+"/"+characterId, this.httpOptions)
      //.pipe(catchError(this.handleError('addCharacter', character)));
  }
}
