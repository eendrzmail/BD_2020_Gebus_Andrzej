import { Component, OnInit } from '@angular/core';
import { BooksserviceService } from 'src/app/services/booksservice.service';
import { Pracownik } from 'src/app/models/pracownik';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { Zarobki } from 'src/app/models/zarobki';

@Component({
  selector: 'app-pracownicy',
  templateUrl: './pracownicy.component.html',
  styleUrls: ['./pracownicy.component.css']
})
export class PracownicyComponent implements OnInit {

  constructor(private bookservice:BooksserviceService,
    public loginservice:LoginserviceService) { }

  pracownicy:Pracownik[]=null;
  zarobki:Zarobki=null;

  ngOnInit() {
    this.getPracownicy();
    this.getZarobki();
  }


  getPracownicy(){
    this.bookservice.getAllPracownicy().subscribe((ret)=>{
      this.pracownicy=ret;
    })
  }
  getZarobki(){
    this.bookservice.getZarobki().subscribe((ret)=>{
      this.zarobki=ret;
    })
  }

}
