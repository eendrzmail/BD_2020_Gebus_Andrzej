## Backend w php podzieony jest na kilka endpointów rest api
Poszczególne endpointy przyjmują określone parametry http oraz na ich podstawie zwracają dane:

### localhost/api/wypozyczenia.php
#### - zapytania GET
  - id :zwraca wypożyczenie o podanym id
  - date :zwraza tabelę wypożyczeń z podanej daty
  - q :zwraca wszystkie wypożyczenia posortowane wegług oddania a następnie daty wypożyczenia
#### - zapytania POST
  - action :wymagany parametr decydujący o następnym kroku:
    - 'insert':
      - id_egzemplarza
      - id_czytelnika
      - id_pracownika :wszystkie powyższe są wymagane, dodaje nowe wypożyczenie zgodnie z parametrami
    - 'modify'
      - id_wypozyczenia :prolonguje wypożyczenie
    - 'return'
      - id_wypozyczenia
      - id_egzemplarza :obydwa wymagane, zwraca podany egzemplarz
      
### localhost/api/pracownicy.php
#### - zapytania GET
  - id :zwraca pracownika o podanym id
  - login :zwraca pracownika o podanym loginie
  - q :zwraca wszystkie pracowników o imieniu lub nazwisku zgodnym z ciągiem znaków
#### - zapytania POST
  - action :wymagany parametr decydujący o następnym kroku:
    - 'insert':
      - imie
      - nazwisko
      - haslo
      - wyplata : Wszystkie wymagane, wstawia pracownika o podanych parametrach oraz generuje mu login.
  


### localhost/api/czytelnicy.php
#### - zapytania GET
  - id :zwraca czytelnika o podanym id
  - q :zwraca wszystkich czytelników o imieniu lub nazwisku zgodnym z ciągiem znaków
#### - zapytania POST
  - action :wymagany parametr decydujący o następnym kroku:
    - 'insert':
      - imie
      - nazwisko
      - telefon
      - email : wszystkie wymagane, wstawia czytelnika do bazy danych
  
### localhost/api/login.php
#### - zapytania GET
  - login 
  - haslo :obydwa wymagane, zwraca pracowwnika o ile zgadzają się login oraz hasło

### localhost/api/egzemplarze.php
#### - zapytania GET
  - id :zwraca egzemplarz o podanym id
  - id_ksiazki :zwraca wszystkie egzemplarze danej książki


### localhost/api/ksiazki.php
#### - zapytania GET
  - id :zwraca ksiazke o podanym id
  - q :zwraca wszystkie ksiazki zgodne z ciągiem znaków
#### - zapytania POST
  - action :wymagany parametr decydujący o następnym kroku:
    - 'insert':
      - tytul
      - opis
      - ocena
      - rok_wydania
      - id_wydawnictwa :wszystkie powyższe parametry wymagane, dodaje do bazy danych nową książkę
      - img_url : niewymagany, podany z poprzedmini dodaje książkę z adresem url do obrazka

### localhost/api/autorzy.php
#### - zapytania GET
  - id :zwraca autora o podanym id
  - id_ksiazki :zwraca wszystkich autorów danej książki
  - q :zwraca wszystkich autorów o imieniu lub nazwisku zgodnym z ciągiem znaków
#### - zapytania POST
  - action :wymagany parametr decydujący o następnym kroku:
    - 'insert':
      - imie
      - nazwisko : obydwa wymagane, wstawia autora i podanym imieniu i nazwisku
  
  
### localhost/api/kategorie.php
#### - zapytania GET
  - id :zwraca kategorię o podanym id
  - id_ksiazki :zwraca wszystkie kategorie danej książki
  - q :zwraca wszystkie kategorie zgodnye z ciągiem znaków
#### - zapytania POST
  - action :wymagany parametr decydujący o następnym kroku:
    - 'insert':
      - nazwa : wstawia kategorię o podanej nazwie

### localhost/api/wydawnictwa.php
#### - zapytania GET
  - id :zwraca wydawnictwo o podanym id
  - q :zwraca wszystkie wydawnictwa zgodnye z ciągiem znaków
#### - zapytania POST
  - action :wymagany parametr decydujący o następnym kroku:
    - 'insert':
      - nazwa : wstawia wydawnictwo o podanej nazwie













