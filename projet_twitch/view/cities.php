<!-- ~/php/tp1/view/cities.php -->
<!DOCTYPE HTML>
<html>
    <head>
        <meta http-equiv="content-type" content="text/html;
            charset=utf-8" />
    </head>
    <title>All Cities</title>
    <body>
    <h1>All Cities</h1>
    <table>
        <?php foreach ($cities as $cityId => $city) : ?>
        <tr>
            <td><a href="/city.php?id=<?= $cityId; ?>"><?=
            $city['name']; ?></a></td>
            <td><?= $city['id']; ?></td>
            
        </tr>
        
        <?php endforeach; ?>
    </table>
    


    <br>
    <form>
        <label for="name"> Research a city :</label>

        <input action="method-get.php" method="get" type="text" id="cityName" name="cityName" required minlength="4" maxlength="8" size="10">
        <input type="submit" name="submit"/>
    </form>
<?php 
    $nom = $_GET['cityName'];

    $query = $dbh->prepare('SELECT name, country from city where name LIKE %$nom%'); // $dbh est la connexion initialisée dans le fichier db.php
    $query->execute();
    $result = $query->fetchAll(\PDO::FETCH_ASSOC);

    if ($result  )
            
    

?>

    </body>
</html>