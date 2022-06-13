<?php
    $message = $_POST['message'];
    echo json_encode(['message' => $message . '. El ultimo numero antes de llegar a 100000000000']);
?>