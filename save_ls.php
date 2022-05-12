<?php include_once("home.html"); ?>
<?php
include 'db.php';



$location = $_POST['userloc'];
$recorder = $_POST['userrecorder'];
//$firstPoint_long = $_POST['userlong_1'];
//$firstPoint_lat = $_POST['userlat_1'];
//$lastPoint_long = $_POST['userlong_2'];
//$lastPoint_lat = $_POST['userlat_2'];
$distance = $_POST['user_distance'];
$minibus_name = $_POST['userminibus_name'];
$geom = $_POST['user_json'];
$driver = $_POST['userdriver'];
$contact = $_POST['usercontact'];
$start_time = $_POST['userstart_time'];
$path_def = $_POST['userpath'];

$add_query = "INSERT INTO public.hacettepe_servis(location, recorder_name, geom, minibus_name, distance, driver, contact, start_time, path_def) VALUES ('$location', '$recorder',ST_TRANSFORM(ST_SetSRID(ST_GeomFromGeoJSON('$geom'),3857),4326),'$minibus_name',$distance,'$driver',$contact,'$start_time','$path_def')";
$query = pg_query($dbcon,$add_query);

if ($query){
    echo json_encode(array("statusCode"=>200));
} else {
    echo json_encode(array("statusCode"=>201));

}
?>