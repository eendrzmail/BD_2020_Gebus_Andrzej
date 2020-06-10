<?php
header("Access-Control-Allow-Origin: *");
    require('conn.php');
    @$conn=oci_connect($login,$haslo,$url,'AL32UTF8');

    // dka konkretnego id
    if (isset($_GET['id'])) {
        $q = 'select * from kategorie where ID_KATEGORII='.$_GET['id'];
        //echo $q;

        if ($conn){
            $result= oci_parse($conn,$q);
            oci_execute($result);
            while($row = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS)){
                $temp=array(
                    "id_kategorii"=>$row['ID_KATEGORII'],
                    "nazwa"=>$row['NAZWA']
                    
                    
                );
            }
            echo json_encode($temp);


        }



    }
    //  dla konkretnej ksiazki
    else if (isset($_GET['id_ksiazki'])){

        $return=array();
        $q = 'select * from kategorieview where id_ksiazki='.$_GET['id_ksiazki'];
        
        if ($conn){
            $result= oci_parse($conn,$q);
            oci_execute($result);
            while($row = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS)){
                $temp=array(
                    
                    "id_kategorii"=>$row['ID_KATEGORII'],
                    "nazwa"=>$row['NAZWA']
                    
                );
                array_push($return,$temp);
            }
            echo json_encode($return);


        }



    }
    // dla wyszukiwania 
    else if (isset($_GET['q'])){
        $return=array();
        $q = "select * from kategorie where upper(nazwa) like '%".strtoupper($_GET['q'])."%'";
        //echo $q;    

        if ($conn){
            $result= oci_parse($conn,$q);
            oci_execute($result);
            while($row = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS)){
                $temp=array(
                    
                    "id_kategorii"=>$row['ID_KATEGORII'],
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
                $q= 'insert into kategorie (nazwa) values (\''.$_POST['nazwa'].'\')';
                

                 echo $q;
                 $result= oci_parse($conn,$q);
                 oci_execute($result);
            }
        }
    }
















?>