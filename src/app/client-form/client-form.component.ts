import { Component, OnInit } from '@angular/core';
import { Client } from '../interfaces/client';
import { Contact } from '../interfaces/contact';
import countries from '../_files/countries.json';
import { ClientService } from '../services/client.service';
import { ActivatedRoute } from '@angular/router';


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

  constructor(private clientService: ClientService,private route : ActivatedRoute) {}

  ngOnInit(): void {
    this.fetchCoutriesCities();



    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
       this.clientService.get(params.get('id')).subscribe(c =>{
          console.log(c);
          this.client = c;
          this.contact = this.client.contact;

          this.selectedCountry = this.client.contact.country;
          this.citiesList = [];
          this.citiesList = countries[this.selectedCountry];
          this.selectedCity = this.client.contact.city;



      })   
      });



  }

  fetchCoutriesCities(){
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

    this.client.contact = this.contact;
    this.client.contact.city = this.selectedCity;
    this.client.contact.country = this.selectedCountry;

    if(cF.valid){
      this.saveClient()
    }
  }

  onChangeCountry(selectedCountry) {
    this.citiesList = [];
    this.citiesList = countries[selectedCountry];
    this.selectedCountry = selectedCountry;
    this.selectedCity = this.citiesList[0];
  }

  onChangeCity(selectedCity) {
    console.log(selectedCity);
  }

}