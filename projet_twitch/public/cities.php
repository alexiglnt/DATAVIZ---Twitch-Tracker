<?php
 // ~/php/tp1/public/cities.php
 // include model
 include __DIR__ . '/../model/cities.php';
 // include view
 include __DIR__ . '/../view/cities.php';

 include __DIR__ . '/../database/db.php';


 function searchBar()
 {
    $nom = $_GET['cityName'];
    echo $nom;
 }

 