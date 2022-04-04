<?php

namespace App\Entity;
use PDO;
require_once __DIR__ . '../../Controller/Connexion/Connexion.php';

class Link
{
    protected int $id_client;
    protected int $id_case;


    public function getIdClient(): int
    {
        return $this->id_client;
    }


    public function setIdClient(int $id_client): Link
    {
        $this->id_client = $id_client;
        return $this;
    }

    public function getIdCase(): int
    {
        return $this->id_case;
    }


    public function setIdCase(int $id_case): Link
    {
        $this->id_case = $id_case;
        return $this;
    }

    public function addClientCase($id)
    {
        $connexion = getConnexion();
        $client = json_decode(file_get_contents('php://input'));
        var_dump($id); 
        var_dump($client); 
        $sql = "INSERT INTO av_link_case_client(link_id_client, link_id_case)
                values(:id_client, :id_case)";
        $stmt = $connexion->prepare($sql);
        $stmt->bindParam(':id_client', $client->link_id_client);
        $stmt->bindParam(':id_case', $id);
        if($stmt->execute()) {
            $data = ['status' => 1, 'message' => "Record successfully created"];
        } else {
            $data = ['status' => 0, 'message' => "Failed to create record."];
        }
        echo json_encode($data);
    }

}