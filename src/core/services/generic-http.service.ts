import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { HttpRequest, HttpErrorResponse, HttpClient } from '@angular/common/http';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class GenericHttpService {

  constructor(private httpClient: HttpClient) {

  }

  http(config: any): Observable<any> {
    const req = new HttpRequest(config.method, config.url, config.body);
    return this.httpClient.request(req).pipe(
      tap(data => { }),
      catchError((err) => this.handleError(err))
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
