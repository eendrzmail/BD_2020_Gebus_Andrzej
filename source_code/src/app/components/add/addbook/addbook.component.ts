import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { Wydawnictwo } from 'src/app/models/wydawnictwo';
import { BooksserviceService } from 'src/app/services/booksservice.service';
import { InsertService } from 'src/app/services/insert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(public loginservice:LoginserviceService,
    private booksservice:BooksserviceService,
    private insertservice:InsertService,
    private router:Router) { }

  wydawnictwa:Array<Wydawnictwo>=null;
  wydawnictwo:Wydawnictwo=null;
  tytul:string=null;
  opis:string=null;
  ocena:number=null;
  rok_wydania:number=null;
  img_url:string='';
  error:boolean=false;

  ngOnInit() {
    this.getwyd();
  }


  getwyd(){
    this.booksservice.getallwydawnictwa().subscribe((ret)=>{
      this.wydawnictwa=ret;
    })
  }
  selectwyd(item:Wydawnictwo){
    this.wydawnictwo=item;
  }

  send(){
    if (this.tytul!=null && this.opis!=null && this.rok_wydania!=null && this.ocena!=null && this.wydawnictwo!=null){
      this.error=false;
      this.insertservice.add_ksiazka(this.tytul,this.opis,this.ocena,this.rok_wydania,this.wydawnictwo,this.img_url).subscribe((ret)=>{
        console.log(ret);
      })
      this.router.navigate(['/add']);
    }
    else{
      this.error=true;
    }
    
  }
}
