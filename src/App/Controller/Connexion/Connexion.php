<?php

function getConnexion(): PDO
{
    try {
        $connexion = new PDO('mysql:host=localhost; dbname=avocado; charset=utf8', 'root', '');
    } catch (PDOException $e) {
        echo "Connexion à la base de données impossible. Vérifier que les identifiants existent et que la base de données aussi !";
    }
    return $connexion;
}
