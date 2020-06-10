import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { BooksserviceService } from 'src/app/services/booksservice.service';
import { Wypozyczenie } from 'src/app/models/wypozyczenie';
import { InsertService } from 'src/app/services/insert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wypozyczenia',
  templateUrl: './wypozyczenia.component.html',
  styleUrls: ['./wypozyczenia.component.css']
})
export class WypozyczeniaComponent implements OnInit {

  constructor(public loginservice: LoginserviceService,
    public bookservice:BooksserviceService,
    private iserts: InsertService,
    private router:Router) { }

    wypozyczenia:Array<Wypozyczenie>=null;
    activeitem:Wypozyczenie=null;

  ngOnInit() {
    this.getallwypoz();
  }

  getallwypoz(){
    this.bookservice.getallwypozyczenia().subscribe((ret)=>{
      this.wypozyczenia=ret;
      console.dir(this.wypozyczenia);
    })
  }

  show(item:Wypozyczenie){
    this.activeitem=item;
    //console.dir(item);
  }
  prolonguj(item:Wypozyczenie){
    this.iserts.prolonguj(item).subscribe((ret)=>{
      console.log(ret);
      this.router.navigate(['/wypozyczenia']);
      this.wypozyczenia=null;
      this.getallwypoz();
      this.activeitem=null;
      
    });
  }
  oddaj(item:Wypozyczenie){
    this.iserts.oddaj(item).subscribe((ret)=>{
      console.log(ret);
      this.router.navigate(['/wypozyczenia']);
      this.wypozyczenia=null;
      this.getallwypoz();
      this.activeitem=null;
    })
  }

}
