<?php
header("Access-Control-Allow-Origin: *");
    require('conn.php');
    @$conn=oci_connect($login,$haslo,$url,'AL32UTF8');

    // dka konkretnego id
    if (isset($_GET['id'])) {
        $q = 'select * from wydawnictwa where ID_WYDAWNICTWA='.$_GET['id'];
        //echo $q;

        if ($conn){
            $result= oci_parse($conn,$q);
            oci_execute($result);
            while($row = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS)){
                $temp=array(
                    "id_wydawnictwa"=>$row['ID_WYDAWNICTWA'],
                    "nazwa"=>$row['NAZWA']
                    
                    
                );
            }
            echo json_encode($temp);


        }



    }
    // dla wyszukiwania 
    else if (isset($_GET['q'])){
        $return=array();
        $q = "select * from wydawnictwa where upper(nazwa) like '%".strtoupper($_GET['q'])."%'";
        //echo $q;    

        if ($conn){
            $result= oci_parse($conn,$q);
            oci_execute($result);
            while($row = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS)){
                $temp=array(
                    
                    "id_wydawnictwa"=>$row['ID_WYDAWNICTWA'],
                    "nazwa"=>$row['NAZWA']
                    
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
            if (isset($_POST['nazwa']) ){
                $q= 'insert into wydawnictwa (nazwa) values (\''.$_POST['nazwa'].'\')';
                

                 echo $q;
                 $result= oci_parse($conn,$q);
                 oci_execute($result);
            }
        }
    }
















?>