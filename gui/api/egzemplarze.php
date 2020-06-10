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

    //post
    if (isset($_POST['action'])){
        //echo $_POST['action'];
        // dodaj nowy
        if ($_POST['action']=='insert'){

            if (isset($_POST['id_ksiazki']) && isset($_POST['ilosc'])){
                $id=$_POST['id_ksiazki'];
                $i=intval($_POST['ilosc']);

                $q1 = "insert into egzemplarze (id_ksiazki,wypozyczona) values ($id,0)";
                $result= oci_parse($conn,$q1);

                for ($j=0;$j<$i;$j++){
                    oci_execute($result);
                }

                 //echo $q1;
                 
                 //
            }
        }
    }

















?>