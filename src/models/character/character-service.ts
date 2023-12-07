import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { catchError } from 'rxjs';
import { HandleError, HttpErrorHandler } from '../http-services/http-error-handling-service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Character } from './character';

@Injectable()
export class CharacterService {
    characterUrl = 'http://localhost:5087/character';  // URL to web api
  private handleError: HandleError;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      Authorization: 'my-auth-token'
    })
  };
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler,
    public fbAuth: AngularFireAuth) {
    this.handleError = httpErrorHandler.createHandleError('CharacterService');
    this.fbAuth.idToken.subscribe()
  }


    addCharacter(character: Character): Observable<Character> {
        return this.http.post<Character>(this.characterUrl, character, this.httpOptions)
          .pipe(
            catchError(this.handleError('addCharacter', character))
          );
      }

}