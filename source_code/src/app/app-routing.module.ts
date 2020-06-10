import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WyszukiwarkaComponent } from './components/wyszukiwarka/wyszukiwarka.component';
import { KsiazkaComponent } from './components/ksiazka/ksiazka.component';
import { WypozyczenieComponent } from './components/wypozyczenie/wypozyczenie.component';
import { WypozyczeniaComponent } from './components/wypozyczenia/wypozyczenia.component';
import { AddmenuComponent } from './components/add/addmenu/addmenu.component';
import { AddczytelnikComponent } from './components/add/addczytelnik/addczytelnik.component';
import { AddbookComponent } from './components/add/addbook/addbook.component';
import { AddautorComponent } from './components/add/addautor/addautor.component';
import { AddkategoriaComponent } from './components/add/addkategoria/addkategoria.component';
import { AddwydawnictwoComponent } from './components/add/addwydawnictwo/addwydawnictwo.component';
import { ModifybookComponent } from './components/modifybook/modifybook.component';
import { PracownicyComponent } from './components/pracownicy/pracownicy.component';
import { AddpracownikComponent } from './components/add/addpracownik/addpracownik.component';


const routes: Routes = [
  {path: '', component: WyszukiwarkaComponent},
  {path: 'login', component: LoginComponent},
  {path: 'ksiazka/:id', component: KsiazkaComponent},
  {path: 'wypozycz/:id', component: WypozyczenieComponent},
  {path: 'szukaj', component: WyszukiwarkaComponent},
  {path: 'wypozyczenia', component: WypozyczeniaComponent},
  {path: 'dodaj', component: AddmenuComponent},
  {path: 'add/czytelnik', component: AddczytelnikComponent},
  {path: 'add/ksiazka', component: AddbookComponent},
  {path: 'add/autor', component: AddautorComponent},
  {path: 'add/kategoria', component: AddkategoriaComponent},
  {path: 'add/wydawnictwo', component: AddwydawnictwoComponent},
  {path: 'edit/book/:id', component: ModifybookComponent},
  {path: 'pracownicy', component: PracownicyComponent},
  {path: 'add/pracownik', component: AddpracownikComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
