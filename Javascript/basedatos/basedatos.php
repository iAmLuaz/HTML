<?php
$servername = "127.0.0.1";
$database = "nombres";
$username = "root";
$password = "";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $database);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
$sql = "INSERT INTO usuarios (id, nombre_completo, edad, correo_electronico, contrasena) VALUES (1,'Luis Angel Vasquez Hernandez', 20, 'luis@tesing.com', '123')";
if (mysqli_query($conn, $sql)) {
      echo "New record created successfully";
} else {
      echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
mysqli_close($conn);
//mysqli_close($conn);
//https://fontawesome.com/
?>
