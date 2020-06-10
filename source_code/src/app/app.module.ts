import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { WyszukiwarkaComponent } from './components/wyszukiwarka/wyszukiwarka.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { KsiazkaComponent } from './components/ksiazka/ksiazka.component';
import { AvailablePipe } from './pipes/available.pipe';
import { WypozyczenieComponent } from './components/wypozyczenie/wypozyczenie.component';
import { WypozyczeniaComponent } from './components/wypozyczenia/wypozyczenia.component';
import { OddanoPipe } from './pipes/oddano.pipe';
import { AddczytelnikComponent } from './components/add/addczytelnik/addczytelnik.component';
import { AddmenuComponent } from './components/add/addmenu/addmenu.component';
import { AddbookComponent } from './components/add/addbook/addbook.component';
import { AddautorComponent } from './components/add/addautor/addautor.component';
import { AddkategoriaComponent } from './components/add/addkategoria/addkategoria.component';
import { AddwydawnictwoComponent } from './components/add/addwydawnictwo/addwydawnictwo.component';
import { ModifybookComponent } from './components/modifybook/modifybook.component';
import { PracownicyComponent } from './components/pracownicy/pracownicy.component';
import { AddpracownikComponent } from './components/add/addpracownik/addpracownik.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    WyszukiwarkaComponent,
    KsiazkaComponent,
    AvailablePipe,
    WypozyczenieComponent,
    WypozyczeniaComponent,
    OddanoPipe,
    AddczytelnikComponent,
    AddmenuComponent,
    AddbookComponent,
    AddautorComponent,
    AddkategoriaComponent,
    AddwydawnictwoComponent,
    ModifybookComponent,
    PracownicyComponent,
    AddpracownikComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
