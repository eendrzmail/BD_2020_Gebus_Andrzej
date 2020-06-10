import { Injectable } from '@angular/core';
import { Ksiazka } from '../models/ksiazka';
import { HttpClient,HttpParams,HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Egzemplarz } from '../models/egzemplarz';
import { Czytelnik } from '../models/czytelnik';
import { Wypozyczenie } from '../models/wypozyczenie';
import { Wydawnictwo } from '../models/wydawnictwo';
import { Autor } from '../models/autor';
import { Kategoria } from '../models/kategoria';
import { Pracownik } from '../models/pracownik';
import { Zarobki } from '../models/zarobki';

@Injectable({
  providedIn: 'root'
})
export class BooksserviceService {

  constructor(private http:HttpClient) { }

  //Books
  getbooks(q:string):Observable <Ksiazka[]>{
    const params= new HttpParams().set('q',q)
    return this.http.get<Ksiazka[]>('http://localhost/api/ksiazki.php',{params});
  }

  getbook(id:string):Observable<Ksiazka>{
    const params=new HttpParams().set('id',id);
    return this.http.get<Ksiazka>('http://localhost/api/ksiazki.php',{params});
  }

  getTopBooks():Observable<Ksiazka[]>{
    return this.http.get<Ksiazka[]>('http://localhost/api/ksiazki.php?top');
  }

  //Egzemplarze
  getegzemplarze(id:string):Observable<Egzemplarz[]>{
    const params=new HttpParams().set('id_ksiazki',id);
    return this.http.get<Egzemplarz[]>('http://localhost/api/egzemplarze.php',{params});
  }

  getegzemplarz(id:string):Observable<Egzemplarz>{
    const params=new HttpParams().set('id',id);
    return this.http.get<Egzemplarz>('http://localhost/api/egzemplarze.php',{params});
  }

  //Czytelnicy
  getczytelnicy():Observable<Czytelnik[]>{
    return this.http.get<Czytelnik[]>('http://localhost/api/czytelnicy.php?q=');
  }

  getczytelnik(id:string):Observable<Czytelnik>{
    const params=new HttpParams().set('id',id);
    return this.http.get<Czytelnik>('http://localhost/api/czytelnicy.php',{params});
  }

  //Wypozyczenia
  getallwypozyczenia():Observable<Wypozyczenie[]>{
    return this.http.get<Wypozyczenie[]>('http://localhost/api/wypozyczenia.php?q');
  }
  getallwydawnictwa(){
    return this.http.get<Wydawnictwo[]>('http://localhost/api/wydawnictwa.php?q');
  }

  //autorzy
  getAllAuthors():Observable<Autor[]>{
    return this.http.get<Autor[]>('http://localhost/api/autorzy.php?q');
  }

  //kategorie
  getAllCategory():Observable<Kategoria[]>{
    return this.http.get<Kategoria[]>('http://localhost/api/kategorie.php?q');
  }

  //pracownicy
  getAllPracownicy():Observable<Pracownik[]>{
    return this.http.get<Pracownik[]>('http://localhost/api/pracownicy.php?q');
  }

  getZarobki():Observable<Zarobki>{
    return this.http.get<Zarobki>('http://localhost/api/pracownicy.php?zarobki');
  }


  //post
  
  sendwypozyczenie(id_egzemplarza:string,id_czytelnika:string,id_pracownika:string){
    const params= new HttpParams()
    .set('action','insert')
    .set('id_egzemplarza',id_egzemplarza)
    .set('id_czytelnika',id_czytelnika)
    .set('id_pracownika',id_pracownika);
    return this.http.post('http://localhost/api/wypozyczenia.php',params,{responseType: 'text'});
  }
  

}
