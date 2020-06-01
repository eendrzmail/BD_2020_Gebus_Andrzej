<?php
header("Access-Control-Allow-Origin: *");
    require('conn.php');
    @$conn=oci_connect($login,$haslo,$url,'AL32UTF8');

    // dka konkretnego id
    if (isset($_GET['id'])) {
        $q = 'select * from egzemplarze where ID_EGZEMPLARZA='.$_GET['id'];
        //echo $q;

        if ($conn){
            $result= oci_parse($conn,$q);
            oci_execute($result);
            while($row = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS)){
                $temp=array(
                    "id_egzemplarza"=>$row['ID_EGZEMPLARZA'],
                    "ksiazka"=>json_decode(file_get_contents("http://localhost/api/ksiazki.php?id=".$row['ID_KSIAZKI'])),
                    "wypozyczona"=>$row['WYPOZYCZONA']
                    
                );
            }
            echo json_encode($temp);


        }



    }
    //  dla konkretnej ksiazki
    else if (isset($_GET['id_ksiazki'])){

        $return=array();
        $q = 'select * from egzemplarze where id_ksiazki='.$_GET['id_ksiazki']."order by wypozyczona";
        
        if ($conn){
            $result= oci_parse($conn,$q);
            oci_execute($result);
            while($row = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS)){
                $temp=array(
                    "id_egzemplarza"=>$row['ID_EGZEMPLARZA'],
                    "ksiazka"=>json_decode(file_get_contents("http://localhost/api/ksiazki.php?id=".$row['ID_KSIAZKI'])),
                    "wypozyczona"=>$row['WYPOZYCZONA']
                    
                );
                array_push($return,$temp);
            }
            echo json_encode($return);


        }



    }

















?>