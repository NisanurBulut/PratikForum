import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private ns: NotificationsService) { }

  success(title: string, message: string) {
   return this.ns.success(title, message, {
      timeOut: 2000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true,
      position: ['top']
    });
  }
  info(title: string, message: string) {
   return  this.ns.info(title, message, {
      timeOut: 2000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true,
      position: ['top']
    });
  }
  warn(title: string, message: string) {
    return this.ns.warn(title, message, {
      timeOut: 2000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true,
      position: ['top']
    });
  }
}
