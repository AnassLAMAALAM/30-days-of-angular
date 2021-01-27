import { Component, OnInit } from '@angular/core';
import { Client } from '../interfaces/client';
import { Contact } from '../interfaces/contact';





@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {





  client = {} as Client;
  contact = {} as Contact;

  ngOnInit(): void {

 
    
  }


  onSubmit(cF){
    console.log(cF.value);
    console.log(JSON.stringify(this.client));
    console.log(JSON.stringify(this.contact));
    
  }
}
