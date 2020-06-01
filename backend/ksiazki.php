<?php
header("Access-Control-Allow-Origin: *");

    require('conn.php');
    $conn=oci_connect($login,$haslo,$url,'AL32UTF8');

    // dka konkretnego id
    if (isset($_GET['id'])) {
        $q = 'select * from ksiazki where id_ksiazki='.$_GET['id'];
        //echo $q;

        if ($conn){
            $result= oci_parse($conn,$q);
            oci_execute($result);
            while($row = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS)){
                $temp=array(
                    "id_ksiazki"=>$row['ID_KSIAZKI'],
                    "tytul"=>$row['TYTUL'],
                    "autorzy"=>json_decode(file_get_contents("http://localhost/api/autorzy.php?id_ksiazki=".$row['ID_KSIAZKI'])),
                    "wydawnictwo"=>json_decode(file_get_contents("http://localhost/api/wydawnictwa.php?id=".$row['ID_WYDAWNICTWA'])),
                    "kategorie"=>json_decode(file_get_contents("http://localhost/api/kategorie.php?id_ksiazki=".$row['ID_KSIAZKI'])),
                    "opis"=>$row['OPIS'],
                    "ocena"=>$row['OCENA'],
                    "rok_wydania"=>$row['ROK_WYDANIA'],
                    "img_url"=>$row['IMG_URL']
                    
                );
                echo json_encode($temp);
            }
            


        }



    }
    // dla wyszukiwania 
    else if (isset($_GET['q'])){
        $return=array();
        $q = "select * from ksiazki where upper(tytul) like '%".strtoupper($_GET['q'])."%'";
        //echo $q;    

        if ($conn){
            $result= oci_parse($conn,$q);
            oci_execute($result);
            while($row = oci_fetch_array($result, OCI_ASSOC+OCI_RETURN_NULLS)){
                $temp=array(
                    "id_ksiazki"=>$row['ID_KSIAZKI'],
                    "tytul"=>$row['TYTUL'],
                    "autorzy"=>json_decode(file_get_contents("http://localhost/api/autorzy.php?id_ksiazki=".$row['ID_KSIAZKI'])),
                    "wydawnictwo"=>json_decode(file_get_contents("http://localhost/api/wydawnictwa.php?id=".$row['ID_WYDAWNICTWA'])),
                    "kategorie"=>json_decode(file_get_contents("http://localhost/api/kategorie.php?id_ksiazki=".$row['ID_KSIAZKI'])),
                    "opis"=>$row['OPIS'],
                    "ocena"=>$row['OCENA'],
                    "rok_wydania"=>$row['ROK_WYDANIA'],
                    "img_url"=>$row['IMG_URL']
                    
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
            if (isset($_POST['tytul']) && isset($_POST['opis']) && isset($_POST['ocena']) && isset($_POST['rok_wydania']) && isset($_POST['id_wydawnictwa']) ){
                if (isset($_POST['img_url']) && $_POST['img_url']!='' ){
                    $q1= 'insert into ksiazki(tytul,id_wydawnictwa,opis,ocena,rok_wydania,img_url) values
                    (\''.$_POST['tytul'].'\','.$_POST['id_wydawnictwa'].',\''.$_POST['opis'].'\','.$_POST['ocena'].','.$_POST['rok_wydania'].',\''.$_POST['img_url'].'\')';
                }
                else{
                    $q1= 'insert into ksiazki(tytul,id_wydawnictwa,opis,ocena,rok_wydania) values
                    (\''.$_POST['tytul'].'\','.$_POST['id_wydawnictwa'].',\''.$_POST['opis'].'\','.$_POST['ocena'].','.$_POST['rok_wydania'].')';
                }
                

                 //echo $q1;
                 $result= oci_parse($conn,$q1);
                 oci_execute($result);
            }
        }
    }
















?>