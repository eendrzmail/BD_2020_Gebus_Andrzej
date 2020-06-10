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
        $q = "select * from ksiazki where upper(tytul) like upper('%".strtoupper($_GET['q'])."%')";
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
    else if (isset($_GET['top'])){
        $return=array();

        $cursor1 = oci_new_cursor($conn);
        $stid= oci_parse($conn,"begin topksiazek.top_ksiazek(:ksiazki); end;");
        oci_bind_by_name($stid,":ksiazki",$cursor1,-1,OCI_B_CURSOR);
        oci_execute($stid);
        oci_execute($cursor1);
    
        while (($row=oci_fetch_array($cursor1,OCI_ASSOC + OCI_RETURN_NULLS)) != false ){
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

        //edycja
        if ($_POST['action']=='modify'){

            if (isset($_POST['book'])){
                $book=json_decode($_POST['book'],true);
                print_r($book);
                $wydawnictwo=$book['wydawnictwo'];
                //print_r($wydawnictwo);
                $autorzy=$book['autorzy'];
                $kategorie=$book['kategorie'];


                @$sql1= "update ksiazki set tytul='".$book['tytul']."',opis='".$book['opis']."',ocena=".$book['ocena'].",rok_wydania=".$book['rok_wydania'].",img_url='".$book['img_url']."',".
                "id_wydawnictwa=".$wydawnictwo['id_wydawnictwa']." where id_ksiazki=".$book['id_ksiazki'];
                echo ($sql1);

                $result= oci_parse($conn,$sql1);
                oci_execute($result);


                //usuwanie autorów
                $sql2_1= "Delete from ksiazki_autorzy where id_ksiazki=".$book['id_ksiazki'];
                $result= oci_parse($conn,$sql2_1);
                oci_execute($result);

                //dodawanie autorów
                for ($j=0;$j<count($autorzy);$j++){
                    $sql2= "Insert into ksiazki_autorzy (id_ksiazki,id_autora) values (".$book['id_ksiazki'].",".$autorzy[$j]['id_autora'].")";
                    $result= oci_parse($conn,$sql2);
                    oci_execute($result);
                } 

                //usuwaniee kategorii
                $sql3_1= "Delete from ksiazki_kategorie where id_ksiazki=".$book['id_ksiazki'];
                $result= oci_parse($conn,$sql3_1);
                oci_execute($result);
                //dodawanie kategorii
                for ($j=0;$j<count($kategorie);$j++){
                    $sql3= "Insert into ksiazki_kategorie (id_ksiazki,id_kategorii) values (".$book['id_ksiazki'].",".$kategorie[$j]['id_kategorii'].")";
                    $result= oci_parse($conn,$sql3);
                    oci_execute($result);
                } 

            }
        }
    }

    
















?>