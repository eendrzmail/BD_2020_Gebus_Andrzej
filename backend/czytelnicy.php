<?php
header("Access-Control-Allow-Origin: *");
    require('conn.php');
    @$conn=oci_connect($login,$haslo,$url,'AL32UTF8');

    // dka konkretnego id
    if (isset($_GET['id'])) {
        $q = 'select * from czytelnicy where ID_CZYTELNIKA='.$_GET['id'];
        //echo $q;
        $temp=null;

        if ($conn){
            $result= oci_parse($conn,$q);
            oci_execute($result);
            while($row = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS)){
                $temp=array(
                    "id_czytelnika"=>$row['ID_CZYTELNIKA'],
                    "imie"=>$row['IMIE'],
                    "nazwisko"=>$row['NAZWISKO'],
                    "telefon"=>$row['TELEFON'],
                    "email"=>$row['EMAIL']
                    
                );
            }
            
            echo json_encode($temp);


        }



    }
    // dla wyszukiwania 
    else if (isset($_GET['q'])){
        $return=array();
        $q = "select * from CZYTELNICY where upper(imie) like '%".strtoupper($_GET['q'])."%' or upper(nazwisko) like '%".strtoupper($_GET['q'])."%'";
        //echo $q;    

        if ($conn){
            $result= oci_parse($conn,$q);
            oci_execute($result);
            while($row = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS)){
                $temp=array(
                    
                    "id_czytelnika"=>$row['ID_CZYTELNIKA'],
                    "imie"=>$row['IMIE'],
                    "nazwisko"=>$row['NAZWISKO'],
                    "telefon"=>$row['TELEFON'],
                    "email"=>$row['EMAIL']
                    
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

            if (isset($_POST['imie']) && isset($_POST['nazwisko']) && isset($_POST['telefon']) && isset($_POST['email']) ){
                $q1 = 'insert into czytelnicy(imie,nazwisko,telefon,email) values 
                (\''.$_POST['imie'].'\',\''.$_POST['nazwisko'].'\','.$_POST['telefon'].',\''.$_POST['email'].'\')'; 

                 //echo $q1;
                 $result= oci_parse($conn,$q1);
                 oci_execute($result);
            }
        }
    }
















?>