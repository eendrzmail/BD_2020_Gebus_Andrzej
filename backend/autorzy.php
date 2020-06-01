<?php
header("Access-Control-Allow-Origin: *");
    require('conn.php');
    @$conn=oci_connect($login,$haslo,$url,'AL32UTF8');

    // dka konkretnego id
    if (isset($_GET['id'])) {
        $q = 'select * from autorzy where ID_AUTORA='.$_GET['id'];
        //echo $q;

        if ($conn){
            $result= oci_parse($conn,$q);
            oci_execute($result);
            while($row = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS)){
                $temp=array(
                    "id_autora"=>$row['ID_AUTORA'],
                    "imie"=>$row['IMIE'],
                    "nazwisko"=>$row['NAZWISKO']
                    
                );
            }
            echo json_encode($temp);


        }



    }
    //  dla konkretnej ksiazki
    else if (isset($_GET['id_ksiazki'])){

        $return=array();
        $q = 'select * from autorzyview where id_ksiazki='.$_GET['id_ksiazki'];
        
        if ($conn){
            $result= oci_parse($conn,$q);
            oci_execute($result);
            while($row = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS)){
                $temp=array(
                    "id_autora"=>$row['ID_AUTORA'],
                    "imie"=>$row['IMIE'],
                    "nazwisko"=>$row['NAZWISKO']
                    
                );
                array_push($return,$temp);
            }
            echo json_encode($return);


        }



    }
    // dla wyszukiwania 
    else if (isset($_GET['q'])){
        $return=array();
        $q = "select * from autorzy where upper(imie) like '%".strtoupper($_GET['q'])."%' or upper(nazwisko) like '%".strtoupper($_GET['q'])."%'";
        //echo $q;    

        if ($conn){
            $result= oci_parse($conn,$q);
            oci_execute($result);
            while($row = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS)){
                $temp=array(
                    "id_autora"=>$row['ID_AUTORA'],
                    "imie"=>$row['IMIE'],
                    "nazwisko"=>$row['NAZWISKO']
                    
                );
                array_push($return,$temp);
            }
            echo json_encode($return);


        }
    }

    //post 
    if (isset($_POST['action'])){
        //echo $_POST['action'];
        // dodaj nowy
        if ($_POST['action']=='insert'){
            //var_dump($_POST);
            if (isset($_POST['imie']) && isset($_POST['nazwisko']) ){
                $q= 'insert into autorzy (imie,nazwisko) values (\''.$_POST['imie'].'\',\''.$_POST['nazwisko'].'\')';
                

                 echo $q;
                 $result= oci_parse($conn,$q);
                 oci_execute($result);
            }
        }
    }
















?>