import { MessageService } from './../services/message.service';
import { Client } from './../interfaces/client';
import { Component, OnInit } from '@angular/core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { ClientService } from '../services/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  faEdit = faEdit;
  faEye=faEye;
  faCopy=faCopy;
  faTrash=faTrash;

  clients : Client[];
  constructor(private clientService: ClientService,private messageService:MessageService){  }

  OnInit(){ }


  ngOnInit(): void {

    this.clientService.getAll()
    .subscribe(
      data => {
        this.clients = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });

  }

  deleteClient(clientId) {

    if (confirm('Are you sure you want to delete this thing into the database?')) {
    this.clientService.delete(clientId)
      .subscribe(
        response => {
          this.messageService.onSuccess("The record has been deleted !");
          this.clients.forEach((client,index)=>{
            if(client.clientId==clientId) this.clients.splice(index,1);
         });
        },
        error => {
         this.messageService.onError("Erreur !!");
        });
    } 
  }
}
