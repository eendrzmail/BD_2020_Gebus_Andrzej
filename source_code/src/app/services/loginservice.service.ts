import { Injectable } from '@angular/core';
import { Pracownik } from '../models/pracownik';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {

  constructor(private http: HttpClient) {
    if(localStorage.getItem('user')==null){
      console.log("brak usera");
    }
    else{
      this.user=JSON.parse(localStorage.getItem('user'));
    }
   }

  user:Pracownik = null;

  public zaloguj(user:Pracownik){
    localStorage.setItem('user',JSON.stringify(user));
    this.user=user;
  }

  public wyloguj(){
    localStorage.removeItem('user');
    this.user=null;
  }

  login(login:string,haslo:string): Observable<Pracownik>{
    const params = new HttpParams().set('login',login).set('haslo',haslo); 
    return this.http.get<Pracownik>('http://localhost/api/login.php',{params})
  }


}
