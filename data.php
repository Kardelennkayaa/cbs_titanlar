<?php
include 'db.php';

$get_sql = "SELECT location, recorder_name, ST_AsText(geom) as geom_text, minibus_name, distance, driver, contact, start_time, path_def FROM public.hacettepe_servis";
$resultArray = pg_fetch_all(pg_query($dbcon,$get_sql));
echo json_encode($resultArray);
?>