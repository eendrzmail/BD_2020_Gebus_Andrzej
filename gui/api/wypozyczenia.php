<?php
header("Access-Control-Allow-Origin: *");
    require('conn.php');
    @$conn=oci_connect($login,$haslo,$url,'AL32UTF8');

    // dka konkretnego id
    if (isset($_GET['id'])) {
        $q = 'select * from wypozyczenia where ID_WYPOZYCZENIA='.$_GET['id'];
        //echo $q;

        if ($conn){
            $result= oci_parse($conn,$q);
            oci_execute($result);
            while($row = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS)){
                $temp=array(
                    "id_wypozyczenia"=>$row['ID_WYPOZYCZENIA'],
                    "data_wypozyczenia"=>$row['DATA_WYPOZYCZENIA'],
                    "egzemplarz"=>json_decode(file_get_contents("http://localhost/api/egzemplarze.php?id=".$row['ID_EGZEMPLARZA'])),
                    "czytelnik"=>json_decode(file_get_contents("http://localhost/api/czytelnicy.php?id=".$row['ID_CZYTELNIKA'])),
                    "pracownik"=>json_decode(file_get_contents("http://localhost/api/pracownicy.php?id=".$row['ID_PRACOWNIKA'])),
                    "ilosc_prolongacji"=>$row['ILOSC_PROLONGACJI'],
                    "oddano"=>$row['ODDANO'],
                    "data_zwrotu"=>$row['DATA_ZWROTU']
                    
                );
            }
            echo json_encode($temp);    


        }



    }
    //dla daty
    if (isset($_GET['date'])) {
        $q = 'select * from wypozyczenia where data_wypozyczenia=\''.$_GET['date'].'\'';
        // $q;
        $ret=array();

        if ($conn){
            $result= oci_parse($conn,$q);
            oci_execute($result);
            while($row = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS)){
                $temp=array(
                    "id_wypozyczenia"=>$row['ID_WYPOZYCZENIA'],
                    "data_wypozyczenia"=>$row['DATA_WYPOZYCZENIA'],
                    "egzemplarz"=>json_decode(file_get_contents("http://localhost/api/egzemplarze.php?id=".$row['ID_EGZEMPLARZA'])),
                    "czytelnik"=>json_decode(file_get_contents("http://localhost/api/czytelnicy.php?id=".$row['ID_CZYTELNIKA'])),
                    "pracownik"=>json_decode(file_get_contents("http://localhost/api/pracownicy.php?id=".$row['ID_PRACOWNIKA'])),
                    "ilosc_prolongacji"=>$row['ILOSC_PROLONGACJI'],
                    "oddano"=>$row['ODDANO'],
                    "data_zwrotu"=>$row['DATA_ZWROTU']
                    
                );
                array_push($ret,$temp);
            }
            echo json_encode($ret);


        }



    }
    if (isset($_GET['q'])) {
        $q = 'select * from wypozyczenia order by oddano,data_wypozyczenia desc';
        // $q;
        $ret=array();

        if ($conn){
            $result= oci_parse($conn,$q);
            oci_execute($result);
            while($row = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS)){
                $temp=array(
                    "id_wypozyczenia"=>$row['ID_WYPOZYCZENIA'],
                    "data_wypozyczenia"=>$row['DATA_WYPOZYCZENIA'],
                    "egzemplarz"=>json_decode(file_get_contents("http://localhost/api/egzemplarze.php?id=".$row['ID_EGZEMPLARZA'])),
                    "czytelnik"=>json_decode(file_get_contents("http://localhost/api/czytelnicy.php?id=".$row['ID_CZYTELNIKA'])),
                    "pracownik"=>json_decode(file_get_contents("http://localhost/api/pracownicy.php?id=".$row['ID_PRACOWNIKA'])),
                    "ilosc_prolongacji"=>$row['ILOSC_PROLONGACJI'],
                    "oddano"=>$row['ODDANO'],
                    "data_zwrotu"=>$row['DATA_ZWROTU']
                    
                );
                array_push($ret,$temp);
            }
            echo json_encode($ret);


        }



    }

    // ======================= POST
    if (isset($_POST['action'])){
        //echo $_POST['action'];
        // dodaj nowy
        if ($_POST['action']=='insert'){

            if (isset($_POST['id_egzemplarza']) && isset($_POST['id_czytelnika']) && isset($_POST['id_pracownika'])){
                $q1 = 'insert into wypozyczenia (data_wypozyczenia,id_egzemplarza,id_czytelnika,id_pracownika,ilosc_prolongacji,oddano)
                 values (TO_DATE(\''.date('Y/m/d').'\', \'yyyy/mm/dd\'),'.$_POST['id_egzemplarza'].','.$_POST['id_czytelnika'].','.$_POST['id_pracownika'].',0,0)';

                 //echo $q1;
                 $result= oci_parse($conn,$q1);
                 

                oci_execute($result);

                



                 $q2= 'update egzemplarze set wypozyczona=1 where id_egzemplarza='.$_POST['id_egzemplarza'];
                 $result= oci_parse($conn,$q2);
                 oci_execute($result);
                 echo $result;





            }
        }
        // modyfikacja
        else if ($_POST['action']=='modify'){
            if (isset($_POST['id_wypozyczenia'])){
                $q1='update wypozyczenia set ilosc_prolongacji=ilosc_prolongacji+1 where id_wypozyczenia='.$_POST['id_wypozyczenia'];
                $result= oci_parse($conn,$q1);
                if (oci_execute($result)){
                    echo 'done';
                }

                
            }
        }
        //oddanie
        else if ($_POST['action']=='return'){
            if (isset($_POST['id_wypozyczenia']) && isset($_POST['id_egzemplarza']) ){
                $q1='update wypozyczenia set oddano=1 where id_wypozyczenia='.$_POST['id_wypozyczenia'];
                $q2='update egzemplarze set wypozyczona=0 where id_egzemplarza='.$_POST['id_egzemplarza'];
                
                $result= oci_parse($conn,$q1);
                if (oci_execute($result)){
                    echo 'done1';
                }
                $result=oci_parse($conn,$q2);
                if (oci_execute($result)){
                    echo 'done2';
                }

            }
        }
    }














?>