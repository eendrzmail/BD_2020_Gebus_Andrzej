import { Egzemplarz } from './egzemplarz';
import { Czytelnik } from './czytelnik';
import { Pracownik } from './pracownik';

export class Wypozyczenie{
    id_wypozyczenia;
    data_wypozyczenia:Date;
    egzemplarz:Egzemplarz;
    czytelni:Czytelnik;
    pracownik:Pracownik;
    ilosz_prolongacji:number;
    oddano:number;
    data_zwrotu:Date;
}