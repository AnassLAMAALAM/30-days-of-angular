import { Component, OnInit } from '@angular/core';
import { Client } from '../interfaces/client';
import { Contact } from '../interfaces/contact';
import countries from '../_files/countries.json';





@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {





  client = {} as Client;
  contact = {} as Contact;

  countriesList = [];
  cytiesList = [];

  constructor(){
    

  }

  ngOnInit(): void {
    let x =  countries;
    let c = []; 
    let ct = [];  
    Object.keys(x).map(function(key){  
        c.push({[key]:x[key]})  
    }); 

    this.cytiesList = c;

    console.log(this.cytiesList);

    c.forEach(element => {

      Object.keys(element).map(function(key){  
        ct.push({'name' : key})  
      }); 
        
    });
    this.countriesList = ct;
    
   this.countriesList.forEach(element => {
        console.log(element);
    });
    
    
  }


  onSubmit(cF){
    console.log(cF.value);
    console.log(JSON.stringify(this.client));
    console.log(JSON.stringify(this.contact));
   
    
    
  }
}
