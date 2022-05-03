<?php
     include __DIR__ . '/../database/db.php';

    $query = $dbh->prepare('SELECT id, name from streamers'); // $dbh est la connexion initialisée dans le fichier db.php
    $query->execute();
    $cities = $query->fetchAll(\PDO::FETCH_ASSOC);

    sort($cities);



