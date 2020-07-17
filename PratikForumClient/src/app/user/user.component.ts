import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { userInfo } from 'os';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  notification = null;
  userForms: FormArray = this.fb.array([]);
  constructor(private fb: FormBuilder, private us: UserService) { }

  ngOnInit() {
  }
  GetUserList() {
    this.userForms.clear();

    this.us.getUserList().subscribe(res => {
      console.log(res);
      if (res === [] || (res as []).length === 0) {
        this.AddUserForm();
      } else {
        (res as []).forEach((user: any) => {
          this.userForms.push(this.fb.group({
            userID: [user.userID, Validators.min(1)],
            name: [user.Name],
            surname: [user.Surname, Validators.required],
            password: [user.Password, Validators.required]
          }));
        });
      }
    });
  }
  AddUserForm() {
    this.userForms.push(this.fb.group({
      userID: [0, Validators.min(1)],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      password: ['', Validators.required]
    }));
  }
  recordSubmit(fg: FormGroup) {
    if (fg.get('userID').value === 0) {
      this.us.postUser(fg.value).subscribe(
        (res: any) => {
          fg.patchValue({ userID: res.userID });
        }
      );
    } else {
      this.us.putUser(fg.value).subscribe(
        (res: any) => {
          this.GetUserList();
          this.showNotification('update');
        }
      );
    }
  }
  deleteUser(userID, i: number) {
    if (userID === 0) {
      this.userForms.removeAt(i);
    } else if (confirm('Bu işlemi yapmak istediğinizden emin misiniz ?')) {
      this.us.deleteUser(userID).subscribe(
        (res: any) => {
          this.userForms.removeAt(i);
          this.showNotification('delete');
        }
      );
    }
  }
  showNotification(category) {
    switch (category) {
      case 'insert':
        this.notification = { class: 'text-success', message: 'Başarıyla kaydedildi.' };
        break;
      case 'update':
        this.notification = { class: 'text-warning', message: 'Başarıyla güncellendi.' };
        break;
      case 'delete':
        this.notification = { class: 'text-danger', message: 'Başarıyla silindi.' };
        break;
      default:
        break;
    }
    setTimeout(() => {
      this.notification = null;
    }, (3000));
  }
}