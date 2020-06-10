<?php
    require('conn.php');
    $conn=oci_connect($login,$haslo,$url,'AL32UTF8');

    $q="begin
        :cursor:=f_wyplaty();
        end;";
    
    $cursor1 = oci_new_cursor($conn);
    $stid= oci_parse($conn,$q);
    oci_bind_by_name($stid,":cursor",$cursor1,-1,OCI_B_CURSOR);
    oci_execute($stid);
    oci_execute($cursor1);

    while (($row=oci_fetch_array($cursor1,OCI_ASSOC + OCI_RETURN_NULLS)) != false ){
        echo $row['MEDIANA'].' ';
        echo $row['AVG'].' ';
        echo $row['ODCHYLENIE'].' ';
        echo $row['SUM'];
    }
    
    
?>