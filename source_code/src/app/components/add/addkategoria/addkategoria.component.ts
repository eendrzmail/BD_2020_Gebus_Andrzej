import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { InsertService } from 'src/app/services/insert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addkategoria',
  templateUrl: './addkategoria.component.html',
  styleUrls: ['./addkategoria.component.css']
})
export class AddkategoriaComponent implements OnInit {

  constructor(public loginservice:LoginserviceService,
    private insertservice:InsertService,
    private router:Router) { }

    nazwa:string=null;
    error:boolean=false;

  ngOnInit() {
  }

  send(){
    if (this.nazwa!=null){
      this.error=false;
      this.insertservice.add_kategoria(this.nazwa).subscribe((ret)=>{
        console.log(ret);
        this.router.navigate(['/dodaj']);
      })
    }
    else{
      this.error=true;
    }
  }

}
