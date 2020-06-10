import { Component, OnInit } from '@angular/core';
import { BooksserviceService } from 'src/app/services/booksservice.service';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { Egzemplarz } from 'src/app/models/egzemplarz';
import { Czytelnik } from 'src/app/models/czytelnik';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { Route } from '@angular/compiler/src/core';
import { InsertService } from 'src/app/services/insert.service';


@Component({
  selector: 'app-wypozyczenie',
  templateUrl: './wypozyczenie.component.html',
  styleUrls: ['./wypozyczenie.component.css']
})
export class WypozyczenieComponent implements OnInit {

  constructor(private booksservice: BooksserviceService,
    private route:ActivatedRoute,
    private router: Router,
    public loginservice:LoginserviceService,
    private insertservice:InsertService) { }

  ngOnInit() {
    const id_egz=this.route.snapshot.paramMap.get('id');
    this.getegzemplarz(id_egz);
    this.getczytelnicy();
  }

  egzemplarz:Egzemplarz=null;
  czytelnik:string='';
  czytinput:Array<Czytelnik>;
  czytelnikout:Czytelnik=null;
  error:boolean=false;
  error2:boolean=false;


  getegzemplarz(id:string){
    this.booksservice.getegzemplarz(id).subscribe((ret)=>{
      this.egzemplarz=ret;
    })
  }
  getczytelnicy(){
    this.booksservice.getczytelnicy().subscribe((ret)=>{
      this.czytinput=ret;
    })
  }

  czyt(){
    this.booksservice.getczytelnik(this.czytelnik).subscribe((ret)=>{
      this.czytelnikout=ret;
    })
    
  }

  wyslij(){
    if (this.czytelnikout==null){
      this.error=true;
    }
    else{
      this.error=false;
      console.log("data dzis,\n egzemplarz:"+this.egzemplarz.id_egzemplarza+"\nid_czytelnika:"+this.czytelnikout.id_czytelnika+" \nset prolongacje 0 i oddano 0")
      this.booksservice.sendwypozyczenie(this.egzemplarz.id_egzemplarza+'',this.czytelnikout.id_czytelnika+'',this.loginservice.user.id_pracownika+'').subscribe((ret)=>{
        if (ret=='error') {
          this.error2=true;
          console.log(ret);
        }
        else {
          this.router.navigate(['/wypozyczenia']);
        }
      });
    }
  }




}
