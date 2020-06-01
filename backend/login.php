<?php
    header("Access-Control-Allow-Origin: *");

    require('conn.php');
    @$conn=oci_connect($login,$haslo,$url,'AL32UTF8');
    //dla loginu
    
    if (isset($_GET['login'])&&isset($_GET['haslo'])) {
        $q = 'select * from pracownicy where login=\''.$_GET['login'].'\' and haslo=\''.$_GET['haslo'].'\'';
        //echo $q;

        if ($conn){
            $result= oci_parse($conn,$q);
            oci_execute($result);
            while($row = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS)){
                $temp=array(
                    "id_pracownika"=>$row['ID_PRACOWNIKA'],
                    "login"=>$row['LOGIN'],
                    "imie"=>$row['IMIE'],
                    "nazwisko"=>$row['NAZWISKO'],
                    "wyplata"=>$row['WYPLATA']
                    
                );
            }
            if (isset($temp)){
                echo json_encode($temp);
            }
            else{
                echo null;
            }
            


        }



    }
    // dla wyszukiwania 













?>