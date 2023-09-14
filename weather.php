<?php
if ($_SERVER['REQUEST_METHOD'] === 'GET' || ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['city']))) {
    $apiKey = '8ad674dea63342a628bb3297a1f82b09';

    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $city = urlencode($_GET['city']);
    } else {
        $city = urlencode($_POST['city']);
    }

    $apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={$city}&units=metric&appid={$apiKey}";

    $response = file_get_contents($apiUrl);
    header('Content-Type: application/json');
    echo $response;
}
?>
