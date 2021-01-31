import { Component, OnInit } from '@angular/core';
import { Client } from '../interfaces/client';
import { Contact } from '../interfaces/contact';
import countries from '../_files/countries.json';
import { ClientService } from '../services/client.service';


@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {





  client = {} as Client;
  contact = {} as Contact;

  selectedCountry = "";
  selectedCity = "";

  countriesList = [];
  citiesList = [];


  constructor(private clientService: ClientService) {}


  ngOnInit(): void {

    //fetch coutries
    let cr = [];
    let cr2 = [];
    Object.keys(countries).map(function(key){
      cr.push({[key]:countries[key]})
    });
    cr.forEach(element => {
      Object.keys(element).map(function(key){
        cr2.push({'name' : key})
      });
    });
    this.countriesList = cr2;


    this.selectedCountry = this.countriesList[0].name;
    // this.selectedCity = countries[this.selectedCountry][0];


    // console.log(this.selectedCity);

    this.onChangeCountry(this.selectedCountry );



  }

  saveClient() {


    const data = this.client;

    this.clientService.create(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }




  onSubmit(cF){
    console.log(cF.value);

    this.client.contact = this.contact;
    this.client.contact.city = this.selectedCity;
    this.client.contact.country = this.selectedCountry;
    
    console.log(JSON.stringify(this.client));
    console.log(JSON.stringify(this.contact));

    this.saveClient();


  }

  onChangeCountry(newValue) {
    this.citiesList = [];
    this.citiesList = countries[newValue];
    this.selectedCity = this.citiesList[0];
  }

  onChangeCity(newValue) {
    console.log(newValue);
  }

}