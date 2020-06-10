import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    public loginservice:LoginserviceService,
    private router: Router) { }

  ngOnInit() {
    console.log(this.loginservice.user);
  }


  wyloguj(){
    this.loginservice.wyloguj();
    //this.router.navigate(['/login']);
  }


}
