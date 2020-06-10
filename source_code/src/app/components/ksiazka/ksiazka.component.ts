import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ksiazka } from 'src/app/models/ksiazka';
import { BooksserviceService } from 'src/app/services/booksservice.service';
import { Egzemplarz } from 'src/app/models/egzemplarz';
import { LoginserviceService } from 'src/app/services/loginservice.service';

@Component({
  selector: 'app-ksiazka',
  templateUrl: './ksiazka.component.html',
  styleUrls: ['./ksiazka.component.css']
})
export class KsiazkaComponent implements OnInit {

  constructor(public route: ActivatedRoute,
    public booksservice: BooksserviceService,
    public loginservice: LoginserviceService ) { }

  book:Ksiazka=null;
  egzemplarze:Array<Egzemplarz>;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getbook(id);
    this.getegzemplarze(id);
  }

  getbook(id:string){
    this.booksservice.getbook(id).subscribe((ret)=>{
      this.book=ret;
      console.dir(this.book);
    })
  }
  getegzemplarze(id:string){
    this.booksservice.getegzemplarze(id).subscribe((ret)=>{
      this.egzemplarze=ret;
      console.dir(this.egzemplarze);
    })
  }

}
