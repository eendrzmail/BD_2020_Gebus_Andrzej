import {Wydawnictwo} from './wydawnictwo';
import { Autor } from './autor';
import { Kategoria } from './kategoria';
export class Ksiazka{
    id_ksiazki:number;
    tytul:string;
    autorzy: Array<Autor>;
    wydawnictwo:Wydawnictwo;
    kategorie: Array<Kategoria>;
    opis:string;
    ocena:number;
    rok_wydania:number;
    img_url:string; 


}