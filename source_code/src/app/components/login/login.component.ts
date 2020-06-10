import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from 'src/app/services/loginservice.service';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public loginservice: LoginserviceService, private router: Router) { }

  ngOnInit() {
  }
  loginbutton:string='';
  passwordbutton:string='';

  loguj(){
    //console.log(this.loginbutton+" "+this.passwordbutton);
    this.loginservice.login(this.loginbutton,this.passwordbutton).subscribe((ret)=>{
      this.loginservice.zaloguj(ret);
      console.dir(this.loginservice.user);
      if (this.loginservice.user!=null){
        this.router.navigate(['/']);
      }
    })
  }
}
