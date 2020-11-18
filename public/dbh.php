<?php

$servername = "localhost";
$dbUsername = "swimdive_root";
$dbPassword = "Mattvd1208!";
$dbName = "swimdive_swcloginsystem";

$conn = mysqli_connect($servername, $dbUsername, $dbPassword, $dbName);

if (!$conn) {
  die("Connection failed: ".mysqli_connect_error());
}
