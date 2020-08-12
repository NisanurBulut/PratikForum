import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.minLength(10)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl(0),
    birthday: new FormControl(''),
    isPermanent: new FormControl(false)
  });
  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      fullName: '',
      email: '',
      mobile: '',
      city: '',
      gender: '1',
      department: 0,
      birthday: new Date(),
      isPermanent: false
    });
  }
  getContacts(){
    return this.http.get(environment.apiBaseUrl + '/Contact/GetContactList');
  }
}
