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

    //zarobki
    //dla loginu
    if (isset($_GET['zarobki'])) {
        $q="begin
        :cursor:=f_wyplaty();
        end;";
    
        $cursor1 = oci_new_cursor($conn);
        $stid= oci_parse($conn,$q);
        oci_bind_by_name($stid,":cursor",$cursor1,-1,OCI_B_CURSOR);
        oci_execute($stid);
        oci_execute($cursor1);
        $temp=array();

        while (($row=oci_fetch_array($cursor1,OCI_ASSOC + OCI_RETURN_NULLS)) != false ){
            $temp=array(
                "mediana"=>$row['MEDIANA'],
                "avg"=>$row['AVG'],
                "odchylenie"=>$row['ODCHYLENIE'],
                "suma"=>$row['SUM']
            );
        }
        echo json_encode($temp);


    }
    

    //post
    if (isset($_POST['action'])){
        //echo $_POST['action'];
        // dodaj nowy
        if ($_POST['action']=='insert'){

            if (isset($_POST['imie']) && isset($_POST['nazwisko']) && isset($_POST['haslo']) && isset($_POST['wyplata']) ){
                $imie=$_POST['imie'];
                $nazwisko=$_POST['nazwisko'];
                $haslo=$_POST['haslo'];
                $wyplata=$_POST['wyplata'];

                $q1 = "insert into pracownicy(imie,nazwisko,haslo,wyplata) values 
                ('$imie','$nazwisko','$haslo',$wyplata)"; 

                 //echo $q1;
                 $result= oci_parse($conn,$q1);
                 oci_execute($result);
            }
        }
    }
















?>