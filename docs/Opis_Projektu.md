Projekt ma na celu utworzenie aplikacji do obsługi biblioteki.

Plik erd.png przedstawia diagram erd bazy danych, którą zamierzamy utworzyć.

Do stworzenia warstwy GUI zamierzamy użyć języków php oraz javascript.
Zależnie od nadanych uprawnień pracownicy będą mieli dostęp do osobnej formy strony zawierającej CMS.
Możliwość ta pojawi się po zalogowaniu się pracownika.Osoby posiadające najwyższe
Uprawnienia(zarządcy filii) będą uprawnieni do zmiany kadr.

#Założenia bazy danych:

Książka:
  - może mieć kilku autorów (tabela łącząca)
  - może mieć tylko jedno wydawnictwo
  - może istnieć wiele egzamplarzy jednej książki
  - jest przypisana do danej filii

Wypożyczenia:
  • Podczas wypożyczenia do bazy zapisywane są dane takie jak:
    - wypożyczany egzemplarz
    - czytelnik
    - obsługujący pracownik
    - filia w której zostaje wypożyczona książka
  • Pracownik filii może na życzenie klienta prolongować daną książkę po jej wypożyczeniu na kolejne 14dni
  
Filie:
  - każda filia ma swojego zarządcę, który jest wybierany spośród pracowników danej filii
  
Pracownicy:
  - każdy pracownik jest przypisany do jakiejś filii
  

