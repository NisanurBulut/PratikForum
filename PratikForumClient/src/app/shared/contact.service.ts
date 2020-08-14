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
    mobile: new FormControl('', [Validators.required, Validators.minLength(12)]),
    city: new FormControl(''),
    gender: new FormControl('1'),
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
      birthday: new Date(),
      isPermanent: false
    });
  }
  populateForm(data: any): void {
    console.log(data);
    this.form.setValue({
      $key: data.contactId,
      fullName: data.fullName,
      email: data.email,
      mobile: data.mobile,
      city: data.city,
      gender: '' + data.gender,
      birthday: data.birthday,
      isPermanent: data.isPermanent
    });
  }
  getContacts() {
    return this.http.get(environment.apiBaseUrl + '/Contact/GetContactList');
  }
  insertContact(formData) {
    console.log(formData);
    return this.http.post(environment.apiBaseUrl + '/Contact/InsertContact', formData);
  }
  updateContact(formData) {
    return this.http.put(environment.apiBaseUrl + '/Contact/UpdateContact/' + formData.contactId, formData);
  }
  deleteContact(id: number) {
    console.log(id);
    return this.http.delete(environment.apiBaseUrl + '/Task/DeleteContact/' + id);
  }
}
