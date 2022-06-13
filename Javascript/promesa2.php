<?php
    $message = $_POST['message'];

    sleep(5);

    echo json_encode(['menssage' => $message]);