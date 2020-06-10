import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { InsertService } from 'src/app/services/insert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addczytelnik',
  templateUrl: './addczytelnik.component.html',
  styleUrls: ['./addczytelnik.component.css']
})
export class AddczytelnikComponent implements OnInit {

  constructor(public loginservice:LoginserviceService,
    private insertservice: InsertService,
    private router:Router) { }

  imie:string=null;
  nazwisko:string=null;
  telefon:string=null;
  email:string=null;
  error:boolean=false;

  ngOnInit() {
  }

  send(){
    if (this.imie!=null && this.nazwisko!=null && this.telefon!=null && this.email!=null){
      this.error=false;
      this.insertservice.add_czytelnik(this.imie,this.nazwisko,this.telefon,this.email).subscribe((ret)=>{
        console.log(ret);
        this.router.navigate(['/dodaj']);
      })
    }
    else{
      this.error=true;
    }
  }

}
