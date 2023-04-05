<?php

if (isset($_POST['messages'])) {
    $messages = $_POST['messages'];
    $json = json_encode($messages, JSON_PRETTY_PRINT);
    file_put_contents('mensajes.json', $json);
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'error']);
}

?>
