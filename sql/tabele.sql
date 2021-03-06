--------------------------------------------------------
--  File created - �roda-czerwiec-10-2020   
--------------------------------------------------------
-- Unable to render SEQUENCE DDL for object STUDENT.ISEQ$$_92309 with DBMS_METADATA attempting internal generator.
CREATE SEQUENCE ISEQ$$_92309 INCREMENT BY 1 MAXVALUE 9999999999999999999999999999 MINVALUE 1 CACHE 20
-- Unable to render SEQUENCE DDL for object STUDENT.ISEQ$$_92319 with DBMS_METADATA attempting internal generator.
CREATE SEQUENCE ISEQ$$_92319 INCREMENT BY 1 MAXVALUE 9999999999999999999999999999 MINVALUE 1 CACHE 20
-- Unable to render SEQUENCE DDL for object STUDENT.ISEQ$$_92326 with DBMS_METADATA attempting internal generator.
CREATE SEQUENCE ISEQ$$_92326 INCREMENT BY 1 MAXVALUE 9999999999999999999999999999 MINVALUE 1 CACHE 20
-- Unable to render SEQUENCE DDL for object STUDENT.ISEQ$$_92329 with DBMS_METADATA attempting internal generator.
CREATE SEQUENCE ISEQ$$_92329 INCREMENT BY 1 MAXVALUE 9999999999999999999999999999 MINVALUE 1 CACHE 20
-- Unable to render SEQUENCE DDL for object STUDENT.ISEQ$$_92332 with DBMS_METADATA attempting internal generator.
CREATE SEQUENCE ISEQ$$_92332 INCREMENT BY 1 MAXVALUE 9999999999999999999999999999 MINVALUE 1 CACHE 20
-- Unable to render SEQUENCE DDL for object STUDENT.ISEQ$$_92335 with DBMS_METADATA attempting internal generator.
CREATE SEQUENCE ISEQ$$_92335 INCREMENT BY 1 MAXVALUE 9999999999999999999999999999 MINVALUE 1 CACHE 20
-- Unable to render SEQUENCE DDL for object STUDENT.ISEQ$$_92364 with DBMS_METADATA attempting internal generator.
CREATE SEQUENCE ISEQ$$_92364 INCREMENT BY 1 MAXVALUE 9999999999999999999999999999 MINVALUE 1 CACHE 20
-- Unable to render SEQUENCE DDL for object STUDENT.ISEQ$$_92367 with DBMS_METADATA attempting internal generator.
CREATE SEQUENCE ISEQ$$_92367 INCREMENT BY 1 MAXVALUE 9999999999999999999999999999 MINVALUE 1 CACHE 20
-- Unable to render SEQUENCE DDL for object STUDENT.ISEQ$$_92370 with DBMS_METADATA attempting internal generator.
CREATE SEQUENCE ISEQ$$_92370 INCREMENT BY 1 MAXVALUE 9999999999999999999999999999 MINVALUE 1 CACHE 20
--------------------------------------------------------
--  DDL for Table AUTORZY
--------------------------------------------------------

  CREATE TABLE "STUDENT"."AUTORZY" 
   (	"ID_AUTORA" NUMBER GENERATED ALWAYS AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE , 
	"IMIE" VARCHAR2(20 BYTE), 
	"NAZWISKO" VARCHAR2(20 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TMP_2K" ;
--------------------------------------------------------
--  DDL for Table CZYTELNICY
--------------------------------------------------------

  CREATE TABLE "STUDENT"."CZYTELNICY" 
   (	"ID_CZYTELNIKA" NUMBER GENERATED ALWAYS AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE , 
	"IMIE" VARCHAR2(20 BYTE), 
	"NAZWISKO" VARCHAR2(20 BYTE), 
	"TELEFON" VARCHAR2(20 BYTE), 
	"EMAIL" VARCHAR2(20 BYTE), 
	 CONSTRAINT "CZYTELNICY_PK" PRIMARY KEY ("ID_CZYTELNIKA") ENABLE
   ) ORGANIZATION INDEX NOCOMPRESS PCTFREE 10 INITRANS 2 MAXTRANS 255 LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TMP_2K" 
 PCTTHRESHOLD 50;
--------------------------------------------------------
--  DDL for Table EGZEMPLARZE
--------------------------------------------------------

  CREATE TABLE "STUDENT"."EGZEMPLARZE" 
   (	"ID_EGZEMPLARZA" NUMBER GENERATED ALWAYS AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE , 
	"ID_KSIAZKI" NUMBER, 
	"WYPOZYCZONA" NUMBER
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TMP_2K" ;
--------------------------------------------------------
--  DDL for Table KATEGORIE
--------------------------------------------------------

  CREATE TABLE "STUDENT"."KATEGORIE" 
   (	"ID_KATEGORII" NUMBER GENERATED ALWAYS AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE , 
	"NAZWA" VARCHAR2(20 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TMP_2K" ;
--------------------------------------------------------
--  DDL for Table KSIAZKI
--------------------------------------------------------

  CREATE TABLE "STUDENT"."KSIAZKI" 
   (	"ID_KSIAZKI" NUMBER GENERATED ALWAYS AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE , 
	"TYTUL" VARCHAR2(50 BYTE), 
	"ID_WYDAWNICTWA" NUMBER, 
	"OPIS" VARCHAR2(200 BYTE), 
	"OCENA" NUMBER, 
	"ROK_WYDANIA" NUMBER, 
	"IMG_URL" VARCHAR2(250 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TMP_2K" ;
--------------------------------------------------------
--  DDL for Table KSIAZKI_AUTORZY
--------------------------------------------------------

  CREATE TABLE "STUDENT"."KSIAZKI_AUTORZY" 
   (	"ID_KSIAZKI" NUMBER, 
	"ID_AUTORA" NUMBER
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TMP_2K" ;
--------------------------------------------------------
--  DDL for Table KSIAZKI_KATEGORIE
--------------------------------------------------------

  CREATE TABLE "STUDENT"."KSIAZKI_KATEGORIE" 
   (	"ID_KSIAZKI" NUMBER, 
	"ID_KATEGORII" NUMBER
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TMP_2K" ;
--------------------------------------------------------
--  DDL for Table PRACOWNICY
--------------------------------------------------------

  CREATE TABLE "STUDENT"."PRACOWNICY" 
   (	"ID_PRACOWNIKA" NUMBER GENERATED ALWAYS AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE , 
	"LOGIN" VARCHAR2(20 BYTE), 
	"HASLO" VARCHAR2(20 BYTE), 
	"IMIE" VARCHAR2(20 BYTE), 
	"NAZWISKO" VARCHAR2(20 BYTE), 
	"WYPLATA" NUMBER
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TMP_2K" ;
--------------------------------------------------------
--  DDL for Table WYDAWNICTWA
--------------------------------------------------------

  CREATE TABLE "STUDENT"."WYDAWNICTWA" 
   (	"ID_WYDAWNICTWA" NUMBER GENERATED ALWAYS AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE , 
	"NAZWA" VARCHAR2(50 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TMP_2K" ;
--------------------------------------------------------
--  DDL for Table WYPOZYCZENIA
--------------------------------------------------------

  CREATE TABLE "STUDENT"."WYPOZYCZENIA" 
   (	"ID_WYPOZYCZENIA" NUMBER GENERATED ALWAYS AS IDENTITY MINVALUE 1 MAXVALUE 9999999999999999999999999999 INCREMENT BY 1 START WITH 1 CACHE 20 NOORDER  NOCYCLE , 
	"DATA_WYPOZYCZENIA" DATE, 
	"ID_EGZEMPLARZA" NUMBER, 
	"ID_CZYTELNIKA" NUMBER, 
	"ID_PRACOWNIKA" NUMBER, 
	"ILOSC_PROLONGACJI" NUMBER, 
	"ODDANO" NUMBER, 
	"DATA_ZWROTU" DATE
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TMP_2K" ;
--------------------------------------------------------
--  DDL for View AUTORZYVIEW
--------------------------------------------------------

  CREATE OR REPLACE FORCE EDITIONABLE VIEW "STUDENT"."AUTORZYVIEW" ("ID_KSIAZKI", "TYTUL", "ID_WYDAWNICTWA", "OPIS", "OCENA", "ROK_WYDANIA", "ID_AUTORA", "IMIE", "NAZWISKO") AS 
  SELECT distinct  KSIAZKI."ID_KSIAZKI",KSIAZKI."TYTUL",KSIAZKI."ID_WYDAWNICTWA",KSIAZKI."OPIS",KSIAZKI."OCENA",KSIAZKI."ROK_WYDANIA",AUTORZY.ID_AUTORA,AUTORZY.IMIE,AUTORZY.NAZWISKO FROM KSIAZKI INNER JOIN ksiazki_autorzy ON ksiazki.id_ksiazki=ksiazki_autorzy.id_ksiazki INNER JOIN AUTORZY ON KSIAZKI_AUTORZY.ID_AUTORA=AUTORZY.ID_AUTORA;
--------------------------------------------------------
--  DDL for View KATEGORIEVIEW
--------------------------------------------------------

  CREATE OR REPLACE FORCE EDITIONABLE VIEW "STUDENT"."KATEGORIEVIEW" ("ID_KSIAZKI", "TYTUL", "ID_WYDAWNICTWA", "OPIS", "OCENA", "ROK_WYDANIA", "ID_KATEGORII", "NAZWA") AS 
  SELECT KSIAZKI."ID_KSIAZKI",KSIAZKI."TYTUL",KSIAZKI."ID_WYDAWNICTWA",KSIAZKI."OPIS",KSIAZKI."OCENA",KSIAZKI."ROK_WYDANIA",KATEGORIE.ID_KATEGORII,KATEGORIE.NAZWA FROM KSIAZKI INNER JOIN KSIAZKI_KATEGORIE ON ksiazki.id_ksiazki=ksiazki_KATEGORIE.id_ksiazki INNER JOIN KATEGORIE ON KSIAZKI_KATEGORIE.ID_KATEGORII=KATEGORIE.ID_KATEGORII;
--------------------------------------------------------
--  DDL for Index WYPOZYCZENIA_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "STUDENT"."WYPOZYCZENIA_PK" ON "STUDENT"."WYPOZYCZENIA" ("ID_WYPOZYCZENIA") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TMP_2K" ;
--------------------------------------------------------
--  DDL for Index EGZEMPLARZE_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "STUDENT"."EGZEMPLARZE_PK" ON "STUDENT"."EGZEMPLARZE" ("ID_EGZEMPLARZA") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TMP_2K" ;
--------------------------------------------------------
--  DDL for Index KSIAZKI_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "STUDENT"."KSIAZKI_PK" ON "STUDENT"."KSIAZKI" ("ID_KSIAZKI") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TMP_2K" ;
--------------------------------------------------------
--  DDL for Index WYDAWNICTWA_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "STUDENT"."WYDAWNICTWA_PK" ON "STUDENT"."WYDAWNICTWA" ("ID_WYDAWNICTWA") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TMP_2K" ;
--------------------------------------------------------
--  DDL for Index KATEGORIE_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "STUDENT"."KATEGORIE_PK" ON "STUDENT"."KATEGORIE" ("ID_KATEGORII") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TMP_2K" ;
--------------------------------------------------------
--  DDL for Index AUTORZY_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "STUDENT"."AUTORZY_PK" ON "STUDENT"."AUTORZY" ("ID_AUTORA") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TMP_2K" ;
--------------------------------------------------------
--  DDL for Index PRACOWWNICY_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "STUDENT"."PRACOWWNICY_PK" ON "STUDENT"."PRACOWNICY" ("ID_PRACOWNIKA") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TMP_2K" ;
--------------------------------------------------------
--  DDL for Index CZYTELNICY_PK
--------------------------------------------------------

  CREATE UNIQUE INDEX "STUDENT"."CZYTELNICY_PK" ON "STUDENT"."CZYTELNICY" ("ID_CZYTELNIKA") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TMP_2K" ;
--------------------------------------------------------
--  Constraints for Table WYPOZYCZENIA
--------------------------------------------------------

  ALTER TABLE "STUDENT"."WYPOZYCZENIA" MODIFY ("ID_WYPOZYCZENIA" NOT NULL ENABLE);
  ALTER TABLE "STUDENT"."WYPOZYCZENIA" ADD CONSTRAINT "WYPOZYCZENIA_PK" PRIMARY KEY ("ID_WYPOZYCZENIA")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TMP_2K"  ENABLE;
--------------------------------------------------------
--  Constraints for Table CZYTELNICY
--------------------------------------------------------

  ALTER TABLE "STUDENT"."CZYTELNICY" MODIFY ("ID_CZYTELNIKA" NOT NULL ENABLE);
  ALTER TABLE "STUDENT"."CZYTELNICY" ADD CONSTRAINT "CZYTELNICY_PK" PRIMARY KEY ("ID_CZYTELNIKA")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TMP_2K"  ENABLE;
--------------------------------------------------------
--  Constraints for Table KSIAZKI_KATEGORIE
--------------------------------------------------------

  ALTER TABLE "STUDENT"."KSIAZKI_KATEGORIE" MODIFY ("ID_KSIAZKI" NOT NULL ENABLE);
  ALTER TABLE "STUDENT"."KSIAZKI_KATEGORIE" MODIFY ("ID_KATEGORII" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table KSIAZKI_AUTORZY
--------------------------------------------------------

  ALTER TABLE "STUDENT"."KSIAZKI_AUTORZY" MODIFY ("ID_KSIAZKI" NOT NULL ENABLE);
  ALTER TABLE "STUDENT"."KSIAZKI_AUTORZY" MODIFY ("ID_AUTORA" NOT NULL ENABLE);
--------------------------------------------------------
--  Constraints for Table KSIAZKI
--------------------------------------------------------

  ALTER TABLE "STUDENT"."KSIAZKI" MODIFY ("ID_KSIAZKI" NOT NULL ENABLE);
  ALTER TABLE "STUDENT"."KSIAZKI" ADD CONSTRAINT "KSIAZKI_PK" PRIMARY KEY ("ID_KSIAZKI")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TMP_2K"  ENABLE;
--------------------------------------------------------
--  Constraints for Table EGZEMPLARZE
--------------------------------------------------------

  ALTER TABLE "STUDENT"."EGZEMPLARZE" MODIFY ("ID_EGZEMPLARZA" NOT NULL ENABLE);
  ALTER TABLE "STUDENT"."EGZEMPLARZE" ADD CONSTRAINT "EGZEMPLARZE_PK" PRIMARY KEY ("ID_EGZEMPLARZA")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TMP_2K"  ENABLE;
--------------------------------------------------------
--  Constraints for Table AUTORZY
--------------------------------------------------------

  ALTER TABLE "STUDENT"."AUTORZY" MODIFY ("ID_AUTORA" NOT NULL ENABLE);
  ALTER TABLE "STUDENT"."AUTORZY" ADD CONSTRAINT "AUTORZY_PK" PRIMARY KEY ("ID_AUTORA")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TMP_2K"  ENABLE;
--------------------------------------------------------
--  Constraints for Table PRACOWNICY
--------------------------------------------------------

  ALTER TABLE "STUDENT"."PRACOWNICY" MODIFY ("ID_PRACOWNIKA" NOT NULL ENABLE);
  ALTER TABLE "STUDENT"."PRACOWNICY" MODIFY ("HASLO" NOT NULL ENABLE);
  ALTER TABLE "STUDENT"."PRACOWNICY" MODIFY ("IMIE" NOT NULL ENABLE);
  ALTER TABLE "STUDENT"."PRACOWNICY" MODIFY ("NAZWISKO" NOT NULL ENABLE);
  ALTER TABLE "STUDENT"."PRACOWNICY" MODIFY ("WYPLATA" NOT NULL ENABLE);
  ALTER TABLE "STUDENT"."PRACOWNICY" ADD CONSTRAINT "PRACOWWNICY_PK" PRIMARY KEY ("ID_PRACOWNIKA")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TMP_2K"  ENABLE;
--------------------------------------------------------
--  Constraints for Table KATEGORIE
--------------------------------------------------------

  ALTER TABLE "STUDENT"."KATEGORIE" MODIFY ("ID_KATEGORII" NOT NULL ENABLE);
  ALTER TABLE "STUDENT"."KATEGORIE" ADD CONSTRAINT "KATEGORIE_PK" PRIMARY KEY ("ID_KATEGORII")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TMP_2K"  ENABLE;
--------------------------------------------------------
--  Constraints for Table WYDAWNICTWA
--------------------------------------------------------

  ALTER TABLE "STUDENT"."WYDAWNICTWA" MODIFY ("ID_WYDAWNICTWA" NOT NULL ENABLE);
  ALTER TABLE "STUDENT"."WYDAWNICTWA" ADD CONSTRAINT "WYDAWNICTWA_PK" PRIMARY KEY ("ID_WYDAWNICTWA")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "TMP_2K"  ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table EGZEMPLARZE
--------------------------------------------------------

  ALTER TABLE "STUDENT"."EGZEMPLARZE" ADD CONSTRAINT "FK_EGZEMPLARZE" FOREIGN KEY ("ID_KSIAZKI")
	  REFERENCES "STUDENT"."KSIAZKI" ("ID_KSIAZKI") ON DELETE SET NULL ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table KSIAZKI
--------------------------------------------------------

  ALTER TABLE "STUDENT"."KSIAZKI" ADD CONSTRAINT "FK_WYDAWNICTWA" FOREIGN KEY ("ID_WYDAWNICTWA")
	  REFERENCES "STUDENT"."WYDAWNICTWA" ("ID_WYDAWNICTWA") ON DELETE SET NULL ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table KSIAZKI_AUTORZY
--------------------------------------------------------

  ALTER TABLE "STUDENT"."KSIAZKI_AUTORZY" ADD CONSTRAINT "FK_AUTORZYKSIAZEK" FOREIGN KEY ("ID_AUTORA")
	  REFERENCES "STUDENT"."AUTORZY" ("ID_AUTORA") ON DELETE SET NULL ENABLE;
  ALTER TABLE "STUDENT"."KSIAZKI_AUTORZY" ADD CONSTRAINT "FK_AUTORZYKSIAZEK2" FOREIGN KEY ("ID_KSIAZKI")
	  REFERENCES "STUDENT"."KSIAZKI" ("ID_KSIAZKI") ON DELETE SET NULL ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table KSIAZKI_KATEGORIE
--------------------------------------------------------

  ALTER TABLE "STUDENT"."KSIAZKI_KATEGORIE" ADD CONSTRAINT "FK_KATEGORIEKSIAZEK" FOREIGN KEY ("ID_KATEGORII")
	  REFERENCES "STUDENT"."KATEGORIE" ("ID_KATEGORII") ON DELETE SET NULL ENABLE;
  ALTER TABLE "STUDENT"."KSIAZKI_KATEGORIE" ADD CONSTRAINT "FK_KATEGORIEKSIAZEK2" FOREIGN KEY ("ID_KSIAZKI")
	  REFERENCES "STUDENT"."KSIAZKI" ("ID_KSIAZKI") ON DELETE SET NULL ENABLE;
--------------------------------------------------------
--  Ref Constraints for Table WYPOZYCZENIA
--------------------------------------------------------

  ALTER TABLE "STUDENT"."WYPOZYCZENIA" ADD CONSTRAINT "FK_WYPOZYCZENIACZYTELNICY" FOREIGN KEY ("ID_CZYTELNIKA")
	  REFERENCES "STUDENT"."CZYTELNICY" ("ID_CZYTELNIKA") ON DELETE SET NULL ENABLE;
  ALTER TABLE "STUDENT"."WYPOZYCZENIA" ADD CONSTRAINT "FK_WYPOZYCZENIAEGZEMPLARZE" FOREIGN KEY ("ID_EGZEMPLARZA")
	  REFERENCES "STUDENT"."EGZEMPLARZE" ("ID_EGZEMPLARZA") ON DELETE SET NULL ENABLE;
  ALTER TABLE "STUDENT"."WYPOZYCZENIA" ADD CONSTRAINT "FK_WYPOZYCZENIAPRACOWNICY" FOREIGN KEY ("ID_PRACOWNIKA")
	  REFERENCES "STUDENT"."PRACOWNICY" ("ID_PRACOWNIKA") ON DELETE SET NULL ENABLE;
