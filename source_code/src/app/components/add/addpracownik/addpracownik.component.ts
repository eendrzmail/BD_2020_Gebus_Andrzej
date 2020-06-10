import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { InsertService } from 'src/app/services/insert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addpracownik',
  templateUrl: './addpracownik.component.html',
  styleUrls: ['./addpracownik.component.css']
})
export class AddpracownikComponent implements OnInit {

  constructor(public loginservice:LoginserviceService,
    private insertservice:InsertService,
    private router:Router) { }


  error:boolean=false;
  imie:string=null;
  nazwisko:string=null;
  haslo:string=null;
  wyplata:string=null;

  ngOnInit() {
  }

  send(){
    if (this.imie!=null &&
      this.nazwisko!=null &&
      this.haslo!=null &&
      this.wyplata !=null)
      {
        this.error=false;
        this.insertservice.add_pracownik(this.imie,this.nazwisko,this.haslo,this.wyplata).subscribe((ret)=>{
          console.log(ret);
          this.router.navigate(['/pracownicy']);
        })
      }
      else{
        this.error=true;
      }
  }

}
