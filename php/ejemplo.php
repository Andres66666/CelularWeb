<?php
// Obtener la cadena JSON enviada desde el cliente
$json = file_get_contents('php://input');
// Decodificar la cadena JSON en un objeto PHP
$data = json_decode($json);
// Obtener el número ingresado
$numero = $data->numero;
// Guardar el número en un archivo de texto
$file = fopen("datos.txt", "a");
fwrite($file, $numero . "\n");
fclose($file);
echo "Datos guardados correctamente";
?>