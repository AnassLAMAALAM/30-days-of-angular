import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private service:NotificationsService){  }

  
  onSuccess(message){
    this.service.success('success',message,{
      position : ['top','right'],
      animate:'fromRight',
      showProgressBar:true,
      timeOut: 5000,
      pauseOnHover: true,
      clickToClose: true,
      maxLength: 10,
    });
  }

  onError(message){
    this.service.error('error',message,{
      position : ['top','right'],
      animate:'fromRight',
      showProgressBar:true,
      timeOut: 5000,
      pauseOnHover: true,
      clickToClose: true,
      maxLength: 10,

    });
  }
}
