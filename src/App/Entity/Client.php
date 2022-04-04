<?php

namespace App\Entity;
use PDO;
require_once __DIR__ . '../../Controller/Connexion/Connexion.php';

class Client
{
    private int $id;
    private string $firstName;
    private string $lastName;
    private string $address;
    private \DateTime $createdAt;
    private \DateTime $birthDate;


    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->birthDate = new \DateTime();
    }


    public function getId(): int
    {
        return $this->id;
    }

    public function setId(int $id): self
    {
        $this->id = $id;
        return $this;
    }

    public function getFirstName(): string
    {
        return $this->firstName;
    }

    public function setFirstName(?string $firstName): self
    {
        $this->firstName = $firstName;
        return $this;
    }

    public function getLastName(): string
    {
        return $this->lastName;
    }

    public function setLastName(?string $lastName): self
    {
        $this->lastName = $lastName;
        return $this;
    }

    public function getAddress(): string
    {
        return $this->address;
    }

    public function setAddress(?string $address): self
    {
        $this->address = $address;
        return $this;
    }

    public function getBirthDate(): \DateTime
    {
        return $this->birthDate;
    }

    public function setBirthDate(\DateTime $birthDate): self
    {
        $this->birthDate = $birthDate;
        return $this;
    }

    public function getCreatedAt(): \DateTime
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTime $createdAt): self
    {
        $this->createdAt = $createdAt;
        return $this;
    }

    public function getEvents($id): bool|array
    {
        $connexion = getConnexion();
        $req = "SELECT event_id, event_description, event_date, event_duration FROM av_event e, av_case c
                WHERE c.case_id = e.event_id_case
                AND e.event_id_case =" . $id;
        $stmt = $connexion->prepare($req);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getCases($id): bool|array
    {
        $connexion = getConnexion();
        $req = "SELECT case_id, code, case_description, case_createdAt, case_status, case_end_date
                FROM av_case c, av_link_case_client lcc
                WHERE c.case_id = lcc.link_id_case
                AND lcc.link_id_client =" . $id;
        $stmt = $connexion->prepare($req);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        for ($i = 0; $i < count($result); $i++) {
            $result[$i]['event'] = $this->getEvents($result[$i]['case_id']);
        }
        return $result;
    }


    public function getClientById($id): bool|array
    {
        $connexion = getConnexion();
        $req = "SELECT * 
                FROM av_client c
                WHERE c.client_id = " . $id;
        $stmt = $connexion->prepare($req);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        for ($i = 0; $i < count($result); $i++) {
            $result[$i]['cases'] = $this->getCases($result[$i]['client_id']);
        }

        return $result;
    }


    public function getClients(): bool|array
    {
        $connexion = getConnexion();
        $req = "SELECT * FROM av_client";
        $stmt = $connexion->prepare($req);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        for ($i = 0; $i < count($result); $i++) {
            $result[$i]['cases'] = $this->getCases($result[$i]['client_id']);
        }

        return $result;
    }

    public function addClient()
    {
        $connexion = getConnexion();
                $client = json_decode(file_get_contents('php://input'));
                $sql = "INSERT INTO av_client(client_id, client_first_name, client_last_name, client_adress, client_birthday, client_createdAt)
                values(null, :client_first_name, :client_last_name, :client_adress, :client_birthday, :client_createdAt)";
                $stmt = $connexion->prepare($sql);
                $date = date('Y-m-d');
                $stmt->bindParam(':client_first_name', $client->firstname);
                $stmt->bindParam(':client_last_name', $client->lastname);
                $stmt->bindParam(':client_adress', $client->address);
                $stmt->bindParam(':client_birthday', $date);
                $stmt->bindParam(':client_createdAt', $date);
                if($stmt->execute()) {
                    $data = ['status' => 1, 'message' => "Record successfully created"];
                } else {
                    $data = ['status' => 0, 'message' => "Failed to create record."];
                }
                echo json_encode($data);
        }

        public function deleteClient($id)
        {
            $connexion = getConnexion();
            $req = "DELETE FROM av_client WHERE client_id = :id";
            $stmt = $connexion->prepare($req);
            $stmt->bindParam(':id', $id);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record deleted successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to delete record.'];
            }
            echo json_encode($response);
        }

        public function updateClient($id)
        {
            $connexion = getConnexion();
            $client = json_decode(file_get_contents('php://input'));
            $sql = "UPDATE av_client SET client_first_name = :client_first_name, client_last_name = :client_last_name, client_adress = :client_adress, client_birthday = :client_birthday WHERE client_id = :id";
            $stmt = $connexion->prepare($sql);
            $stmt->bindParam(':client_first_name', $client->client_first_name);
            $stmt->bindParam(':client_last_name', $client->client_last_name);
            $stmt->bindParam(':client_adress', $client->client_adress);
            $stmt->bindParam(':client_birthday', $client->client_birthday);
            $stmt->bindParam(':id', $id);
            if($stmt->execute()) {
                $response = ['status' => 1, 'message' => 'Record updated successfully.'];
            } else {
                $response = ['status' => 0, 'message' => 'Failed to update record.'];
            }
            echo json_encode($response);
        }

}