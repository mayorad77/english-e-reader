import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Story } from '../story';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class StoryService {
  private storiesUrl = 'api/stories';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

  getStories(): Observable<Story[]> {
    return this.http.get<Story[]>(this.storiesUrl)
    .pipe(
      tap(_ => this.log('fetched stories')),
      catchError(this.handleError<Story[]>('getStories', []))
    );
  }
  getStory(id: number): Observable<Story> {
    const url = `${this.storiesUrl}/${id}`;
    return this.http.get<Story>(url).pipe(
         tap(_ => this.log(`fetched story id=${id}`)),
        catchError(this.handleError<Story>(`getStory id=${id}`))
    );
  }
   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    console.log(`StoryService: ${message}`);
  }
}
