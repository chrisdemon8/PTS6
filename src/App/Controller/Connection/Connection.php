<?php

function getConnection()
{
    try {
        $connection = new PDO('mysql:host=localhost; dbname=avocado; charset=utf8', 'root', '');
    } catch (PDOException $e) {
        echo "Connexion à la base de données impossible. Vérifier que les identifiants existent et que la base de données aussi !";
    }
    return $connection;
}
