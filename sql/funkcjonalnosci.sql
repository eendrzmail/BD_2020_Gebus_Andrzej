--------------------------------------------------------
--  DDL for Trigger CALCULATEDATE
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE TRIGGER "STUDENT"."CALCULATEDATE" 
before update ON wypozyczenia 
for each row
declare
  nowa_data date;
begin
  nowa_data:=:old.data_wypozyczenia;
  nowa_data:=nowa_data+30+(:new.ilosc_prolongacji*7);
  :new.data_zwrotu:=nowa_data;
  dbms_output.put_line('data: '||nowa_data);
end;
/
ALTER TRIGGER "STUDENT"."CALCULATEDATE" ENABLE;
--------------------------------------------------------
--  DDL for Trigger FIRSTCALCULATEDATE
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE TRIGGER "STUDENT"."FIRSTCALCULATEDATE" 
before insert ON wypozyczenia 
for each row
declare
  nowa_data date;
begin
  nowa_data:=SYSDATE;
  nowa_data:=nowa_data+30;
  :new.data_zwrotu:=nowa_data;
end;
/
ALTER TRIGGER "STUDENT"."FIRSTCALCULATEDATE" ENABLE;
--------------------------------------------------------
--  DDL for Trigger GENERATELOGIN
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE TRIGGER "STUDENT"."GENERATELOGIN" 
BEFORE INSERT ON PRACOWNICY 
for each row
declare
  nazwa varchar2(20);
begin
  nazwa:=concat(substr(:new.imie,0,2),substr(:new.nazwisko,-2,2));
  :new.login:=lower(nazwa);
  dbms_output.put_line('login: '||nazwa);
end;
/
ALTER TRIGGER "STUDENT"."GENERATELOGIN" ENABLE;
--------------------------------------------------------
--  DDL for Function F_WYPLATY
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE FUNCTION "STUDENT"."F_WYPLATY" 
  return SYS_REFCURSOR
as
  my_cursor SYS_REFCURSOR;
  mediana NUMBER;
  squery varchar2(500);
begin
  squery:='select median(wyplata) as mediana,avg(wyplata) as avg,StdDev(wyplata) as odchylenie,sum(wyplata) as sum from pracownicy';
  open my_cursor for squery;
  return my_cursor;
END f_wyplaty;

/
--------------------------------------------------------
--  DDL for Package TOPKSIAZEK
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE PACKAGE "STUDENT"."TOPKSIAZEK" AS
PROCEDURE top_ksiazek (ksiazki OUT SYS_REFCURSOR);
END topksiazek;

/
--------------------------------------------------------
--  DDL for Package Body TOPKSIAZEK
--------------------------------------------------------

  CREATE OR REPLACE EDITIONABLE PACKAGE BODY "STUDENT"."TOPKSIAZEK" AS
PROCEDURE top_ksiazek (ksiazki OUT SYS_REFCURSOR) AS
BEGIN
OPEN ksiazki FOR
Select * from ksiazki where rownum<=6 order by ocena desc;
END top_ksiazek;
END topksiazek;

/
--------------------------------------------------------
--  DDL for Procedure PR_WYPLATY
--------------------------------------------------------
set define off;

  CREATE OR REPLACE EDITIONABLE PROCEDURE "STUDENT"."PR_WYPLATY" is
  mediana NUMBER;
begin
  select median(wyplata)
  into mediana
  from pracownicy;
  dbms_output.put_line(mediana);
END pr_wyplaty;

/
