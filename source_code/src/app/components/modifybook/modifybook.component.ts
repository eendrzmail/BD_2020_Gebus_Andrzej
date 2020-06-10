import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { BooksserviceService } from 'src/app/services/booksservice.service';
import { Ksiazka } from 'src/app/models/ksiazka';
import { Autor } from 'src/app/models/autor';
import { Kategoria } from 'src/app/models/kategoria';
import { Wydawnictwo } from 'src/app/models/wydawnictwo';
import { InsertService } from 'src/app/services/insert.service';

@Component({
  selector: 'app-modifybook',
  templateUrl: './modifybook.component.html',
  styleUrls: ['./modifybook.component.css']
})
export class ModifybookComponent implements OnInit {

  constructor(public route: ActivatedRoute,
    public booksservice: BooksserviceService,
    public loginservice: LoginserviceService,
    private insertservice: InsertService,
    private router:Router) { }
  
    book:Ksiazka=null;
    all_authors:Array<Autor>=null;
    all_kategorie:Kategoria[]=null;
    all_wydawnictwa:Wydawnictwo[]=null;

    egz_num:number=1;
    
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getbook(id);
    this.getauthors();
    this.getcategory();
    this.getwyd();
  }


  getbook(id:string){
    this.booksservice.getbook(id).subscribe((ret)=>{
      this.book=ret;
      console.dir(this.book);
    })
  }
  getauthors(){
    this.booksservice.getAllAuthors().subscribe((ret)=>{
      this.all_authors=ret;
      //console.dir(this.all_authors);
    })
  }
  getcategory(){
    this.booksservice.getAllCategory().subscribe((ret)=>{
      this.all_kategorie=ret;
    })
  }
  getwyd(){
    this.booksservice.getallwydawnictwa().subscribe((ret)=>{
      this.all_wydawnictwa=ret;
    })
  }

  rem_aut(autor:Autor){
    this.book.autorzy=this.book.autorzy.filter(item => item !== autor);
  }
  add_autor(autor:Autor){
    this.book.autorzy.push(autor);
  }

  rem_kat(kat:Kategoria){
    this.book.kategorie=this.book.kategorie.filter(item => item !== kat);
  }
  add_kat(kat:Kategoria){
    this.book.kategorie.push(kat);
  }

  rem_wyd(){
    this.book.wydawnictwo=null;
  }
  change_wyd(wyd:Wydawnictwo){
    this.book.wydawnictwo=wyd;
  }


  add_egz(){
    this.insertservice.add_egzemplarze(this.egz_num+'',this.book.id_ksiazki+'').subscribe((ret)=>{
      console.log(ret);
      this.router.navigate(['/ksiazka/'+this.book.id_ksiazki]);
    });
    
  }

  send(){
    this.insertservice.edit_Book(this.book).subscribe((ret)=>{
      console.log(ret);
      //this.getbook(this.book.id_ksiazki+"");
      this.router.navigate(['/ksiazka/'+this.book.id_ksiazki]);
    })
  }

}
