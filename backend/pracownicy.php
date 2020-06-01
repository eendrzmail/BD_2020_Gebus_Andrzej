<?php
header("Access-Control-Allow-Origin: *");
    require('conn.php');
    @$conn=oci_connect($login,$haslo,$url,'AL32UTF8');

    // dka konkretnego id
    if (isset($_GET['id'])) {
        $q = 'select * from pracownicy where ID_PRACOWNIKA='.$_GET['id'];
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
            echo json_encode($temp);


        }



    }
    //dla loginu
    if (isset($_GET['login'])) {
        $q = 'select * from pracownicy where login=\''.$_GET['login'].'\'';
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
            echo json_encode($temp);


        }



    }
    // dla wyszukiwania 
    else if (isset($_GET['q'])){
        $return=array();
        $q = "select * from pracownicy where upper(imie) like '%".strtoupper($_GET['q'])."%' or upper(nazwisko) like '%".strtoupper($_GET['q'])."%'";
        //echo $q;    

        if ($conn){
            $result= oci_parse($conn,$q);
            oci_execute($result);
            while($row = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS)){
                $temp=array(
                    
                    "id_pracownika"=>$row['ID_PRACOWNIKA'],
                    "login"=>$row['LOGIN'],
                    "haslo"=>$row['HASLO'],
                    "imie"=>$row['IMIE'],
                    "nazwisko"=>$row['NAZWISKO'],
                    "wyplata"=>$row['WYPLATA']
                    
                );
                array_push($return,$temp);
            }
            echo json_encode($return);


        }
    }
















?>