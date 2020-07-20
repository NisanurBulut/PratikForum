import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }
  getUserList() {
    return this.http.get(environment.apiBaseUrl + '/User')
      .pipe(catchError(this.handleError));
  }
  deleteUser(id) {
    return this.http.delete(environment.apiBaseUrl + '/User/' + id)
      .pipe(catchError(this.handleError));
  }
  postUser(formData: FormGroup) {
    return this.http.post(environment.apiBaseUrl + '/User', formData)
      .pipe(catchError(this.handleError));
  }
  putUser(formData: any) {
    return this.http.put(environment.apiBaseUrl + '/User/' + formData.userID, formData)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: any, caught: any): any {
    console.log(error);
  }
}
