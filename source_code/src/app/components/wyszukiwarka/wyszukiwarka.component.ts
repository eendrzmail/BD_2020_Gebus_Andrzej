import { Component, OnInit } from '@angular/core';
import { BooksserviceService } from 'src/app/services/booksservice.service';
import { Ksiazka } from 'src/app/models/ksiazka';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-wyszukiwarka',
  templateUrl: './wyszukiwarka.component.html',
  styleUrls: ['./wyszukiwarka.component.css']
})
export class WyszukiwarkaComponent implements OnInit {

  constructor(public booksservice:BooksserviceService,
    public loginservice: LoginserviceService) { }

  query:string='';
  book:Ksiazka;
  books:Array<Ksiazka>=null;
  topbooks:Ksiazka[]=null;

  ngOnInit() {
    this.gettop();
  }

  search(){
    if (this.query!=''){
      this.booksservice.getbooks(this.query).subscribe((ret)=>{
        this.books=ret;
        console.dir(ret);
      })
    }
    
  }

  gettop(){
    this.booksservice.getTopBooks().subscribe((ret)=>{
      this.topbooks=ret;
    })
  }

}
