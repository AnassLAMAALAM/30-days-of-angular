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

  clients : any;
  constructor(private tutorialService: ClientService) {

  }

  ngOnInit(): void {

    this.tutorialService.getAll()
    .subscribe(
      data => {
        this.clients = data;
        console.log(data);
      },
      error => {
        console.log(error);
      });

  }

}
