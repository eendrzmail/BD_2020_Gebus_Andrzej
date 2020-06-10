(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-nav></app-nav>\n<main>\n    <router-outlet></router-outlet>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add/addautor/addautor.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add/addautor/addautor.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div *ngIf=\"this.error==true\" style=\"color:white;background-color:red;height:30px;\">\n        Błąd danych\n    </div>\n    <div *ngIf=\"this.loginservice.user!=null\" class=\"cont\">\n        <table>\n            <tr>\n                <td>\n                    <mat-form-field class=\"example-full-width\">\n                        <mat-label>Imię</mat-label>\n                        <input matInput [(ngModel)]=\"imie\">\n                    </mat-form-field>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <mat-form-field class=\"example-full-width\">\n                        <mat-label>Nazwisko</mat-label>\n                        <input matInput [(ngModel)]=\"nazwisko\">\n                    </mat-form-field>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <button mat-raised-button (click)=\"send()\">Dodaj</button>\n                </td>\n            </tr>\n        </table>\n\n            \n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add/addbook/addbook.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add/addbook/addbook.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div *ngIf=\"this.error==true\" style=\"color:white;background-color:red;height:30px;\">\n        Błąd danych\n    </div>\n    <div *ngIf=\"this.loginservice.user!=null\" class=\"cont\">\n        \n        <table>\n            <tr>\n                <td>\n                    <mat-form-field class=\"example-full-width\">\n                        <mat-label>Tytul</mat-label>\n                        <input matInput [(ngModel)]=\"tytul\">\n                    </mat-form-field>\n                </td>\n\n                \n\n                <td>\n                    <mat-form-field class=\"example-full-width\">\n                        <mat-label>Ocena [0-100]</mat-label>\n                        <input matInput [(ngModel)]=\"ocena\" type='number' >\n                    </mat-form-field>\n                </td>\n                <td rowspan=\"3\" class=\"wydawnictwa\"> \n                    Wydawnictwo:<br/> <span *ngIf=\"wydawnictwo!=null\">{{wydawnictwo.nazwa}}</span>\n                    <div style=\"border:1px solid black;display:flex;flex-direction: column;\">\n                        <a *ngFor=\"let item of wydawnictwa\" (click)=\"selectwyd(item)\">{{item.nazwa}}</a>\n                    </div>\n                </td>\n                \n            </tr>\n            <tr>\n                <td>\n                    <mat-form-field class=\"example-full-width\">\n                        <mat-label>Opis</mat-label>\n                        <input matInput [(ngModel)]=\"opis\">\n                    </mat-form-field>\n                </td>\n                <td>\n                    <mat-form-field class=\"example-full-width\">\n                        <mat-label>Rok wydania</mat-label>\n                        <input matInput [(ngModel)]=\"rok_wydania\" type='number'>\n                    </mat-form-field>\n                </td>\n                \n            </tr>\n            <tr>\n                <td colspan='2'>\n                    <mat-form-field class=\"example-full-width\">\n                        <mat-label>img_url</mat-label>\n                        <input matInput [(ngModel)]=\"img_url\" >\n                    </mat-form-field>\n                </td>\n            </tr>\n            <tr>\n                <td colspan='3'>\n                    <button mat-raised-button (click)=\"send()\">\n                        Dodaj\n                    </button>\n                </td>\n            </tr>\n            \n \n                \n            \n            \n                \n            \n        </table>\n\n            \n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add/addczytelnik/addczytelnik.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add/addczytelnik/addczytelnik.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div *ngIf=\"this.error==true\" style=\"color:white;background-color:red;height:30px;\">\n        Błąd danych\n    </div>\n    <div *ngIf=\"this.loginservice.user!=null\" class=\"cont\">\n        \n        <table>\n            <tr>\n                <td>\n                    Imię\n                </td>\n                <td>\n                    <mat-form-field class=\"example-full-width\">\n                        <mat-label>Imię</mat-label>\n                        <input matInput [(ngModel)]=\"imie\">\n                    </mat-form-field>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    Nazwisko\n                </td>\n                <td>\n                    <mat-form-field class=\"example-full-width\">\n                        <mat-label>Nazwisko</mat-label>\n                        <input matInput [(ngModel)]=\"nazwisko\">\n                    </mat-form-field>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    Telefon\n                </td>\n                <td>\n                    <mat-form-field class=\"example-full-width\">\n                        <mat-label>Telefon</mat-label>\n                        <input matInput [(ngModel)]=\"telefon\">\n                    </mat-form-field>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    E-mail\n                </td>\n                <td>\n                    <mat-form-field class=\"example-full-width\">\n                        <mat-label>Email</mat-label>\n                        <input matInput [(ngModel)]=\"email\">\n                    </mat-form-field>\n                </td>\n            </tr>\n            <tr>\n                <td colspan=\"2\">\n                    <button mat-raised-button color=\"accent\" (click)=\"send()\">\n                        Wyślij\n                    </button>\n\n                </td>\n            </tr>\n        </table>\n\n            \n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add/addkategoria/addkategoria.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add/addkategoria/addkategoria.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div *ngIf=\"this.error==true\" style=\"color:white;background-color:red;height:30px;\">\n        Błąd danych\n    </div>\n    <div *ngIf=\"this.loginservice.user!=null\" class=\"cont\">\n        <table>\n            <tr>\n                <td>\n                    <mat-form-field class=\"example-full-width\">\n                        <mat-label>Nazwa kategorii</mat-label>\n                        <input matInput [(ngModel)]=\"nazwa\">\n                    </mat-form-field>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <button mat-raised-button (click)=\"send()\">Dodaj</button>\n                </td>\n            </tr>\n        </table>\n\n            \n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add/addmenu/addmenu.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add/addmenu/addmenu.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div *ngIf=\"this.loginservice.user!=null\" class=\"cont\">\n        \n        <a routerLink=\"/add/czytelnik\">\n            Dodaj czytelnika\n        </a>\n        <a routerLink=\"/add/ksiazka\">\n            Dodaj Książkę\n        </a>\n        <a routerLink=\"/add/autor\">\n            Dodaj autora\n        </a>\n        <a routerLink=\"/add/kategoria\">\n            Dodaj kategorię\n        </a>\n        <a routerLink=\"/add/wydawnictwo\">\n            Dodaj wydawnictwo\n        </a>\n\n            \n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add/addpracownik/addpracownik.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add/addpracownik/addpracownik.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div *ngIf=\"this.error==true\" style=\"color:white;background-color:red;height:30px;\">\n        Błąd danych\n    </div>\n    <div *ngIf=\"this.loginservice.user.login=='root'\" class=\"cont\">\n        \n        <table>\n            <tr>\n                <td>\n                    Imię\n                </td>\n                <td>\n                    <mat-form-field class=\"example-full-width\">\n                        <mat-label>Imię</mat-label>\n                        <input matInput [(ngModel)]=\"imie\">\n                    </mat-form-field>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    Nazwisko\n                </td>\n                <td>\n                    <mat-form-field class=\"example-full-width\">\n                        <mat-label>Nazwisko</mat-label>\n                        <input matInput [(ngModel)]=\"nazwisko\">\n                    </mat-form-field>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    Hasło\n                </td>\n                <td>\n                    <mat-form-field class=\"example-full-width\">\n                        <mat-label>Hasło</mat-label>\n                        <input matInput [(ngModel)]=\"haslo\" type=\"password\">\n                    </mat-form-field>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    Wypłata\n                </td>\n                <td>\n                    <mat-form-field class=\"example-full-width\">\n                        <mat-label>Wypłata</mat-label>\n                        <input matInput [(ngModel)]=\"wyplata\" type=\"number\">\n                    </mat-form-field>\n                </td>\n            </tr>\n            <tr>\n                <td colspan=\"2\">\n                    <button mat-raised-button color=\"accent\" (click)=\"send()\">\n                        Wyślij\n                    </button>\n\n                </td>\n            </tr>\n        </table>\n\n            \n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add/addwydawnictwo/addwydawnictwo.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add/addwydawnictwo/addwydawnictwo.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div *ngIf=\"this.error==true\" style=\"color:white;background-color:red;height:30px;\">\n        Błąd danych\n    </div>\n    <div *ngIf=\"this.loginservice.user!=null\" class=\"cont\">\n        <table>\n            <tr>\n                <td>\n                    <mat-form-field class=\"example-full-width\">\n                        <mat-label>Nazwa wydawnictwa</mat-label>\n                        <input matInput [(ngModel)]=\"nazwa\">\n                    </mat-form-field>\n                </td>\n            </tr>\n            <tr>\n                <td>\n                    <button mat-raised-button (click)=\"send()\">Dodaj</button>\n                </td>\n            </tr>\n        </table>\n\n            \n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ksiazka/ksiazka.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/ksiazka/ksiazka.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div *ngIf=\"this.book!=null\">\n        <div class=\"bookgrid\">\n            <figure *ngIf=\"this.book.img_url!=null\" class=\"image\">\n                <img src=\"{{this.book.img_url}}\">\n            </figure>\n            <h2 class=\"tytul\">{{this.book.tytul}}</h2>\n\n                <div class=\"autorzy\">\n                    <a *ngFor=\"let autor of this.book.autorzy\">\n                        {{autor.imie}} {{autor.nazwisko}}\n                    </a>    \n                </div>\n\n                <h5 class=\"wyd\">Wydawnictwo: {{this.book.wydawnictwo.nazwa}}</h5>\n                <h5 class=\"ocena\">Ocena {{this.book.ocena}}</h5>\n                <h5 class=\"rok\">Rok wydania {{this.book.rok_wydania}}</h5>\n\n                <div class=\"kategorie\">\n                    <h5>Kategorie:</h5>\n                    <a *ngFor=\"let kat of this.book.kategorie\">\n                        {{kat.nazwa}}\n                    </a>\n                </div>\n\n                <p class=\"opis\">\n                    {{this.book.opis}}\n                </p>\n\n                <a class=\"edytuj\" routerLink=\"/edit/book/{{this.book.id_ksiazki}}\">\n                    <button mat-raised-button color=\"accent\" *ngIf=\"this.loginservice.user!=null\">Edytuj</button>\n                </a>\n        </div>\n    </div>\n    \n    <h2 style=\"text-align: left;\">Dostępne egzemplarze:</h2>\n    <div class=\"egzemplarze\">\n        <div class=\"\" *ngFor=\"let item of this.egzemplarze\" class=\"egzitem\">\n            <img src=\"{{item.ksiazka.img_url}}\" class=\"tinyimg\">\n            <div style=\"display:flex;justify-content: center;align-items: center;\">\n                Dostępny: {{item.wypozyczona | available}}\n            </div>\n            <a routerLink=\"/wypozycz/{{item.id_egzemplarza}}\" *ngIf=\"item.wypozyczona==0 && this.loginservice.user!=null\">\n                <button mat-raised-button color=\"primary\">Wypożycz</button>\n            </a>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <table>\n        <tr>\n            <td>\n                LOGIN\n            </td>\n            <td>\n                <input type=\"text\" [(ngModel)]=\"loginbutton\">\n            </td>\n        </tr>\n        <tr>\n            <td>\n                HASŁO\n            </td>\n            <td>\n                <input type=\"password\" [(ngModel)]=\"passwordbutton\">\n            </td>\n        </tr>\n    </table>\n    <button mat-flat-button (click)=\"loguj()\">Loguj</button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modifybook/modifybook.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modifybook/modifybook.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div *ngIf=\"this.book!=null\">\n        <div class=\"bookgrid\">\n            <h2>Edycja książki</h2>\n            <figure *ngIf=\"this.book.img_url!=null\" class=\"image\">\n                <img src=\"{{this.book.img_url}}\">\n            </figure>\n\n            \n            \n            <div class=\"desc\">\n                <div class=\"egz\">\n                    <h3>Dodaj egzemplarze</h3>\n\n                    <mat-form-field class=\"example-full-width\">\n                        <mat-label>Ilość egzemplarzy</mat-label>\n                        <input matInput [(ngModel)]=\"egz_num\" type=\"number\">\n                    </mat-form-field>\n\n                    <button mat-raised-button color=\"primary\" (click)=\"add_egz()\">\n                        Dodaj\n                    </button>\n                </div>\n            </div>\n\n            <hr/>\n\n            <div class=\"desc\">\n                <mat-form-field class=\"example-full-width\">\n                    <mat-label>Tytuł</mat-label>\n                    <input matInput [(ngModel)]=\"this.book.tytul\">\n                </mat-form-field>\n                <mat-form-field class=\"example-full-width\">\n                    <mat-label>Opis</mat-label>\n                    <input matInput [(ngModel)]=\"this.book.opis\">\n                </mat-form-field>\n                <mat-form-field class=\"example-full-width\">\n                    <mat-label>ocena</mat-label>\n                    <input matInput [(ngModel)]=\"this.book.ocena\">\n                </mat-form-field>\n                <mat-form-field class=\"example-full-width\">\n                    <mat-label>Rok wydania</mat-label>\n                    <input matInput [(ngModel)]=\"this.book.rok_wydania\">\n                </mat-form-field>\n                <mat-form-field class=\"example-full-width\">\n                    <mat-label>IMG URL</mat-label>\n                    <input matInput [(ngModel)]=\"this.book.img_url\">\n                </mat-form-field>\n            </div>\n            \n\n            <hr/>\n            <div class=\"desc\">\n                <div class=\"wyd\">\n                    <div>\n                        <h3>Wydawnictwo:</h3>\n                        <div>\n                            {{this.book.wydawnictwo.nazwa}}\n                        </div>\n                            \n                    </div>\n                    <div>\n                        <h3>Zmień wydawnictwo</h3>\n                        <mat-form-field>\n                            <mat-label>Wydawnictwo</mat-label>\n                            <mat-select>\n                              <mat-option *ngFor=\"let wyd of all_wydawnictwa\" [value]=\"wyd\" (click)=\"change_wyd(wyd)\">\n                                {{wyd.nazwa}}\n                              </mat-option>\n                            </mat-select>\n                          </mat-form-field>\n                    </div>\n                </div>\n                \n            </div>\n\n            <hr/>\n            <div class=\"desc\">\n                <div class=\"wyd\">\n                    <div>\n                        <h3>Autorzy:</h3>\n                        <div *ngFor=\"let autor of this.book.autorzy\" style=\"width:100%\">\n                            {{autor.imie}} {{autor.nazwisko}}\n                            <button mat-raised-button (click)=\"rem_aut(autor)\">\n                                Usuń\n                            </button>\n                        </div>\n                            \n                    </div>\n                    <div>\n                        <h3>Dodaj Autora</h3>\n                        <mat-form-field>\n                            <mat-label>Autor</mat-label>\n                            <mat-select>\n                              <mat-option *ngFor=\"let autor of all_authors\" [value]=\"autor\" (click)=\"add_autor(autor)\">\n                                {{autor.imie}} {{autor.nazwisko}}\n                              </mat-option>\n                            </mat-select>\n                          </mat-form-field>\n                    </div>\n                </div>\n                \n            </div>\n\n            <hr/>\n\n            <div class=\"desc\">\n                <div class=\"wyd\">\n                    <div>\n                        <h3>Kategorie:</h3>\n                        <div *ngFor=\"let kategoria of this.book.kategorie\" style=\"width:100%\">\n                            {{kategoria.nazwa}}\n                            <button mat-raised-button (click)=\"rem_kat(kategoria)\">\n                                Usuń\n                            </button>\n                        </div>\n                            \n                    </div>\n                    <div>\n                        <h3>Dodaj Kategorię</h3>\n                        <mat-form-field>\n                            <mat-label>Kategoria</mat-label>\n                            <mat-select>\n                              <mat-option *ngFor=\"let kat of all_kategorie\" [value]=\"kat\" (click)=\"add_kat(kat)\">\n                                {{kat.nazwa}}\n                              </mat-option>\n                            </mat-select>\n                          </mat-form-field>\n                    </div>\n                </div>\n                \n            </div>\n            \n            <hr/>\n             <div class=\"desc\">\n                 <button mat-raised-button color=\"warn\" (click)=\"send()\">\n                    Zapisz zmiany\n                 </button>\n             </div>\n\n\n\n            \n\n        </div>\n    </div>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav>\n    <ul>\n        <li *ngIf=\"this.loginservice.user==null\">\n            <a routerLink=\"/login\">\n                <i class=\"fas fa-user\"></i>\n                <span>Login</span>\n            </a>\n        </li>\n        \n        \n        \n        <li>\n            <a routerLink=\"/szukaj\">\n                <i class=\"fas fa-search\"></i>\n                <span>Szukaj</span>\n            </a>\n        </li>\n        <li *ngIf=\"this.loginservice.user!=null\">\n            <a routerLink=\"/wypozyczenia\">\n                <i class=\"fas fa-book-reader\"></i>\n                <span>Wypozyczenia</span>\n            </a>\n        </li>\n        <li *ngIf=\"this.loginservice.user!=null\">\n            <a routerLink=\"/dodaj\">\n                <i class=\"fas fa-plus\"></i>\n                <span>Dodaj</span>\n            </a>\n        </li>\n        <!--\n        <li>\n            <a routerLink=\"\">\n                <i class=\"fas fa-edit\"></i>\n                <span>Modyfikuj</span>\n            </a>\n        </li>\n        -->\n        <ng-container *ngIf=\"this.loginservice.user!=null\">\n            <li *ngIf=\"this.loginservice.user.login=='root'\">\n                <a routerLink=\"pracownicy\">\n                    <i class=\"fas fa-user-circle\"></i>\n                    <span>Pracownicy</span>\n                </a>\n            </li>\n        </ng-container>\n        \n        \n        <li *ngIf=\"this.loginservice.user!=null\">\n            <a (click)=\"wyloguj()\" routerLink=''>\n                <i class=\"fas fa-sign-out-alt\"></i>\n                <span>Wyloguj</span>\n            </a>\n        </li>\n    </ul>\n    \n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pracownicy/pracownicy.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pracownicy/pracownicy.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div *ngIf=\"this.loginservice.user.login=='root'\" class=\"cont\">\n        <h2>Informacje o zarobkach:</h2>\n        <table *ngIf=\"this.zarobki!=null\">\n            <tr>\n                <th>\n                    Łącznie pensje:\n                </th>\n                <td>\n                    {{this.zarobki.suma}}zł\n                </td>\n            </tr>\n            <tr>\n                <th>\n                    Srednia zarobków:\n                </th>\n                <td>\n                    {{this.zarobki.avg}}zł\n                </td>\n            </tr>\n            <tr>\n                <th>\n                    Mediana zarobków:\n                </th>\n                <td>\n                    {{this.zarobki.mediana}}zł\n                </td>\n            </tr>\n            <tr>\n                <th>\n                    Odchylenie standardowe:\n                </th>\n                <td>\n                    {{+this.zarobki.odchylenie | number: '1.2-2'}}zł\n                </td>\n            </tr>\n        </table>\n        <h2>Pracownicy:</h2>\n\n        <table>\n            <tr>\n                <th>\n                    Imię\n                </th>\n                <th>\n                    Nazwisko\n                </th>\n                <th>\n                    Login\n                </th>\n                <th>\n                    Wypłata\n                </th>\n            </tr>\n        \n        <ng-container *ngIf=\"pracownicy!=null\" class=\"pracownicy\">\n            <tr *ngFor=\"let item of pracownicy\">\n                <td>\n                    {{item.imie}} \n                </td>\n                <td>\n                    {{item.nazwisko}}\n                </td>\n                <td>\n                    {{item.login}}\n                </td>\n                <td>\n                    {{item.wyplata}}\n                </td>\n                \n            </tr>\n        </ng-container>\n            <tr>\n                <td colspan=\"4\">\n                    <button mat-raised-button routerLink=\"/add/pracownik\">\n                        Dodaj Pracownika\n                    </button>\n                </td>\n            </tr>\n        \n        </table>\n            \n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/wypozyczenia/wypozyczenia.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/wypozyczenia/wypozyczenia.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div *ngIf=\"this.loginservice.user!=null\" class=\"cont\">\n        <div *ngIf=\"this.wypozyczenia==null\" class=\"wait\">\n            <i class=\"fas fa-circle-notch fa-spin\"></i>\n        </div>\n        <div *ngIf=\"this.wypozyczenia!=null\">\n              <table class='wypozyczenia'>\n                  <tr>\n                      <th>\n                          Data Wypożyczenia\n                      </th>\n                      <th>\n                          Czytelnik\n                      </th>\n                      <th>\n                          Książka\n                      </th>\n                      <th>\n                          Oddano\n                      </th>\n                  </tr>\n                  <tr *ngFor=\"let item of wypozyczenia\" (click)='show(item)'>\n                      <td>\n                          {{item.data_wypozyczenia}}\n                      </td>\n                      <td>{{item.czytelnik.imie}} {{item.czytelnik.nazwisko}}</td>\n                      <td>{{item.egzemplarz.ksiazka.tytul}}</td>\n                      <td>{{item.oddano | oddano}}</td>\n\n                  </tr>\n              </table>\n\n        </div>\n        <div *ngIf=\"this.activeitem!=null\" class=\"activeitem\">\n            <table>\n                <tr>\n                    <td>\n                        <figure>\n                            <img src='{{activeitem.egzemplarz.ksiazka.img_url}}'>\n                        </figure>\n                    </td>\n                    <td>\n                        {{activeitem.egzemplarz.ksiazka.tytul}}\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        Czytelnik:\n                    </td>\n                    <td>\n                        {{activeitem.czytelnik.imie}} {{activeitem.czytelnik.nazwisko}}\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        Pracownik:\n                    </td>\n                    <td>\n                        {{activeitem.pracownik.imie}} {{activeitem.pracownik.nazwisko}}\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        Data wypożyczenia:\n                    </td>\n                    <td>\n                        {{activeitem.data_wypozyczenia}}\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        Data zwrotu:\n                    </td>\n                    <td>\n                        {{activeitem.data_zwrotu}}    \n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        Ilość prolongacji:\n                    </td>\n                    <td>\n                        {{activeitem.ilosc_prolongacji}}\n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        Oddano:\n                    </td>\n                    <td>\n                        {{activeitem.oddano | oddano}}\n                    </td>\n                </tr>\n                \n                <tr>\n                    <td>\n                      \n                    </td>\n                    <td>\n                         \n                    </td>\n                </tr>\n                <tr>\n                    <td>\n                        \n                    </td>\n                    <td>\n                        <button mat-flat-button color='primary' (click)=\"prolonguj(activeitem)\" *ngIf=\"activeitem.ilosc_prolongacji<3 && activeitem.oddano==0\">\n                            Prolonguj\n                        </button>\n                        <button mat-flat-button color='accent' (click)=\"oddaj(activeitem)\" *ngIf=\"activeitem.oddano==0\">\n                            Oddaj Książkę\n                        </button>\n                    </td>\n                </tr>\n            </table>\n            \n\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/wypozyczenie/wypozyczenie.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/wypozyczenie/wypozyczenie.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"this.loginservice.user!=null\">\n    <div *ngIf=\"this.error==true\" class=\"error\"><h2>Nieprawidłowy Czytelnik</h2></div>\n    <div *ngIf=\"this.error2==true\" class=\"error\"><h2>Nie udało się wypożyczyć</h2></div>\n    <div class=\"formularz\">\n        <div *ngIf=\"this.egzemplarz!=null\" class=\"ksiazka\">\n            <figure>\n                <img src=\"{{this.egzemplarz.ksiazka.img_url}}\">\n            </figure>\n            <div>\n                <h2>{{this.egzemplarz.ksiazka.tytul}}</h2>\n                Dostępny: {{this.egzemplarz.wypozyczona | available}}\n            </div>\n            \n        </div>\n\n        <div *ngIf=\"this.czytelnik!=null\" style=\"display:flex;flex-direction: row;width:100%;justify-content: center;\">\n            <div class=\"czytelnik\">\n                <h2 style=\"width:100%\">Czytelnik:</h2>\n\n                <mat-form-field>\n                        <mat-label>Czytelnik</mat-label>\n                    <input type=\"text\" matInput [matAutocomplete]=\"auto\" [(ngModel)]=\"czytelnik\" (keyup)=\"czyt()\" placeholder=\"Czytelnik\">\n                </mat-form-field>\n                \n    \n                  \n                  <mat-autocomplete #auto=\"matAutocomplete\">\n                    <mat-option *ngFor=\"let option of this.czytinput\" [value]=\"option.id_czytelnika\" (click)=\"czyt()\">{{option.imie}} {{option.nazwisko}}</mat-option>\n                  </mat-autocomplete>\n            </div>\n            <div *ngIf=\"this.czytelnikout!=null\">\n                <pre>\n                    Imię:{{this.czytelnikout.imie}}\n                    Nazwisko:{{this.czytelnikout.nazwisko}}\n                    Telefon:{{this.czytelnikout.telefon}}\n                    Email:{{this.czytelnikout.email}}\n                </pre>\n                \n            </div>\n            \n\n        </div>\n        \n    </div>\n    \n    <button mat-flat-button (click)=\"wyslij()\">Wypożycz</button>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/wyszukiwarka/wyszukiwarka.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/wyszukiwarka/wyszukiwarka.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n    <div class=\"searchcontainer\">\n        <input class=\"search\" [(ngModel)]=\"query\" (change)=\"search()\">\n        <button (click)=\"search()\">Szukaj</button>\n    </div>\n\n    <!--<mat-slider min=\"1\" max=\"100\" step=\"1\" value=\"1\"></mat-slider>-->\n\n    <div class=\"top\" *ngIf=\"this.books==null\" >\n        <h1>Top książek</h1>\n        <div class=\"searchresults\">\n            <div *ngFor=\"let item of this.topbooks\" class=\"bookgrid\">\n\n                <figure *ngIf=\"item.img_url!=null\" class=\"image\">\n                    <img src=\"{{item.img_url}}\">\n                </figure>\n\n                <h2 class=\"tytul\">{{item.tytul}}</h2>\n\n                <div class=\"autorzy\">\n                    <a *ngFor=\"let autor of item.autorzy\">\n                        {{autor.imie}} {{autor.nazwisko}}\n                    </a>    \n                </div>\n\n                <h5 class=\"wyd\">{{item.wydawnictwo.nazwa}}</h5>\n                <h5 class=\"ocena\">Ocena {{item.ocena}}</h5>\n                <h5 class=\"rok\">Rok wydania {{item.rok_wydania}}</h5>\n\n                <div class=\"kategorie\">\n                    <h5>Kategorie:</h5>\n                    <a *ngFor=\"let kat of item.kategorie\">\n                        {{kat.nazwa}}\n                    </a>\n                </div>\n\n                <p class=\"opis\">\n                    {{item.opis}}\n                </p>\n\n                <a routerLink=\"/ksiazka/{{item.id_ksiazki}}\" class=\"wypozycz\">\n                    <button mat-raised-button color=\"primary\">Egzemplarze</button>\n                </a>\n                <a class=\"edytuj\" routerLink=\"/edit/book/{{item.id_ksiazki}}\">\n                    <button mat-raised-button color=\"accent\" *ngIf=\"this.loginservice.user!=null\">Edytuj</button>\n                </a>\n                \n                \n\n\n            </div>\n        </div>\n    </div>\n    \n    <div *ngIf=\"this.books!=null\" class=\"results\">\n        <h1>Wyniki wyszukiwania:</h1>\n        <div class=\"searchresults\">\n            <div *ngFor=\"let item of this.books\" class=\"bookgrid\">\n\n                <figure *ngIf=\"item.img_url!=null\" class=\"image\">\n                    <img src=\"{{item.img_url}}\">\n                </figure>\n\n                <h2 class=\"tytul\">{{item.tytul}}</h2>\n\n                <div class=\"autorzy\">\n                    <a *ngFor=\"let autor of item.autorzy\">\n                        {{autor.imie}} {{autor.nazwisko}}\n                    </a>    \n                </div>\n\n                <h5 class=\"wyd\">{{item.wydawnictwo.nazwa}}</h5>\n                <h5 class=\"ocena\">Ocena {{item.ocena}}</h5>\n                <h5 class=\"rok\">Rok wydania {{item.rok_wydania}}</h5>\n\n                <div class=\"kategorie\">\n                    <h5>Kategorie:</h5>\n                    <a *ngFor=\"let kat of item.kategorie\">\n                        {{kat.nazwa}}\n                    </a>\n                </div>\n\n                <p class=\"opis\">\n                    {{item.opis}}\n                </p>\n\n                <a routerLink=\"/ksiazka/{{item.id_ksiazki}}\" class=\"wypozycz\">\n                    <button mat-raised-button color=\"primary\">Egzemplarze</button>\n                </a>\n                <a class=\"edytuj\" routerLink=\"/edit/book/{{item.id_ksiazki}}\">\n                    <button mat-raised-button color=\"accent\" *ngIf=\"this.loginservice.user!=null\">Edytuj</button>\n                </a>\n                \n                \n\n\n            </div>\n        </div>\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

const __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

const __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_wyszukiwarka_wyszukiwarka_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/wyszukiwarka/wyszukiwarka.component */ "./src/app/components/wyszukiwarka/wyszukiwarka.component.ts");
/* harmony import */ var _components_ksiazka_ksiazka_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ksiazka/ksiazka.component */ "./src/app/components/ksiazka/ksiazka.component.ts");
/* harmony import */ var _components_wypozyczenie_wypozyczenie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/wypozyczenie/wypozyczenie.component */ "./src/app/components/wypozyczenie/wypozyczenie.component.ts");
/* harmony import */ var _components_wypozyczenia_wypozyczenia_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/wypozyczenia/wypozyczenia.component */ "./src/app/components/wypozyczenia/wypozyczenia.component.ts");
/* harmony import */ var _components_add_addmenu_addmenu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/add/addmenu/addmenu.component */ "./src/app/components/add/addmenu/addmenu.component.ts");
/* harmony import */ var _components_add_addczytelnik_addczytelnik_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/add/addczytelnik/addczytelnik.component */ "./src/app/components/add/addczytelnik/addczytelnik.component.ts");
/* harmony import */ var _components_add_addbook_addbook_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/add/addbook/addbook.component */ "./src/app/components/add/addbook/addbook.component.ts");
/* harmony import */ var _components_add_addautor_addautor_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/add/addautor/addautor.component */ "./src/app/components/add/addautor/addautor.component.ts");
/* harmony import */ var _components_add_addkategoria_addkategoria_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/add/addkategoria/addkategoria.component */ "./src/app/components/add/addkategoria/addkategoria.component.ts");
/* harmony import */ var _components_add_addwydawnictwo_addwydawnictwo_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/add/addwydawnictwo/addwydawnictwo.component */ "./src/app/components/add/addwydawnictwo/addwydawnictwo.component.ts");
/* harmony import */ var _components_modifybook_modifybook_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/modifybook/modifybook.component */ "./src/app/components/modifybook/modifybook.component.ts");
/* harmony import */ var _components_pracownicy_pracownicy_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/pracownicy/pracownicy.component */ "./src/app/components/pracownicy/pracownicy.component.ts");
/* harmony import */ var _components_add_addpracownik_addpracownik_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/add/addpracownik/addpracownik.component */ "./src/app/components/add/addpracownik/addpracownik.component.ts");

















var routes = [
    { path: '', component: _components_wyszukiwarka_wyszukiwarka_component__WEBPACK_IMPORTED_MODULE_4__["WyszukiwarkaComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'ksiazka/:id', component: _components_ksiazka_ksiazka_component__WEBPACK_IMPORTED_MODULE_5__["KsiazkaComponent"] },
    { path: 'wypozycz/:id', component: _components_wypozyczenie_wypozyczenie_component__WEBPACK_IMPORTED_MODULE_6__["WypozyczenieComponent"] },
    { path: 'szukaj', component: _components_wyszukiwarka_wyszukiwarka_component__WEBPACK_IMPORTED_MODULE_4__["WyszukiwarkaComponent"] },
    { path: 'wypozyczenia', component: _components_wypozyczenia_wypozyczenia_component__WEBPACK_IMPORTED_MODULE_7__["WypozyczeniaComponent"] },
    { path: 'dodaj', component: _components_add_addmenu_addmenu_component__WEBPACK_IMPORTED_MODULE_8__["AddmenuComponent"] },
    { path: 'add/czytelnik', component: _components_add_addczytelnik_addczytelnik_component__WEBPACK_IMPORTED_MODULE_9__["AddczytelnikComponent"] },
    { path: 'add/ksiazka', component: _components_add_addbook_addbook_component__WEBPACK_IMPORTED_MODULE_10__["AddbookComponent"] },
    { path: 'add/autor', component: _components_add_addautor_addautor_component__WEBPACK_IMPORTED_MODULE_11__["AddautorComponent"] },
    { path: 'add/kategoria', component: _components_add_addkategoria_addkategoria_component__WEBPACK_IMPORTED_MODULE_12__["AddkategoriaComponent"] },
    { path: 'add/wydawnictwo', component: _components_add_addwydawnictwo_addwydawnictwo_component__WEBPACK_IMPORTED_MODULE_13__["AddwydawnictwoComponent"] },
    { path: 'edit/book/:id', component: _components_modifybook_modifybook_component__WEBPACK_IMPORTED_MODULE_14__["ModifybookComponent"] },
    { path: 'pracownicy', component: _components_pracownicy_pracownicy_component__WEBPACK_IMPORTED_MODULE_15__["PracownicyComponent"] },
    { path: 'add/pracownik', component: _components_add_addpracownik_addpracownik_component__WEBPACK_IMPORTED_MODULE_16__["AddpracownikComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main {\r\n    position: relative;\r\n    margin-left: 5rem;\r\n    text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tbGVmdDogNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'biblioteka';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_wyszukiwarka_wyszukiwarka_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/wyszukiwarka/wyszukiwarka.component */ "./src/app/components/wyszukiwarka/wyszukiwarka.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _components_ksiazka_ksiazka_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/ksiazka/ksiazka.component */ "./src/app/components/ksiazka/ksiazka.component.ts");
/* harmony import */ var _pipes_available_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pipes/available.pipe */ "./src/app/pipes/available.pipe.ts");
/* harmony import */ var _components_wypozyczenie_wypozyczenie_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/wypozyczenie/wypozyczenie.component */ "./src/app/components/wypozyczenie/wypozyczenie.component.ts");
/* harmony import */ var _components_wypozyczenia_wypozyczenia_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/wypozyczenia/wypozyczenia.component */ "./src/app/components/wypozyczenia/wypozyczenia.component.ts");
/* harmony import */ var _pipes_oddano_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/oddano.pipe */ "./src/app/pipes/oddano.pipe.ts");
/* harmony import */ var _components_add_addczytelnik_addczytelnik_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/add/addczytelnik/addczytelnik.component */ "./src/app/components/add/addczytelnik/addczytelnik.component.ts");
/* harmony import */ var _components_add_addmenu_addmenu_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/add/addmenu/addmenu.component */ "./src/app/components/add/addmenu/addmenu.component.ts");
/* harmony import */ var _components_add_addbook_addbook_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/add/addbook/addbook.component */ "./src/app/components/add/addbook/addbook.component.ts");
/* harmony import */ var _components_add_addautor_addautor_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/add/addautor/addautor.component */ "./src/app/components/add/addautor/addautor.component.ts");
/* harmony import */ var _components_add_addkategoria_addkategoria_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/add/addkategoria/addkategoria.component */ "./src/app/components/add/addkategoria/addkategoria.component.ts");
/* harmony import */ var _components_add_addwydawnictwo_addwydawnictwo_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/add/addwydawnictwo/addwydawnictwo.component */ "./src/app/components/add/addwydawnictwo/addwydawnictwo.component.ts");
/* harmony import */ var _components_modifybook_modifybook_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/modifybook/modifybook.component */ "./src/app/components/modifybook/modifybook.component.ts");
/* harmony import */ var _components_pracownicy_pracownicy_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/pracownicy/pracownicy.component */ "./src/app/components/pracownicy/pracownicy.component.ts");
/* harmony import */ var _components_add_addpracownik_addpracownik_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/add/addpracownik/addpracownik.component */ "./src/app/components/add/addpracownik/addpracownik.component.ts");






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_wyszukiwarka_wyszukiwarka_component__WEBPACK_IMPORTED_MODULE_9__["WyszukiwarkaComponent"],
                _components_ksiazka_ksiazka_component__WEBPACK_IMPORTED_MODULE_16__["KsiazkaComponent"],
                _pipes_available_pipe__WEBPACK_IMPORTED_MODULE_17__["AvailablePipe"],
                _components_wypozyczenie_wypozyczenie_component__WEBPACK_IMPORTED_MODULE_18__["WypozyczenieComponent"],
                _components_wypozyczenia_wypozyczenia_component__WEBPACK_IMPORTED_MODULE_19__["WypozyczeniaComponent"],
                _pipes_oddano_pipe__WEBPACK_IMPORTED_MODULE_20__["OddanoPipe"],
                _components_add_addczytelnik_addczytelnik_component__WEBPACK_IMPORTED_MODULE_21__["AddczytelnikComponent"],
                _components_add_addmenu_addmenu_component__WEBPACK_IMPORTED_MODULE_22__["AddmenuComponent"],
                _components_add_addbook_addbook_component__WEBPACK_IMPORTED_MODULE_23__["AddbookComponent"],
                _components_add_addautor_addautor_component__WEBPACK_IMPORTED_MODULE_24__["AddautorComponent"],
                _components_add_addkategoria_addkategoria_component__WEBPACK_IMPORTED_MODULE_25__["AddkategoriaComponent"],
                _components_add_addwydawnictwo_addwydawnictwo_component__WEBPACK_IMPORTED_MODULE_26__["AddwydawnictwoComponent"],
                _components_modifybook_modifybook_component__WEBPACK_IMPORTED_MODULE_27__["ModifybookComponent"],
                _components_pracownicy_pracownicy_component__WEBPACK_IMPORTED_MODULE_28__["PracownicyComponent"],
                _components_add_addpracownik_addpracownik_component__WEBPACK_IMPORTED_MODULE_29__["AddpracownikComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_14__["MatSliderModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__["MatAutocompleteModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/add/addautor/addautor.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/add/addautor/addautor.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    width:95%;\r\n    min-height:500px;\r\n    background-color:rgba(5, 5, 5, 0.7);\r\n    margin:auto;\r\n    position: relative;\r\n    padding-top:100px;\r\n    color:black;\r\n    font-family: 'Roboto';\r\n\r\n}\r\n.cont{\r\n    display:flex;\r\n    justify-content: center;\r\n    \r\n}\r\n.cont table{\r\n    padding:30px;\r\n    background-color:rgba(245, 222, 179, 0.822);\r\n    border-radius: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQvYWRkYXV0b3IvYWRkYXV0b3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxxQkFBcUI7O0FBRXpCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCOztBQUUzQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDJDQUEyQztJQUMzQyxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC9hZGRhdXRvci9hZGRhdXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOjk1JTtcclxuICAgIG1pbi1oZWlnaHQ6NTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNSwgNSwgNSwgMC43KTtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy10b3A6MTAwcHg7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuXHJcbn1cclxuLmNvbnR7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG59XHJcbi5jb250IHRhYmxle1xyXG4gICAgcGFkZGluZzozMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NSwgMjIyLCAxNzksIDAuODIyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/add/addautor/addautor.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/add/addautor/addautor.component.ts ***!
  \***************************************************************/
/*! exports provided: AddautorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddautorComponent", function() { return AddautorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loginservice.service */ "./src/app/services/loginservice.service.ts");
/* harmony import */ var src_app_services_insert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/insert.service */ "./src/app/services/insert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AddautorComponent = /** @class */ (function () {
    function AddautorComponent(loginservice, insertservice, router) {
        this.loginservice = loginservice;
        this.insertservice = insertservice;
        this.router = router;
        this.imie = null;
        this.nazwisko = null;
        this.error = false;
    }
    AddautorComponent.prototype.ngOnInit = function () {
    };
    AddautorComponent.prototype.send = function () {
        var _this = this;
        if (this.imie != null && this.nazwisko != null) {
            this.error = false;
            this.insertservice.add_autor(this.imie, this.nazwisko).subscribe(function (ret) {
                console.log(ret);
                _this.router.navigate(['/dodaj']);
            });
        }
        else {
            this.error = true;
        }
    };
    AddautorComponent.ctorParameters = function () { return [
        { type: src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_2__["LoginserviceService"] },
        { type: src_app_services_insert_service__WEBPACK_IMPORTED_MODULE_3__["InsertService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AddautorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addautor',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addautor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add/addautor/addautor.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addautor.component.css */ "./src/app/components/add/addautor/addautor.component.css")).default]
        })
    ], AddautorComponent);
    return AddautorComponent;
}());



/***/ }),

/***/ "./src/app/components/add/addbook/addbook.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/add/addbook/addbook.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    width:95%;\r\n    min-height:500px;\r\n    background-color:rgba(5, 5, 5, 0.7);\r\n    margin:auto;\r\n    position: relative;\r\n    padding-top:100px;\r\n    color:black;\r\n    font-family: 'Roboto';\r\n\r\n}\r\n.cont{\r\n    display:flex;\r\n    justify-content: center;\r\n    \r\n}\r\n.cont table{\r\n    padding:30px;\r\n    background-color:rgba(245, 222, 179, 0.822);\r\n    border-radius: 10px;\r\n}\r\n.wydawnictwa a{\r\n    font-weight: lighter;\r\n    font-style: italic;\r\n}\r\n.wydawnictwa a:hover{\r\n    background-color:red;\r\n    cursor:pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQvYWRkYm9vay9hZGRib29rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLG1DQUFtQztJQUNuQyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gscUJBQXFCOztBQUV6QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHVCQUF1Qjs7QUFFM0I7QUFDQTtJQUNJLFlBQVk7SUFDWiwyQ0FBMkM7SUFDM0MsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkL2FkZGJvb2svYWRkYm9vay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOjk1JTtcclxuICAgIG1pbi1oZWlnaHQ6NTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNSwgNSwgNSwgMC43KTtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy10b3A6MTAwcHg7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuXHJcbn1cclxuLmNvbnR7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG59XHJcbi5jb250IHRhYmxle1xyXG4gICAgcGFkZGluZzozMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NSwgMjIyLCAxNzksIDAuODIyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi53eWRhd25pY3R3YSBhe1xyXG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuLnd5ZGF3bmljdHdhIGE6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/add/addbook/addbook.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/add/addbook/addbook.component.ts ***!
  \*************************************************************/
/*! exports provided: AddbookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddbookComponent", function() { return AddbookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loginservice.service */ "./src/app/services/loginservice.service.ts");
/* harmony import */ var src_app_services_booksservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/booksservice.service */ "./src/app/services/booksservice.service.ts");
/* harmony import */ var src_app_services_insert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/insert.service */ "./src/app/services/insert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AddbookComponent = /** @class */ (function () {
    function AddbookComponent(loginservice, booksservice, insertservice, router) {
        this.loginservice = loginservice;
        this.booksservice = booksservice;
        this.insertservice = insertservice;
        this.router = router;
        this.wydawnictwa = null;
        this.wydawnictwo = null;
        this.tytul = null;
        this.opis = null;
        this.ocena = null;
        this.rok_wydania = null;
        this.img_url = '';
        this.error = false;
    }
    AddbookComponent.prototype.ngOnInit = function () {
        this.getwyd();
    };
    AddbookComponent.prototype.getwyd = function () {
        var _this = this;
        this.booksservice.getallwydawnictwa().subscribe(function (ret) {
            _this.wydawnictwa = ret;
        });
    };
    AddbookComponent.prototype.selectwyd = function (item) {
        this.wydawnictwo = item;
    };
    AddbookComponent.prototype.send = function () {
        if (this.tytul != null && this.opis != null && this.rok_wydania != null && this.ocena != null && this.wydawnictwo != null) {
            this.error = false;
            this.insertservice.add_ksiazka(this.tytul, this.opis, this.ocena, this.rok_wydania, this.wydawnictwo, this.img_url).subscribe(function (ret) {
                console.log(ret);
            });
            this.router.navigate(['/add']);
        }
        else {
            this.error = true;
        }
    };
    AddbookComponent.ctorParameters = function () { return [
        { type: src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_2__["LoginserviceService"] },
        { type: src_app_services_booksservice_service__WEBPACK_IMPORTED_MODULE_3__["BooksserviceService"] },
        { type: src_app_services_insert_service__WEBPACK_IMPORTED_MODULE_4__["InsertService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AddbookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addbook',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addbook.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add/addbook/addbook.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addbook.component.css */ "./src/app/components/add/addbook/addbook.component.css")).default]
        })
    ], AddbookComponent);
    return AddbookComponent;
}());



/***/ }),

/***/ "./src/app/components/add/addczytelnik/addczytelnik.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/add/addczytelnik/addczytelnik.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    width:95%;\r\n    min-height:500px;\r\n    background-color:rgba(5, 5, 5, 0.7);\r\n    margin:auto;\r\n    position: relative;\r\n    padding-top:100px;\r\n    color:black;\r\n    font-family: 'Roboto';\r\n    font-weight: bold;\r\n}\r\n.cont{\r\n    display:flex;\r\n    justify-content: center;\r\n}\r\n.cont table{\r\n    padding:30px;\r\n    background-color:rgba(245, 222, 179, 0.822);\r\n    border-radius: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQvYWRkY3p5dGVsbmlrL2FkZGN6eXRlbG5pay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULGdCQUFnQjtJQUNoQixtQ0FBbUM7SUFDbkMsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFlBQVk7SUFDWiwyQ0FBMkM7SUFDM0MsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQvYWRkY3p5dGVsbmlrL2FkZGN6eXRlbG5pay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOjk1JTtcclxuICAgIG1pbi1oZWlnaHQ6NTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNSwgNSwgNSwgMC43KTtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy10b3A6MTAwcHg7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5jb250e1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmNvbnQgdGFibGV7XHJcbiAgICBwYWRkaW5nOjMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQ1LCAyMjIsIDE3OSwgMC44MjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/add/addczytelnik/addczytelnik.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/add/addczytelnik/addczytelnik.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddczytelnikComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddczytelnikComponent", function() { return AddczytelnikComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loginservice.service */ "./src/app/services/loginservice.service.ts");
/* harmony import */ var src_app_services_insert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/insert.service */ "./src/app/services/insert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AddczytelnikComponent = /** @class */ (function () {
    function AddczytelnikComponent(loginservice, insertservice, router) {
        this.loginservice = loginservice;
        this.insertservice = insertservice;
        this.router = router;
        this.imie = null;
        this.nazwisko = null;
        this.telefon = null;
        this.email = null;
        this.error = false;
    }
    AddczytelnikComponent.prototype.ngOnInit = function () {
    };
    AddczytelnikComponent.prototype.send = function () {
        var _this = this;
        if (this.imie != null && this.nazwisko != null && this.telefon != null && this.email != null) {
            this.error = false;
            this.insertservice.add_czytelnik(this.imie, this.nazwisko, this.telefon, this.email).subscribe(function (ret) {
                console.log(ret);
                _this.router.navigate(['/dodaj']);
            });
        }
        else {
            this.error = true;
        }
    };
    AddczytelnikComponent.ctorParameters = function () { return [
        { type: src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_2__["LoginserviceService"] },
        { type: src_app_services_insert_service__WEBPACK_IMPORTED_MODULE_3__["InsertService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AddczytelnikComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addczytelnik',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addczytelnik.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add/addczytelnik/addczytelnik.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addczytelnik.component.css */ "./src/app/components/add/addczytelnik/addczytelnik.component.css")).default]
        })
    ], AddczytelnikComponent);
    return AddczytelnikComponent;
}());



/***/ }),

/***/ "./src/app/components/add/addkategoria/addkategoria.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/add/addkategoria/addkategoria.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    width:95%;\r\n    min-height:500px;\r\n    background-color:rgba(5, 5, 5, 0.7);\r\n    margin:auto;\r\n    position: relative;\r\n    padding-top:100px;\r\n    color:black;\r\n    font-family: 'Roboto';\r\n\r\n}\r\n.cont{\r\n    display:flex;\r\n    justify-content: center;\r\n    \r\n}\r\n.cont table{\r\n    padding:30px;\r\n    background-color:rgba(245, 222, 179, 0.822);\r\n    border-radius: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQvYWRka2F0ZWdvcmlhL2FkZGthdGVnb3JpYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULGdCQUFnQjtJQUNoQixtQ0FBbUM7SUFDbkMsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLHFCQUFxQjs7QUFFekI7QUFDQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7O0FBRTNCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osMkNBQTJDO0lBQzNDLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkL2FkZGthdGVnb3JpYS9hZGRrYXRlZ29yaWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICB3aWR0aDo5NSU7XHJcbiAgICBtaW4taGVpZ2h0OjUwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDUsIDUsIDUsIDAuNyk7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctdG9wOjEwMHB4O1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcblxyXG59XHJcbi5jb250e1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG4uY29udCB0YWJsZXtcclxuICAgIHBhZGRpbmc6MzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyNDUsIDIyMiwgMTc5LCAwLjgyMik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/add/addkategoria/addkategoria.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/add/addkategoria/addkategoria.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddkategoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddkategoriaComponent", function() { return AddkategoriaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loginservice.service */ "./src/app/services/loginservice.service.ts");
/* harmony import */ var src_app_services_insert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/insert.service */ "./src/app/services/insert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AddkategoriaComponent = /** @class */ (function () {
    function AddkategoriaComponent(loginservice, insertservice, router) {
        this.loginservice = loginservice;
        this.insertservice = insertservice;
        this.router = router;
        this.nazwa = null;
        this.error = false;
    }
    AddkategoriaComponent.prototype.ngOnInit = function () {
    };
    AddkategoriaComponent.prototype.send = function () {
        var _this = this;
        if (this.nazwa != null) {
            this.error = false;
            this.insertservice.add_kategoria(this.nazwa).subscribe(function (ret) {
                console.log(ret);
                _this.router.navigate(['/dodaj']);
            });
        }
        else {
            this.error = true;
        }
    };
    AddkategoriaComponent.ctorParameters = function () { return [
        { type: src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_2__["LoginserviceService"] },
        { type: src_app_services_insert_service__WEBPACK_IMPORTED_MODULE_3__["InsertService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AddkategoriaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addkategoria',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addkategoria.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add/addkategoria/addkategoria.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addkategoria.component.css */ "./src/app/components/add/addkategoria/addkategoria.component.css")).default]
        })
    ], AddkategoriaComponent);
    return AddkategoriaComponent;
}());



/***/ }),

/***/ "./src/app/components/add/addmenu/addmenu.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/add/addmenu/addmenu.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    width:95%;\r\n    min-height:500px;\r\n    background-color:rgba(5, 5, 5, 0.7);\r\n    margin:auto;\r\n    position: relative;\r\n    padding-top:100px;\r\n}\r\n.cont{\r\n    display:flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n}\r\n.cont a{\r\n    text-decoration: none;\r\n    width:200px;\r\n    height:100px;\r\n    background: linear-gradient(rgb(0, 106, 133),rgb(0, 37, 71));\r\n    color:black;\r\n    font-weight: bold;\r\n    text-align:center;\r\n    line-height:100px;\r\n    transition-duration: .1s;\r\n}\r\n.cont a:hover{\r\n    background: linear-gradient(rgb(0, 37, 71),rgb(0, 106, 133));\r\n    color:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQvYWRkbWVudS9hZGRtZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLG1DQUFtQztJQUNuQyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWiw0REFBNEQ7SUFDNUQsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksNERBQTREO0lBQzVELFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRkL2FkZG1lbnUvYWRkbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOjk1JTtcclxuICAgIG1pbi1oZWlnaHQ6NTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNSwgNSwgNSwgMC43KTtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy10b3A6MTAwcHg7XHJcbn1cclxuLmNvbnR7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbn1cclxuLmNvbnQgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHdpZHRoOjIwMHB4O1xyXG4gICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYigwLCAxMDYsIDEzMykscmdiKDAsIDM3LCA3MSkpO1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6MTAwcHg7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMXM7XHJcbn1cclxuLmNvbnQgYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2IoMCwgMzcsIDcxKSxyZ2IoMCwgMTA2LCAxMzMpKTtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/add/addmenu/addmenu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/add/addmenu/addmenu.component.ts ***!
  \*************************************************************/
/*! exports provided: AddmenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddmenuComponent", function() { return AddmenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loginservice.service */ "./src/app/services/loginservice.service.ts");



var AddmenuComponent = /** @class */ (function () {
    function AddmenuComponent(loginservice) {
        this.loginservice = loginservice;
    }
    AddmenuComponent.prototype.ngOnInit = function () {
    };
    AddmenuComponent.ctorParameters = function () { return [
        { type: src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_2__["LoginserviceService"] }
    ]; };
    AddmenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addmenu',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addmenu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add/addmenu/addmenu.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addmenu.component.css */ "./src/app/components/add/addmenu/addmenu.component.css")).default]
        })
    ], AddmenuComponent);
    return AddmenuComponent;
}());



/***/ }),

/***/ "./src/app/components/add/addpracownik/addpracownik.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/add/addpracownik/addpracownik.component.css ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    width:95%;\r\n    min-height:500px;\r\n    background-color:rgba(5, 5, 5, 0.7);\r\n    margin:auto;\r\n    position: relative;\r\n    padding-top:100px;\r\n    color:black;\r\n    font-family: 'Roboto';\r\n    font-weight: bold;\r\n}\r\n.cont{\r\n    display:flex;\r\n    justify-content: center;\r\n}\r\n.cont table{\r\n    padding:30px;\r\n    background-color:rgba(245, 222, 179, 0.822);\r\n    border-radius: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQvYWRkcHJhY293bmlrL2FkZHByYWNvd25pay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULGdCQUFnQjtJQUNoQixtQ0FBbUM7SUFDbkMsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFlBQVk7SUFDWix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFlBQVk7SUFDWiwyQ0FBMkM7SUFDM0MsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQvYWRkcHJhY293bmlrL2FkZHByYWNvd25pay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOjk1JTtcclxuICAgIG1pbi1oZWlnaHQ6NTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNSwgNSwgNSwgMC43KTtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy10b3A6MTAwcHg7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5jb250e1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmNvbnQgdGFibGV7XHJcbiAgICBwYWRkaW5nOjMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjQ1LCAyMjIsIDE3OSwgMC44MjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/add/addpracownik/addpracownik.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/add/addpracownik/addpracownik.component.ts ***!
  \***********************************************************************/
/*! exports provided: AddpracownikComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddpracownikComponent", function() { return AddpracownikComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loginservice.service */ "./src/app/services/loginservice.service.ts");
/* harmony import */ var src_app_services_insert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/insert.service */ "./src/app/services/insert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AddpracownikComponent = /** @class */ (function () {
    function AddpracownikComponent(loginservice, insertservice, router) {
        this.loginservice = loginservice;
        this.insertservice = insertservice;
        this.router = router;
        this.error = false;
        this.imie = null;
        this.nazwisko = null;
        this.haslo = null;
        this.wyplata = null;
    }
    AddpracownikComponent.prototype.ngOnInit = function () {
    };
    AddpracownikComponent.prototype.send = function () {
        var _this = this;
        if (this.imie != null &&
            this.nazwisko != null &&
            this.haslo != null &&
            this.wyplata != null) {
            this.error = false;
            this.insertservice.add_pracownik(this.imie, this.nazwisko, this.haslo, this.wyplata).subscribe(function (ret) {
                console.log(ret);
                _this.router.navigate(['/pracownicy']);
            });
        }
        else {
            this.error = true;
        }
    };
    AddpracownikComponent.ctorParameters = function () { return [
        { type: src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_2__["LoginserviceService"] },
        { type: src_app_services_insert_service__WEBPACK_IMPORTED_MODULE_3__["InsertService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AddpracownikComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addpracownik',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addpracownik.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add/addpracownik/addpracownik.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addpracownik.component.css */ "./src/app/components/add/addpracownik/addpracownik.component.css")).default]
        })
    ], AddpracownikComponent);
    return AddpracownikComponent;
}());



/***/ }),

/***/ "./src/app/components/add/addwydawnictwo/addwydawnictwo.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/add/addwydawnictwo/addwydawnictwo.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    width:95%;\r\n    min-height:500px;\r\n    background-color:rgba(5, 5, 5, 0.7);\r\n    margin:auto;\r\n    position: relative;\r\n    padding-top:100px;\r\n    color:black;\r\n    font-family: 'Roboto';\r\n\r\n}\r\n.cont{\r\n    display:flex;\r\n    justify-content: center;\r\n    \r\n}\r\n.cont table{\r\n    padding:30px;\r\n    background-color:rgba(245, 222, 179, 0.822);\r\n    border-radius: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQvYWRkd3lkYXduaWN0d28vYWRkd3lkYXduaWN0d28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxxQkFBcUI7O0FBRXpCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCOztBQUUzQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDJDQUEyQztJQUMzQyxtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkZC9hZGR3eWRhd25pY3R3by9hZGR3eWRhd25pY3R3by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOjk1JTtcclxuICAgIG1pbi1oZWlnaHQ6NTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNSwgNSwgNSwgMC43KTtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy10b3A6MTAwcHg7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcclxuXHJcbn1cclxuLmNvbnR7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIFxyXG59XHJcbi5jb250IHRhYmxle1xyXG4gICAgcGFkZGluZzozMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI0NSwgMjIyLCAxNzksIDAuODIyKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/add/addwydawnictwo/addwydawnictwo.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/add/addwydawnictwo/addwydawnictwo.component.ts ***!
  \***************************************************************************/
/*! exports provided: AddwydawnictwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddwydawnictwoComponent", function() { return AddwydawnictwoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loginservice.service */ "./src/app/services/loginservice.service.ts");
/* harmony import */ var src_app_services_insert_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/insert.service */ "./src/app/services/insert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AddwydawnictwoComponent = /** @class */ (function () {
    function AddwydawnictwoComponent(loginservice, insertservice, router) {
        this.loginservice = loginservice;
        this.insertservice = insertservice;
        this.router = router;
        this.nazwa = null;
        this.error = false;
    }
    AddwydawnictwoComponent.prototype.ngOnInit = function () {
    };
    AddwydawnictwoComponent.prototype.send = function () {
        var _this = this;
        if (this.nazwa != null) {
            this.error = false;
            this.insertservice.add_wydawnictwo(this.nazwa).subscribe(function (ret) {
                console.log(ret);
                _this.router.navigate(['/dodaj']);
            });
        }
        else {
            this.error = true;
        }
    };
    AddwydawnictwoComponent.ctorParameters = function () { return [
        { type: src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_2__["LoginserviceService"] },
        { type: src_app_services_insert_service__WEBPACK_IMPORTED_MODULE_3__["InsertService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    AddwydawnictwoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-addwydawnictwo',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addwydawnictwo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add/addwydawnictwo/addwydawnictwo.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addwydawnictwo.component.css */ "./src/app/components/add/addwydawnictwo/addwydawnictwo.component.css")).default]
        })
    ], AddwydawnictwoComponent);
    return AddwydawnictwoComponent;
}());



/***/ }),

/***/ "./src/app/components/ksiazka/ksiazka.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/ksiazka/ksiazka.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    width:95%;\r\n    min-height:500px;\r\n    background-color:rgba(5, 5, 5, 0.7);\r\n    margin:auto;\r\n    position: relative;\r\n    padding:10px;\r\n}\r\n\r\n.bookgrid{\r\n    font-family: 'Roboto', Tahoma, Geneva, Verdana, sans-serif;\r\n    width:100%;\r\n    display:grid;\r\n    grid-template-rows: 1fr 1fr 1fr;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\r\n    grid-template-areas: \r\n     \"img tytul tytul ocena rok\"\r\n     \"img autor autor wydawnictwo przycisk1\"\r\n     \"img opis opis kategorie przycisk2\";\r\n     border:1px solid black;\r\n     cursor: default;\r\n}\r\n\r\n.bookgrid button{\r\n    margin:5px;\r\n}\r\n\r\n.image{\r\n    grid-area: img;\r\n}\r\n\r\n.image img{\r\n    max-width: 150px;\r\n}\r\n\r\n.tytul{\r\n    grid-area: tytul;\r\n}\r\n\r\n.autorzy{\r\n    grid-area: autor;\r\n    text-align: left;\r\n}\r\n\r\n.autorzy a{\r\n    text-decoration: none;\r\n    color: green;\r\n}\r\n\r\n.wyd{\r\n    grid-area:wydawnictwo;\r\n}\r\n\r\n.ocena{\r\n    grid-area: ocena;\r\n}\r\n\r\n.rok{\r\n    grid-area:rok ;\r\n}\r\n\r\n.opis{\r\n    grid-area:opis;\r\n    text-align: left;\r\n    word-wrap: break-word;\r\n}\r\n\r\n.edytuj{\r\n    grid-area: przycisk2;\r\n}\r\n\r\n.kategorie{\r\n    grid-area:kategorie;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.kategorie h5{\r\n    margin:0;\r\n}\r\n\r\n.bookgrid button{\r\n    width:90%;\r\n    height:90%;\r\n}\r\n\r\n.egzemplarze{\r\n    display:flex;\r\n    flex-direction: column;\r\n    width:100%;\r\n}\r\n\r\n.egzitem{\r\n    display:grid;\r\n    grid-template-rows: 1fr;\r\n    grid-template-columns: 1fr 1fr 1fr;\r\n    margin-bottom:5px;\r\n    text-align: center;\r\n}\r\n\r\n.egzitem:hover{\r\n    box-shadow: 0px 0px 10px wheat;\r\n}\r\n\r\n.tinyimg{\r\n    width:90px;\r\n}\r\n\r\n.egzitem a {\r\n    display:flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: row;\r\n\r\n}\r\n\r\n.egzitem button{\r\n    height:90%;\r\n    width:70%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9rc2lhemthL2tzaWF6a2EuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDBEQUEwRDtJQUMxRCxVQUFVO0lBQ1YsWUFBWTtJQUNaLCtCQUErQjtJQUMvQiwwQ0FBMEM7SUFDMUM7Ozt3Q0FHb0M7S0FDbkMsc0JBQXNCO0tBQ3RCLGVBQWU7QUFDcEI7O0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxRQUFRO0FBQ1o7O0FBQ0E7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUlBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUNBO0lBQ0ksVUFBVTtBQUNkOztBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1COztBQUV2Qjs7QUFDQTtJQUNJLFVBQVU7SUFDVixTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2tzaWF6a2Eva3NpYXprYS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOjk1JTtcclxuICAgIG1pbi1oZWlnaHQ6NTAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNSwgNSwgNSwgMC43KTtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG59XHJcblxyXG4uYm9va2dyaWR7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcclxuICAgICBcImltZyB0eXR1bCB0eXR1bCBvY2VuYSByb2tcIlxyXG4gICAgIFwiaW1nIGF1dG9yIGF1dG9yIHd5ZGF3bmljdHdvIHByenljaXNrMVwiXHJcbiAgICAgXCJpbWcgb3BpcyBvcGlzIGthdGVnb3JpZSBwcnp5Y2lzazJcIjtcclxuICAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG4uYm9va2dyaWQgYnV0dG9ue1xyXG4gICAgbWFyZ2luOjVweDtcclxufVxyXG4uaW1hZ2V7XHJcbiAgICBncmlkLWFyZWE6IGltZztcclxufVxyXG4uaW1hZ2UgaW1ne1xyXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcclxufVxyXG4udHl0dWx7XHJcbiAgICBncmlkLWFyZWE6IHR5dHVsO1xyXG59XHJcbi5hdXRvcnp5e1xyXG4gICAgZ3JpZC1hcmVhOiBhdXRvcjtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuLmF1dG9yenkgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG4ud3lke1xyXG4gICAgZ3JpZC1hcmVhOnd5ZGF3bmljdHdvO1xyXG59XHJcbi5vY2VuYXtcclxuICAgIGdyaWQtYXJlYTogb2NlbmE7XHJcbn1cclxuLnJva3tcclxuICAgIGdyaWQtYXJlYTpyb2sgO1xyXG59XHJcbi5vcGlze1xyXG4gICAgZ3JpZC1hcmVhOm9waXM7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG59XHJcbi5lZHl0dWp7XHJcbiAgICBncmlkLWFyZWE6IHByenljaXNrMjtcclxufVxyXG4ua2F0ZWdvcmlle1xyXG4gICAgZ3JpZC1hcmVhOmthdGVnb3JpZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5rYXRlZ29yaWUgaDV7XHJcbiAgICBtYXJnaW46MDtcclxufVxyXG4uYm9va2dyaWQgYnV0dG9ue1xyXG4gICAgd2lkdGg6OTAlO1xyXG4gICAgaGVpZ2h0OjkwJTtcclxufVxyXG5cclxuXHJcblxyXG4uZWd6ZW1wbGFyemV7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG4uZWd6aXRlbXtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICAgIG1hcmdpbi1ib3R0b206NXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5lZ3ppdGVtOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IHdoZWF0O1xyXG59XHJcbi50aW55aW1ne1xyXG4gICAgd2lkdGg6OTBweDtcclxufVxyXG4uZWd6aXRlbSBhIHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblxyXG59XHJcbi5lZ3ppdGVtIGJ1dHRvbntcclxuICAgIGhlaWdodDo5MCU7XHJcbiAgICB3aWR0aDo3MCU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/ksiazka/ksiazka.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/ksiazka/ksiazka.component.ts ***!
  \*********************************************************/
/*! exports provided: KsiazkaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KsiazkaComponent", function() { return KsiazkaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_booksservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/booksservice.service */ "./src/app/services/booksservice.service.ts");
/* harmony import */ var src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loginservice.service */ "./src/app/services/loginservice.service.ts");





var KsiazkaComponent = /** @class */ (function () {
    function KsiazkaComponent(route, booksservice, loginservice) {
        this.route = route;
        this.booksservice = booksservice;
        this.loginservice = loginservice;
        this.book = null;
    }
    KsiazkaComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get('id');
        this.getbook(id);
        this.getegzemplarze(id);
    };
    KsiazkaComponent.prototype.getbook = function (id) {
        var _this = this;
        this.booksservice.getbook(id).subscribe(function (ret) {
            _this.book = ret;
            console.dir(_this.book);
        });
    };
    KsiazkaComponent.prototype.getegzemplarze = function (id) {
        var _this = this;
        this.booksservice.getegzemplarze(id).subscribe(function (ret) {
            _this.egzemplarze = ret;
            console.dir(_this.egzemplarze);
        });
    };
    KsiazkaComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_booksservice_service__WEBPACK_IMPORTED_MODULE_3__["BooksserviceService"] },
        { type: src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_4__["LoginserviceService"] }
    ]; };
    KsiazkaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ksiazka',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ksiazka.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/ksiazka/ksiazka.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ksiazka.component.css */ "./src/app/components/ksiazka/ksiazka.component.css")).default]
        })
    ], KsiazkaComponent);
    return KsiazkaComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":root{\r\n    height:100%;\r\n}\r\n.container{\r\n    font-family: 'Roboto';\r\n    font-weight: bold;\r\n    width:500px;\r\n    min-height:350px;\r\n    margin:auto;\r\n    background-color: rgba(0, 0, 0, 0.945);\r\n}\r\ntable{\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    width:50%;\r\n    display:block;\r\n    margin:auto;\r\n    padding-top:100px;\r\n}\r\nbutton{\r\n    margin-top:10px;\r\n    width:50%;\r\n    height:30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLHNDQUFzQztBQUMxQztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLFNBQVM7SUFDVCxhQUFhO0lBQ2IsV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdHtcclxuICAgIGhlaWdodDoxMDAlO1xyXG59XHJcbi5jb250YWluZXJ7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHdpZHRoOjUwMHB4O1xyXG4gICAgbWluLWhlaWdodDozNTBweDtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjk0NSk7XHJcbn1cclxuXHJcbnRhYmxle1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBwYWRkaW5nLXRvcDoxMDBweDtcclxufVxyXG5idXR0b257XHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loginservice.service */ "./src/app/services/loginservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginservice, router) {
        this.loginservice = loginservice;
        this.router = router;
        this.loginbutton = '';
        this.passwordbutton = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loguj = function () {
        var _this = this;
        //console.log(this.loginbutton+" "+this.passwordbutton);
        this.loginservice.login(this.loginbutton, this.passwordbutton).subscribe(function (ret) {
            _this.loginservice.zaloguj(ret);
            console.dir(_this.loginservice.user);
            if (_this.loginservice.user != null) {
                _this.router.navigate(['/']);
            }
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_2__["LoginserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/modifybook/modifybook.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/modifybook/modifybook.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    width:95%;\r\n    min-height:500px;\r\n    background-color:rgba(5, 5, 5, 0.7);\r\n    margin:auto;\r\n    position: relative;\r\n    padding:10px;\r\n    margin-bottom: 50px;\r\n}\r\n\r\n.bookgrid{\r\n    font-family: 'Roboto', Tahoma, Geneva, Verdana, sans-serif;\r\n    width:100%;\r\n    display:flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.image img{\r\n    max-width: 150px;\r\n}\r\n\r\n.desc{\r\n    background-color:wheat;\r\n    display:flex;\r\n    flex-direction: column;\r\n    color:black;\r\n    padding:15px;\r\n}\r\n\r\n.desc .wyd{\r\n    display:flex;\r\n    flex-direction: row;\r\n}\r\n\r\n.wyd div{\r\n    width:40%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RpZnlib29rL21vZGlmeWJvb2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDBEQUEwRDtJQUMxRCxVQUFVO0lBQ1YsWUFBWTtJQUNaLHNCQUFzQjtBQUMxQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kaWZ5Ym9vay9tb2RpZnlib29rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgd2lkdGg6OTUlO1xyXG4gICAgbWluLWhlaWdodDo1MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSg1LCA1LCA1LCAwLjcpO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcblxyXG4uYm9va2dyaWR7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmltYWdlIGltZ3tcclxuICAgIG1heC13aWR0aDogMTUwcHg7XHJcbn1cclxuLmRlc2N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOndoZWF0O1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgcGFkZGluZzoxNXB4O1xyXG59XHJcbi5kZXNjIC53eWR7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbi53eWQgZGl2e1xyXG4gICAgd2lkdGg6NDAlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/modifybook/modifybook.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/modifybook/modifybook.component.ts ***!
  \***************************************************************/
/*! exports provided: ModifybookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifybookComponent", function() { return ModifybookComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loginservice.service */ "./src/app/services/loginservice.service.ts");
/* harmony import */ var src_app_services_booksservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/booksservice.service */ "./src/app/services/booksservice.service.ts");
/* harmony import */ var src_app_services_insert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/insert.service */ "./src/app/services/insert.service.ts");






var ModifybookComponent = /** @class */ (function () {
    function ModifybookComponent(route, booksservice, loginservice, insertservice, router) {
        this.route = route;
        this.booksservice = booksservice;
        this.loginservice = loginservice;
        this.insertservice = insertservice;
        this.router = router;
        this.book = null;
        this.all_authors = null;
        this.all_kategorie = null;
        this.all_wydawnictwa = null;
        this.egz_num = 1;
    }
    ModifybookComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get('id');
        this.getbook(id);
        this.getauthors();
        this.getcategory();
        this.getwyd();
    };
    ModifybookComponent.prototype.getbook = function (id) {
        var _this = this;
        this.booksservice.getbook(id).subscribe(function (ret) {
            _this.book = ret;
            console.dir(_this.book);
        });
    };
    ModifybookComponent.prototype.getauthors = function () {
        var _this = this;
        this.booksservice.getAllAuthors().subscribe(function (ret) {
            _this.all_authors = ret;
            //console.dir(this.all_authors);
        });
    };
    ModifybookComponent.prototype.getcategory = function () {
        var _this = this;
        this.booksservice.getAllCategory().subscribe(function (ret) {
            _this.all_kategorie = ret;
        });
    };
    ModifybookComponent.prototype.getwyd = function () {
        var _this = this;
        this.booksservice.getallwydawnictwa().subscribe(function (ret) {
            _this.all_wydawnictwa = ret;
        });
    };
    ModifybookComponent.prototype.rem_aut = function (autor) {
        this.book.autorzy = this.book.autorzy.filter(function (item) { return item !== autor; });
    };
    ModifybookComponent.prototype.add_autor = function (autor) {
        this.book.autorzy.push(autor);
    };
    ModifybookComponent.prototype.rem_kat = function (kat) {
        this.book.kategorie = this.book.kategorie.filter(function (item) { return item !== kat; });
    };
    ModifybookComponent.prototype.add_kat = function (kat) {
        this.book.kategorie.push(kat);
    };
    ModifybookComponent.prototype.rem_wyd = function () {
        this.book.wydawnictwo = null;
    };
    ModifybookComponent.prototype.change_wyd = function (wyd) {
        this.book.wydawnictwo = wyd;
    };
    ModifybookComponent.prototype.add_egz = function () {
        var _this = this;
        this.insertservice.add_egzemplarze(this.egz_num + '', this.book.id_ksiazki + '').subscribe(function (ret) {
            console.log(ret);
            _this.router.navigate(['/ksiazka/' + _this.book.id_ksiazki]);
        });
    };
    ModifybookComponent.prototype.send = function () {
        var _this = this;
        this.insertservice.edit_Book(this.book).subscribe(function (ret) {
            console.log(ret);
            //this.getbook(this.book.id_ksiazki+"");
            _this.router.navigate(['/ksiazka/' + _this.book.id_ksiazki]);
        });
    };
    ModifybookComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: src_app_services_booksservice_service__WEBPACK_IMPORTED_MODULE_4__["BooksserviceService"] },
        { type: src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_3__["LoginserviceService"] },
        { type: src_app_services_insert_service__WEBPACK_IMPORTED_MODULE_5__["InsertService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ModifybookComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-modifybook',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modifybook.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modifybook/modifybook.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modifybook.component.css */ "./src/app/components/modifybook/modifybook.component.css")).default]
        })
    ], ModifybookComponent);
    return ModifybookComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/nav/nav.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav{\r\n    height:100%;\r\n    width:4rem;\r\n    background-color:rgba(0, 0, 0, 0.966);\r\n    position:fixed; \r\n    padding-left: 1rem;\r\n    transition-duration: .1s;\r\n    font-size: 50px;\r\n    transition-timing-function: ease-out;\r\n    z-index: 99;\r\n\r\n\r\n}\r\nnav:hover{\r\n    width:18rem;\r\n}\r\nnav:hover a span{\r\n    display:block;\r\n}\r\nnav ul {\r\n    list-style: none;\r\n    padding:0;\r\n    margin:0;\r\n    display:flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\nul li{\r\n    width:100%;\r\n}\r\nli a{\r\n    text-decoration: none;\r\n    display:flex;\r\n    height:4rem;\r\n    align-items: center;\r\n    color:rgb(56, 56, 56);\r\n    transition-duration: .2s;\r\n}\r\nul:last-child{\r\n    margin-top: auto;\r\n}\r\na span {\r\n    display:none;\r\n    margin-left: 1rem;\r\n    font-family: Arial, Helvetica, sans-serif;\r\n    font-size: 2rem;\r\n}\r\nli a:hover {\r\n    color:red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXYvbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHdCQUF3QjtJQUN4QixlQUFlO0lBQ2Ysb0NBQW9DO0lBQ3BDLFdBQVc7OztBQUdmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsUUFBUTtJQUNSLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osV0FBVztJQUNYLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIseUNBQXlDO0lBQ3pDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibmF2e1xyXG4gICAgaGVpZ2h0OjEwMCU7XHJcbiAgICB3aWR0aDo0cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsIDAsIDAsIDAuOTY2KTtcclxuICAgIHBvc2l0aW9uOmZpeGVkOyBcclxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4xcztcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgIHotaW5kZXg6IDk5O1xyXG5cclxuXHJcbn1cclxubmF2OmhvdmVye1xyXG4gICAgd2lkdGg6MThyZW07XHJcbn1cclxubmF2OmhvdmVyIGEgc3BhbntcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxubmF2IHVsIHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbnVsIGxpe1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG5saSBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgaGVpZ2h0OjRyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6cmdiKDU2LCA1NiwgNTYpO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogLjJzO1xyXG59XHJcbnVsOmxhc3QtY2hpbGR7XHJcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG59XHJcblxyXG5hIHNwYW4ge1xyXG4gICAgZGlzcGxheTpub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5saSBhOmhvdmVyIHtcclxuICAgIGNvbG9yOnJlZDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loginservice.service */ "./src/app/services/loginservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavComponent = /** @class */ (function () {
    function NavComponent(loginservice, router) {
        this.loginservice = loginservice;
        this.router = router;
    }
    NavComponent.prototype.ngOnInit = function () {
        console.log(this.loginservice.user);
    };
    NavComponent.prototype.wyloguj = function () {
        this.loginservice.wyloguj();
        //this.router.navigate(['/login']);
    };
    NavComponent.ctorParameters = function () { return [
        { type: src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_2__["LoginserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nav/nav.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.css */ "./src/app/components/nav/nav.component.css")).default]
        })
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/pracownicy/pracownicy.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/pracownicy/pracownicy.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    width:95%;\r\n    min-height:500px;\r\n    background-color:rgba(5, 5, 5, 0.7);\r\n    margin:auto;\r\n    position: relative;\r\n    padding-top:100px;\r\n}\r\n.cont{\r\n    display:flex;\r\n    flex-direction: column;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n}\r\ntable{\r\n    \r\n}\r\ntable th{\r\n    background-color:black;\r\n}\r\ntable tr:nth-child(even){\r\n    background:rgb(85, 85, 85);\r\n}\r\ntable tr:nth-child(odd){\r\n    background:rgb(32, 32, 32);\r\n}\r\ntable tr:last-child{\r\n    padding-top: 5px;\r\n    background: inherit;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcmFjb3duaWN5L3ByYWNvd25pY3kuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsbUNBQW1DO0lBQ25DLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZiw2QkFBNkI7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJhY293bmljeS9wcmFjb3duaWN5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgd2lkdGg6OTUlO1xyXG4gICAgbWluLWhlaWdodDo1MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSg1LCA1LCA1LCAwLjcpO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXRvcDoxMDBweDtcclxufVxyXG4uY29udHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG50YWJsZXtcclxuICAgIFxyXG59XHJcbnRhYmxlIHRoe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxufVxyXG50YWJsZSB0cjpudGgtY2hpbGQoZXZlbil7XHJcbiAgICBiYWNrZ3JvdW5kOnJnYig4NSwgODUsIDg1KTtcclxufVxyXG50YWJsZSB0cjpudGgtY2hpbGQob2RkKXtcclxuICAgIGJhY2tncm91bmQ6cmdiKDMyLCAzMiwgMzIpO1xyXG59XHJcbnRhYmxlIHRyOmxhc3QtY2hpbGR7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/pracownicy/pracownicy.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/pracownicy/pracownicy.component.ts ***!
  \***************************************************************/
/*! exports provided: PracownicyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PracownicyComponent", function() { return PracownicyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_booksservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/booksservice.service */ "./src/app/services/booksservice.service.ts");
/* harmony import */ var src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loginservice.service */ "./src/app/services/loginservice.service.ts");




var PracownicyComponent = /** @class */ (function () {
    function PracownicyComponent(bookservice, loginservice) {
        this.bookservice = bookservice;
        this.loginservice = loginservice;
        this.pracownicy = null;
        this.zarobki = null;
    }
    PracownicyComponent.prototype.ngOnInit = function () {
        this.getPracownicy();
        this.getZarobki();
    };
    PracownicyComponent.prototype.getPracownicy = function () {
        var _this = this;
        this.bookservice.getAllPracownicy().subscribe(function (ret) {
            _this.pracownicy = ret;
        });
    };
    PracownicyComponent.prototype.getZarobki = function () {
        var _this = this;
        this.bookservice.getZarobki().subscribe(function (ret) {
            _this.zarobki = ret;
        });
    };
    PracownicyComponent.ctorParameters = function () { return [
        { type: src_app_services_booksservice_service__WEBPACK_IMPORTED_MODULE_2__["BooksserviceService"] },
        { type: src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_3__["LoginserviceService"] }
    ]; };
    PracownicyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pracownicy',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pracownicy.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pracownicy/pracownicy.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pracownicy.component.css */ "./src/app/components/pracownicy/pracownicy.component.css")).default]
        })
    ], PracownicyComponent);
    return PracownicyComponent;
}());



/***/ }),

/***/ "./src/app/components/wypozyczenia/wypozyczenia.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/wypozyczenia/wypozyczenia.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    width:95%;\r\n    min-height:500px;\r\n    background-color:rgba(5, 5, 5, 0.7);\r\n    margin:auto;\r\n    position: relative;\r\n    padding:10px;\r\n}\r\n.cont{\r\n    display:flex;\r\n    flex-direction: row;\r\n}\r\n.wypozyczenia{\r\n    border:1px solid rgb(41, 30, 9);\r\n    border-collapse: collapse;\r\n    margin-top: 1px;\r\n    margin-bottom: 1px;\r\n}\r\n.wypozyczenia tr{\r\n    padding-top:3px;\r\n    padding-bottom:3px;\r\n    cursor:pointer;\r\n\r\n}\r\n.wypozyczenia tr:hover{\r\n    box-shadow:0px 0px 10px red;\r\n}\r\n.wypozyczenia tr:nth-child(odd){\r\n    background-color:rgb(41, 41, 41);\r\n}\r\n.activeitem{\r\n    padding:15px;\r\n    font-family: 'Roboto';\r\n\r\n}\r\n.activeitem img{\r\n    max-width: 100px;\r\n}\r\n.activeitem button{\r\n    display:inline-block;\r\n    min-width: 110px;\r\n    padding:10px;\r\n}\r\n.wait{\r\n    width:100%;\r\n    font-size: 5rem;\r\n    text-align: center;\r\n}\r\n@media (max-width:1100px){\r\n    .cont{\r\n        flex-direction: column-reverse;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93eXBvenljemVuaWEvd3lwb3p5Y3plbmlhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLG1DQUFtQztJQUNuQyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLCtCQUErQjtJQUMvQix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixjQUFjOztBQUVsQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxnQ0FBZ0M7QUFDcEM7QUFJQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7O0FBRXpCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFHQTtJQUNJO1FBQ0ksOEJBQThCO0lBQ2xDO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3d5cG96eWN6ZW5pYS93eXBvenljemVuaWEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XHJcbiAgICB3aWR0aDo5NSU7XHJcbiAgICBtaW4taGVpZ2h0OjUwMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDUsIDUsIDUsIDAuNyk7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6MTBweDtcclxufVxyXG4uY29udHtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLnd5cG96eWN6ZW5pYXtcclxuICAgIGJvcmRlcjoxcHggc29saWQgcmdiKDQxLCAzMCwgOSk7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG59XHJcbi53eXBvenljemVuaWEgdHJ7XHJcbiAgICBwYWRkaW5nLXRvcDozcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTozcHg7XHJcbiAgICBjdXJzb3I6cG9pbnRlcjtcclxuXHJcbn1cclxuLnd5cG96eWN6ZW5pYSB0cjpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6MHB4IDBweCAxMHB4IHJlZDtcclxufVxyXG4ud3lwb3p5Y3plbmlhIHRyOm50aC1jaGlsZChvZGQpe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNDEsIDQxLCA0MSk7XHJcbn1cclxuXHJcblxyXG5cclxuLmFjdGl2ZWl0ZW17XHJcbiAgICBwYWRkaW5nOjE1cHg7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90byc7XHJcblxyXG59XHJcbi5hY3RpdmVpdGVtIGltZ3tcclxuICAgIG1heC13aWR0aDogMTAwcHg7XHJcbn1cclxuLmFjdGl2ZWl0ZW0gYnV0dG9ue1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICBtaW4td2lkdGg6IDExMHB4O1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG59XHJcblxyXG4ud2FpdHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDoxMTAwcHgpe1xyXG4gICAgLmNvbnR7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gICAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/wypozyczenia/wypozyczenia.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/wypozyczenia/wypozyczenia.component.ts ***!
  \*******************************************************************/
/*! exports provided: WypozyczeniaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WypozyczeniaComponent", function() { return WypozyczeniaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/loginservice.service */ "./src/app/services/loginservice.service.ts");
/* harmony import */ var src_app_services_booksservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/booksservice.service */ "./src/app/services/booksservice.service.ts");
/* harmony import */ var src_app_services_insert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/insert.service */ "./src/app/services/insert.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var WypozyczeniaComponent = /** @class */ (function () {
    function WypozyczeniaComponent(loginservice, bookservice, iserts, router) {
        this.loginservice = loginservice;
        this.bookservice = bookservice;
        this.iserts = iserts;
        this.router = router;
        this.wypozyczenia = null;
        this.activeitem = null;
    }
    WypozyczeniaComponent.prototype.ngOnInit = function () {
        this.getallwypoz();
    };
    WypozyczeniaComponent.prototype.getallwypoz = function () {
        var _this = this;
        this.bookservice.getallwypozyczenia().subscribe(function (ret) {
            _this.wypozyczenia = ret;
            console.dir(_this.wypozyczenia);
        });
    };
    WypozyczeniaComponent.prototype.show = function (item) {
        this.activeitem = item;
        //console.dir(item);
    };
    WypozyczeniaComponent.prototype.prolonguj = function (item) {
        var _this = this;
        this.iserts.prolonguj(item).subscribe(function (ret) {
            console.log(ret);
            _this.router.navigate(['/wypozyczenia']);
            _this.wypozyczenia = null;
            _this.getallwypoz();
            _this.activeitem = null;
        });
    };
    WypozyczeniaComponent.prototype.oddaj = function (item) {
        var _this = this;
        this.iserts.oddaj(item).subscribe(function (ret) {
            console.log(ret);
            _this.router.navigate(['/wypozyczenia']);
            _this.wypozyczenia = null;
            _this.getallwypoz();
            _this.activeitem = null;
        });
    };
    WypozyczeniaComponent.ctorParameters = function () { return [
        { type: src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_2__["LoginserviceService"] },
        { type: src_app_services_booksservice_service__WEBPACK_IMPORTED_MODULE_3__["BooksserviceService"] },
        { type: src_app_services_insert_service__WEBPACK_IMPORTED_MODULE_4__["InsertService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    WypozyczeniaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wypozyczenia',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wypozyczenia.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/wypozyczenia/wypozyczenia.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wypozyczenia.component.css */ "./src/app/components/wypozyczenia/wypozyczenia.component.css")).default]
        })
    ], WypozyczeniaComponent);
    return WypozyczeniaComponent;
}());



/***/ }),

/***/ "./src/app/components/wypozyczenie/wypozyczenie.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/wypozyczenie/wypozyczenie.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    width:95%;\r\n    min-height:500px;\r\n    background-color:rgba(5, 5, 5, 0.7);\r\n    margin:auto;\r\n    position: relative;\r\n    padding:10px;\r\n}\r\n.formularz{\r\n    margin-top:30px;\r\n    display:flex;\r\n    flex-direction: row;\r\n}\r\nfigure img{\r\n    max-width:150px;\r\n}\r\n.ksiazka{\r\n    display:flex;\r\n    flex-direction: row;\r\n    margin-right: 20px;\r\n}\r\n.error{\r\n    width:100%;\r\n    height:30px;\r\n    background: linear-gradient(rgb(148, 0, 0),rgb(95, 0, 0));\r\n}\r\n.czytelnik{\r\n    background-color: wheat;\r\n    padding:15px;\r\n    border-radius: 5px;\r\n}\r\nbutton{\r\n    margin-top:10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93eXBvenljemVuaWUvd3lwb3p5Y3plbmllLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLG1DQUFtQztJQUNuQyxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCx5REFBeUQ7QUFDN0Q7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93eXBvenljemVuaWUvd3lwb3p5Y3plbmllLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgd2lkdGg6OTUlO1xyXG4gICAgbWluLWhlaWdodDo1MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSg1LCA1LCA1LCAwLjcpO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbn1cclxuLmZvcm11bGFyentcclxuICAgIG1hcmdpbi10b3A6MzBweDtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuZmlndXJlIGltZ3tcclxuICAgIG1heC13aWR0aDoxNTBweDtcclxufVxyXG4ua3NpYXprYXtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuLmVycm9ye1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDozMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYigxNDgsIDAsIDApLHJnYig5NSwgMCwgMCkpO1xyXG59XHJcblxyXG4uY3p5dGVsbmlre1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hlYXQ7XHJcbiAgICBwYWRkaW5nOjE1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbmJ1dHRvbntcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/wypozyczenie/wypozyczenie.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/wypozyczenie/wypozyczenie.component.ts ***!
  \*******************************************************************/
/*! exports provided: WypozyczenieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WypozyczenieComponent", function() { return WypozyczenieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_booksservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/booksservice.service */ "./src/app/services/booksservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loginservice.service */ "./src/app/services/loginservice.service.ts");
/* harmony import */ var src_app_services_insert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/insert.service */ "./src/app/services/insert.service.ts");






var WypozyczenieComponent = /** @class */ (function () {
    function WypozyczenieComponent(booksservice, route, router, loginservice, insertservice) {
        this.booksservice = booksservice;
        this.route = route;
        this.router = router;
        this.loginservice = loginservice;
        this.insertservice = insertservice;
        this.egzemplarz = null;
        this.czytelnik = '';
        this.czytelnikout = null;
        this.error = false;
        this.error2 = false;
    }
    WypozyczenieComponent.prototype.ngOnInit = function () {
        var id_egz = this.route.snapshot.paramMap.get('id');
        this.getegzemplarz(id_egz);
        this.getczytelnicy();
    };
    WypozyczenieComponent.prototype.getegzemplarz = function (id) {
        var _this = this;
        this.booksservice.getegzemplarz(id).subscribe(function (ret) {
            _this.egzemplarz = ret;
        });
    };
    WypozyczenieComponent.prototype.getczytelnicy = function () {
        var _this = this;
        this.booksservice.getczytelnicy().subscribe(function (ret) {
            _this.czytinput = ret;
        });
    };
    WypozyczenieComponent.prototype.czyt = function () {
        var _this = this;
        this.booksservice.getczytelnik(this.czytelnik).subscribe(function (ret) {
            _this.czytelnikout = ret;
        });
    };
    WypozyczenieComponent.prototype.wyslij = function () {
        var _this = this;
        if (this.czytelnikout == null) {
            this.error = true;
        }
        else {
            this.error = false;
            console.log("data dzis,\n egzemplarz:" + this.egzemplarz.id_egzemplarza + "\nid_czytelnika:" + this.czytelnikout.id_czytelnika + " \nset prolongacje 0 i oddano 0");
            this.booksservice.sendwypozyczenie(this.egzemplarz.id_egzemplarza + '', this.czytelnikout.id_czytelnika + '', this.loginservice.user.id_pracownika + '').subscribe(function (ret) {
                if (ret == 'error') {
                    _this.error2 = true;
                    console.log(ret);
                }
                else {
                    _this.router.navigate(['/wypozyczenia']);
                }
            });
        }
    };
    WypozyczenieComponent.ctorParameters = function () { return [
        { type: src_app_services_booksservice_service__WEBPACK_IMPORTED_MODULE_2__["BooksserviceService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_4__["LoginserviceService"] },
        { type: src_app_services_insert_service__WEBPACK_IMPORTED_MODULE_5__["InsertService"] }
    ]; };
    WypozyczenieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wypozyczenie',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wypozyczenie.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/wypozyczenie/wypozyczenie.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wypozyczenie.component.css */ "./src/app/components/wypozyczenie/wypozyczenie.component.css")).default]
        })
    ], WypozyczenieComponent);
    return WypozyczenieComponent;
}());



/***/ }),

/***/ "./src/app/components/wyszukiwarka/wyszukiwarka.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/wyszukiwarka/wyszukiwarka.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\r\n    width:95%;\r\n    min-height:500px;\r\n    background-color:rgba(5, 5, 5, 0.7);\r\n    margin:auto;\r\n    position: relative;\r\n}\r\n\r\n.searchcontainer{\r\n    position: relative;\r\n    width:100%;\r\n    padding-top:15px;\r\n}\r\n\r\n.searchcontainer button,input{\r\n    font-size: 20px;\r\n    padding:4px;\r\n    background-color:wheat;\r\n    border: 2px solid black;\r\n}\r\n\r\n.searchcontainer button{\r\n    border-radius: 0 1rem 1rem 0;\r\n    border-left: none;\r\n    padding-left:10px;\r\n    padding-right: 10px;\r\n    background-color: rgb(204, 185, 149);\r\n}\r\n\r\n.searchcontainer input{\r\n    border-right:none;\r\n    width:60%;\r\n    border-radius: 1rem 0 0 1rem;\r\n}\r\n\r\n.searchresults{\r\n    position: relative;\r\n    display:flex;\r\n    flex-direction: column;\r\n\r\n}\r\n\r\n.bookgrid{\r\n    font-family: 'Roboto', Tahoma, Geneva, Verdana, sans-serif;\r\n    width:100%;\r\n    display:grid;\r\n    grid-template-rows: 1fr 1fr 1fr;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\r\n    grid-template-areas: \r\n     \"img tytul tytul ocena rok\"\r\n     \"img autor autor wydawnictwo przycisk1\"\r\n     \"img opis opis kategorie przycisk2\";\r\n     border:1px solid black;\r\n     cursor: default;\r\n}\r\n\r\n.bookgrid:hover{\r\n    box-shadow: 0px 0px 10px white;\r\n}\r\n\r\n.bookgrid button{\r\n    margin:5px;\r\n}\r\n\r\n.image{\r\n    grid-area: img;\r\n}\r\n\r\n.image img{\r\n    max-width: 150px;\r\n}\r\n\r\n.tytul{\r\n    grid-area: tytul;\r\n}\r\n\r\n.autorzy{\r\n    grid-area: autor;\r\n    text-align: left;\r\n}\r\n\r\n.autorzy a{\r\n    text-decoration: none;\r\n    color: green;\r\n}\r\n\r\n.wyd{\r\n    grid-area:wydawnictwo;\r\n}\r\n\r\n.ocena{\r\n    grid-area: ocena;\r\n}\r\n\r\n.rok{\r\n    grid-area:rok ;\r\n}\r\n\r\n.opis{\r\n    grid-area:opis;\r\n    text-align: left;\r\n}\r\n\r\n.wypozycz{\r\n    grid-area: przycisk1;\r\n}\r\n\r\n.edytuj{\r\n    grid-area: przycisk2;\r\n}\r\n\r\n.kategorie{\r\n    grid-area:kategorie;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.kategorie h5{\r\n    margin:0;\r\n}\r\n\r\n.bookgrid button{\r\n    width:90%;\r\n    height:90%;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93eXN6dWtpd2Fya2Evd3lzenVraXdhcmthLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLG1DQUFtQztJQUNuQyxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLHNCQUFzQjtJQUN0Qix1QkFBdUI7QUFDM0I7O0FBQ0E7SUFDSSw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsb0NBQW9DO0FBQ3hDOztBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLFNBQVM7SUFDVCw0QkFBNEI7QUFDaEM7O0FBR0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSwwREFBMEQ7SUFDMUQsVUFBVTtJQUNWLFlBQVk7SUFDWiwrQkFBK0I7SUFDL0IsMENBQTBDO0lBQzFDOzs7d0NBR29DO0tBQ25DLHNCQUFzQjtLQUN0QixlQUFlO0FBQ3BCOztBQUNBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUNBO0lBQ0ksVUFBVTtBQUNkOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFDQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBQ0E7SUFDSSxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93eXN6dWtpd2Fya2Evd3lzenVraXdhcmthLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgd2lkdGg6OTUlO1xyXG4gICAgbWluLWhlaWdodDo1MDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSg1LCA1LCA1LCAwLjcpO1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zZWFyY2hjb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgcGFkZGluZy10b3A6MTVweDtcclxufVxyXG4uc2VhcmNoY29udGFpbmVyIGJ1dHRvbixpbnB1dHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6NHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGVhdDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5zZWFyY2hjb250YWluZXIgYnV0dG9ue1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAxcmVtIDFyZW0gMDtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgcGFkZGluZy1sZWZ0OjEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMTg1LCAxNDkpO1xyXG59XHJcbi5zZWFyY2hjb250YWluZXIgaW5wdXR7XHJcbiAgICBib3JkZXItcmlnaHQ6bm9uZTtcclxuICAgIHdpZHRoOjYwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW0gMCAwIDFyZW07XHJcbn1cclxuXHJcblxyXG4uc2VhcmNocmVzdWx0c3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG59XHJcblxyXG4uYm9va2dyaWR7XHJcbiAgICBmb250LWZhbWlseTogJ1JvYm90bycsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmciAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcclxuICAgICBcImltZyB0eXR1bCB0eXR1bCBvY2VuYSByb2tcIlxyXG4gICAgIFwiaW1nIGF1dG9yIGF1dG9yIHd5ZGF3bmljdHdvIHByenljaXNrMVwiXHJcbiAgICAgXCJpbWcgb3BpcyBvcGlzIGthdGVnb3JpZSBwcnp5Y2lzazJcIjtcclxuICAgICBib3JkZXI6MXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgIGN1cnNvcjogZGVmYXVsdDtcclxufVxyXG4uYm9va2dyaWQ6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggd2hpdGU7XHJcbn1cclxuLmJvb2tncmlkIGJ1dHRvbntcclxuICAgIG1hcmdpbjo1cHg7XHJcbn1cclxuLmltYWdle1xyXG4gICAgZ3JpZC1hcmVhOiBpbWc7XHJcbn1cclxuLmltYWdlIGltZ3tcclxuICAgIG1heC13aWR0aDogMTUwcHg7XHJcbn1cclxuLnR5dHVse1xyXG4gICAgZ3JpZC1hcmVhOiB0eXR1bDtcclxufVxyXG4uYXV0b3J6eXtcclxuICAgIGdyaWQtYXJlYTogYXV0b3I7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcbi5hdXRvcnp5IGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogZ3JlZW47XHJcbn1cclxuLnd5ZHtcclxuICAgIGdyaWQtYXJlYTp3eWRhd25pY3R3bztcclxufVxyXG4ub2NlbmF7XHJcbiAgICBncmlkLWFyZWE6IG9jZW5hO1xyXG59XHJcbi5yb2t7XHJcbiAgICBncmlkLWFyZWE6cm9rIDtcclxufVxyXG4ub3Bpc3tcclxuICAgIGdyaWQtYXJlYTpvcGlzO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4ud3lwb3p5Y3p7XHJcbiAgICBncmlkLWFyZWE6IHByenljaXNrMTtcclxufVxyXG4uZWR5dHVqe1xyXG4gICAgZ3JpZC1hcmVhOiBwcnp5Y2lzazI7XHJcbn1cclxuLmthdGVnb3JpZXtcclxuICAgIGdyaWQtYXJlYTprYXRlZ29yaWU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4ua2F0ZWdvcmllIGg1e1xyXG4gICAgbWFyZ2luOjA7XHJcbn1cclxuXHJcbi5ib29rZ3JpZCBidXR0b257XHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgICBoZWlnaHQ6OTAlO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/wyszukiwarka/wyszukiwarka.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/wyszukiwarka/wyszukiwarka.component.ts ***!
  \*******************************************************************/
/*! exports provided: WyszukiwarkaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WyszukiwarkaComponent", function() { return WyszukiwarkaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_booksservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/booksservice.service */ "./src/app/services/booksservice.service.ts");
/* harmony import */ var src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/loginservice.service */ "./src/app/services/loginservice.service.ts");




var WyszukiwarkaComponent = /** @class */ (function () {
    function WyszukiwarkaComponent(booksservice, loginservice) {
        this.booksservice = booksservice;
        this.loginservice = loginservice;
        this.query = '';
        this.books = null;
        this.topbooks = null;
    }
    WyszukiwarkaComponent.prototype.ngOnInit = function () {
        this.gettop();
    };
    WyszukiwarkaComponent.prototype.search = function () {
        var _this = this;
        if (this.query != '') {
            this.booksservice.getbooks(this.query).subscribe(function (ret) {
                _this.books = ret;
                console.dir(ret);
            });
        }
    };
    WyszukiwarkaComponent.prototype.gettop = function () {
        var _this = this;
        this.booksservice.getTopBooks().subscribe(function (ret) {
            _this.topbooks = ret;
        });
    };
    WyszukiwarkaComponent.ctorParameters = function () { return [
        { type: src_app_services_booksservice_service__WEBPACK_IMPORTED_MODULE_2__["BooksserviceService"] },
        { type: src_app_services_loginservice_service__WEBPACK_IMPORTED_MODULE_3__["LoginserviceService"] }
    ]; };
    WyszukiwarkaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wyszukiwarka',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wyszukiwarka.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/wyszukiwarka/wyszukiwarka.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wyszukiwarka.component.css */ "./src/app/components/wyszukiwarka/wyszukiwarka.component.css")).default]
        })
    ], WyszukiwarkaComponent);
    return WyszukiwarkaComponent;
}());



/***/ }),

/***/ "./src/app/pipes/available.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/available.pipe.ts ***!
  \*****************************************/
/*! exports provided: AvailablePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AvailablePipe", function() { return AvailablePipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AvailablePipe = /** @class */ (function () {
    function AvailablePipe() {
    }
    AvailablePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value == '0' ? 'Tak' : 'Nie';
    };
    AvailablePipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'available'
        })
    ], AvailablePipe);
    return AvailablePipe;
}());



/***/ }),

/***/ "./src/app/pipes/oddano.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/oddano.pipe.ts ***!
  \**************************************/
/*! exports provided: OddanoPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OddanoPipe", function() { return OddanoPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OddanoPipe = /** @class */ (function () {
    function OddanoPipe() {
    }
    OddanoPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return value == 0 ? 'Nie' : 'Tak';
    };
    OddanoPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'oddano'
        })
    ], OddanoPipe);
    return OddanoPipe;
}());



/***/ }),

/***/ "./src/app/services/booksservice.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/booksservice.service.ts ***!
  \**************************************************/
/*! exports provided: BooksserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksserviceService", function() { return BooksserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var BooksserviceService = /** @class */ (function () {
    function BooksserviceService(http) {
        this.http = http;
    }
    //Books
    BooksserviceService.prototype.getbooks = function (q) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('q', q);
        return this.http.get('http://localhost/api/ksiazki.php', { params: params });
    };
    BooksserviceService.prototype.getbook = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id', id);
        return this.http.get('http://localhost/api/ksiazki.php', { params: params });
    };
    BooksserviceService.prototype.getTopBooks = function () {
        return this.http.get('http://localhost/api/ksiazki.php?top');
    };
    //Egzemplarze
    BooksserviceService.prototype.getegzemplarze = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id_ksiazki', id);
        return this.http.get('http://localhost/api/egzemplarze.php', { params: params });
    };
    BooksserviceService.prototype.getegzemplarz = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id', id);
        return this.http.get('http://localhost/api/egzemplarze.php', { params: params });
    };
    //Czytelnicy
    BooksserviceService.prototype.getczytelnicy = function () {
        return this.http.get('http://localhost/api/czytelnicy.php?q=');
    };
    BooksserviceService.prototype.getczytelnik = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id', id);
        return this.http.get('http://localhost/api/czytelnicy.php', { params: params });
    };
    //Wypozyczenia
    BooksserviceService.prototype.getallwypozyczenia = function () {
        return this.http.get('http://localhost/api/wypozyczenia.php?q');
    };
    BooksserviceService.prototype.getallwydawnictwa = function () {
        return this.http.get('http://localhost/api/wydawnictwa.php?q');
    };
    //autorzy
    BooksserviceService.prototype.getAllAuthors = function () {
        return this.http.get('http://localhost/api/autorzy.php?q');
    };
    //kategorie
    BooksserviceService.prototype.getAllCategory = function () {
        return this.http.get('http://localhost/api/kategorie.php?q');
    };
    //pracownicy
    BooksserviceService.prototype.getAllPracownicy = function () {
        return this.http.get('http://localhost/api/pracownicy.php?q');
    };
    BooksserviceService.prototype.getZarobki = function () {
        return this.http.get('http://localhost/api/pracownicy.php?zarobki');
    };
    //post
    BooksserviceService.prototype.sendwypozyczenie = function (id_egzemplarza, id_czytelnika, id_pracownika) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('action', 'insert')
            .set('id_egzemplarza', id_egzemplarza)
            .set('id_czytelnika', id_czytelnika)
            .set('id_pracownika', id_pracownika);
        return this.http.post('http://localhost/api/wypozyczenia.php', params, { responseType: 'text' });
    };
    BooksserviceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    BooksserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], BooksserviceService);
    return BooksserviceService;
}());



/***/ }),

/***/ "./src/app/services/insert.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/insert.service.ts ***!
  \********************************************/
/*! exports provided: InsertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InsertService", function() { return InsertService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var InsertService = /** @class */ (function () {
    function InsertService(http) {
        this.http = http;
    }
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
    InsertService.prototype.prolonguj = function (item) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('id_wypozyczenia', item.id_wypozyczenia).set('action', 'modify');
        return this.http.post('http://localhost/api/wypozyczenia.php', params, { responseType: 'text' });
    };
    InsertService.prototype.oddaj = function (item) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('action', 'return')
            .set('id_wypozyczenia', item.id_wypozyczenia)
            .set('id_egzemplarza', item.egzemplarz.id_egzemplarza + '');
        return this.http.post('http://localhost/api/wypozyczenia.php', params, { responseType: 'text' });
    };
    InsertService.prototype.add_czytelnik = function (imie, nazwisko, telefon, email) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('action', 'insert')
            .set('imie', imie)
            .set('nazwisko', nazwisko)
            .set('telefon', telefon)
            .set('email', email);
        return this.http.post('http://localhost/api/czytelnicy.php', params, { responseType: 'text' });
    };
    InsertService.prototype.add_ksiazka = function (tytul, opis, ocena, rok_wydania, wyd, img_url) {
        console.log(img_url);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('action', 'insert')
            .set('tytul', tytul)
            .set('opis', opis)
            .set('ocena', ocena + '')
            .set('rok_wydania', rok_wydania + '')
            .set('id_wydawnictwa', wyd.id_wydawnictwa + '')
            .set('img_url', img_url);
        return this.http.post('http://localhost/api/ksiazki.php', params, { responseType: 'text' });
    };
    InsertService.prototype.add_autor = function (imie, nazwisko) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('action', 'insert')
            .set('imie', imie)
            .set('nazwisko', nazwisko);
        return this.http.post('http://localhost/api/autorzy.php', params, { responseType: 'text' });
    };
    InsertService.prototype.add_kategoria = function (nazwa) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('action', 'insert')
            .set('nazwa', nazwa);
        return this.http.post('http://localhost/api/kategorie.php', params, { responseType: 'text' });
    };
    InsertService.prototype.add_wydawnictwo = function (nazwa) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('action', 'insert')
            .set('nazwa', nazwa);
        return this.http.post('http://localhost/api/wydawnictwa.php', params, { responseType: 'text' });
    };
    InsertService.prototype.add_egzemplarze = function (i, id_ksiazki) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('action', 'insert')
            .set('id_ksiazki', id_ksiazki)
            .set('ilosc', i + '');
        return this.http.post('http://localhost/api/egzemplarze.php', params, { responseType: 'text' });
    };
    InsertService.prototype.edit_Book = function (book) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('action', 'modify')
            .set('book', JSON.stringify(book));
        return this.http.post('http://localhost/api/ksiazki.php', params, { responseType: 'text' });
    };
    InsertService.prototype.add_pracownik = function (imie, nazwisko, haslo, wyplata) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('action', 'insert')
            .set('imie', imie)
            .set('nazwisko', nazwisko)
            .set('haslo', haslo)
            .set('wyplata', wyplata);
        return this.http.post('http://localhost/api/pracownicy.php', params, { responseType: 'text' });
    };
    InsertService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    InsertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], InsertService);
    return InsertService;
}());



/***/ }),

/***/ "./src/app/services/loginservice.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/loginservice.service.ts ***!
  \**************************************************/
/*! exports provided: LoginserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginserviceService", function() { return LoginserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var LoginserviceService = /** @class */ (function () {
    function LoginserviceService(http) {
        this.http = http;
        this.user = null;
        if (localStorage.getItem('user') == null) {
            console.log("brak usera");
        }
        else {
            this.user = JSON.parse(localStorage.getItem('user'));
        }
    }
    LoginserviceService.prototype.zaloguj = function (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.user = user;
    };
    LoginserviceService.prototype.wyloguj = function () {
        localStorage.removeItem('user');
        this.user = null;
    };
    LoginserviceService.prototype.login = function (login, haslo) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('login', login).set('haslo', haslo);
        return this.http.get('http://localhost/api/login.php', { params: params });
    };
    LoginserviceService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    LoginserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], LoginserviceService);
    return LoginserviceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\student\Desktop\Frontend\biblioteka\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map