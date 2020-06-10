import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { InsertService } from 'src/app/services/insert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addautor',
  templateUrl: './addautor.component.html',
  styleUrls: ['./addautor.component.css']
})
export class AddautorComponent implements OnInit {

  constructor(public loginservice:LoginserviceService,
    private insertservice:InsertService,
    private router:Router) { }

    imie:string=null;
    nazwisko:string=null;
    error:boolean=false;

  ngOnInit() {
  }

  send(){
    if (this.imie!=null && this.nazwisko!=null){
      this.error=false;
      this.insertservice.add_autor(this.imie,this.nazwisko).subscribe((ret)=>{
        console.log(ret);
        this.router.navigate(['/dodaj']);
      })
    }
    else{
      this.error=true;
    }
  }

}
