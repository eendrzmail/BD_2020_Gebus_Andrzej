import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Wypozyczenie } from '../models/wypozyczenie';
import { Wydawnictwo } from '../models/wydawnictwo';
import { Ksiazka } from '../models/ksiazka';

@Injectable({
  providedIn: 'root'
})
export class InsertService {

  constructor(private http:HttpClient) { }

  /*
  sendwypozyczenie(id_egzemplarza:string,id_czytelnika:string,id_pracownika:string){
    const params= new HttpParams()
    .set('action','insert')
    .set('id_egzemplarza',id_egzemplarza)
    .set('id_czytelnika',id_czytelnika)
    .set('id_pracownika',id_pracownika);
    return this.http.post('http://localhost/api/wypozyczenia.php',params,{responseType: 'text'});
  }
  */
  prolonguj(item:Wypozyczenie){
    const params=new HttpParams().set('id_wypozyczenia',item.id_wypozyczenia).set('action','modify');
    return this.http.post('http://localhost/api/wypozyczenia.php',params,{responseType: 'text'});
  }
  oddaj(item:Wypozyczenie){
    const params= new HttpParams()
    .set('action','return')
    .set('id_wypozyczenia',item.id_wypozyczenia)
    .set('id_egzemplarza',item.egzemplarz.id_egzemplarza+'');
    return this.http.post('http://localhost/api/wypozyczenia.php',params,{responseType: 'text'});

  }
  add_czytelnik(imie:string,nazwisko:string,telefon:string,email:string){
    const params= new HttpParams()
    .set('action','insert')
    .set('imie',imie)
    .set('nazwisko',nazwisko)
    .set('telefon',telefon)
    .set('email',email);
    return this.http.post('http://localhost/api/czytelnicy.php',params,{responseType: 'text'});
  }

  add_ksiazka(tytul:string,opis:string,ocena:number,rok_wydania:number,wyd:Wydawnictwo,img_url?:string){
    console.log(img_url);
    const params= new HttpParams()
    .set('action','insert')
    .set('tytul',tytul)
    .set('opis',opis)
    .set('ocena',ocena+'')
    .set('rok_wydania',rok_wydania+'')
    .set('id_wydawnictwa',wyd.id_wydawnictwa+'')
    .set('img_url',img_url);
    
    return this.http.post('http://localhost/api/ksiazki.php',params,{responseType: 'text'});
  }

  add_autor(imie:string,nazwisko:string){
    const params= new HttpParams()
    .set('action','insert')
    .set('imie',imie)
    .set('nazwisko',nazwisko);
    return this.http.post('http://localhost/api/autorzy.php',params,{responseType: 'text'});
  }

  add_kategoria(nazwa:string){
    const params= new HttpParams()
    .set('action','insert')
    .set('nazwa',nazwa);
    return this.http.post('http://localhost/api/kategorie.php',params,{responseType: 'text'});
  }

  add_wydawnictwo(nazwa:string){
    const params= new HttpParams()
    .set('action','insert')
    .set('nazwa',nazwa);
    return this.http.post('http://localhost/api/wydawnictwa.php',params,{responseType: 'text'});
  }

  add_egzemplarze(i:string,id_ksiazki:string){
    const params= new HttpParams()
    .set('action','insert')
    .set('id_ksiazki',id_ksiazki)
    .set('ilosc',i+'');
    return this.http.post('http://localhost/api/egzemplarze.php',params,{responseType: 'text'});
  }

  edit_Book(book:Ksiazka){
    const params= new HttpParams()
    .set('action','modify')
    .set('book',JSON.stringify(book));
    return this.http.post('http://localhost/api/ksiazki.php',params,{responseType: 'text'});
  }

  add_pracownik(imie:string,nazwisko:string,haslo:string,wyplata:string){
    const params= new HttpParams()
    .set('action','insert')
    .set('imie',imie)
    .set('nazwisko',nazwisko)
    .set('haslo',haslo)
    .set('wyplata',wyplata);
    return this.http.post('http://localhost/api/pracownicy.php',params,{responseType: 'text'});
  }

}
