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
import { environment } from 'src/environments/environment';

@Injectable()
export class CharacterService {
  characterUrl = environment.apiProtocol+environment.apiLocation+':'+environment.apiPort+'/character'; // URL to web api
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
  //TODO: re-enable these error handlers once we do proper backend testing again, 
  //though we have to take into account the different return types
  addCharacter(character: CharacterSubmission): Observable<Character> {
    return this.http
      .post<Character>(this.characterUrl, character, this.httpOptions)
      //.pipe(catchError(this.handleError('addCharacter', character)));
  }

  updateCharacter(character: CharacterSubmission, characterId: string): Observable<Character> {
    return this.http
      .put<Character>(this.characterUrl + "/" + characterId, character, this.httpOptions)
      //.pipe(catchError(this.handleError('addCharacter', character)));
  }

  deleteCharacter(characterId: string): Observable<void> {
    return this.http
      .delete<void>(this.characterUrl + "/" + characterId, this.httpOptions)
      //TODO: enable these errors once we do proper backend testing again, though we have to take into account the different return types
      //.pipe(catchError(this.handleError('addCharacter', character)));
  }

  readCharacter(characterId: string): Observable<Character> {
    return this.http
      .get<Character>(this.characterUrl+"/"+characterId, this.httpOptions)
      //.pipe(catchError(this.handleError('addCharacter', character)));
  }

  readAllUserCharacters(): Observable<Character[]> {
    return this.http
      .get<Character[]>(this.characterUrl+"/mine", this.httpOptions)
      //.pipe(catchError(this.handleError('addCharacter', character)));
  }
}
