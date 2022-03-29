<?php

namespace App\Entity;
use PDO;
require_once __DIR__ . '../../Controller/Connection/Connection.php';

class Client
{
    private int $id;
    private string $firstName;
    private string $lastName;
    private string $address;
    private \DateTime $birthDate;
    private \DateTime $createdAt;


    public function __construct(
        $firstName,
        $lastName,
        $address,
        $birthDate,
        $createdAt)
    {
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->address = $address;
        $this->birthDate = $birthDate;
        $this->createdAt = $createdAt;
    }

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    public function setId(int $id)
    {
        $this->id = $id;
        return $this;
    }


    /**
     * @return mixed
     */
    public function getFirstName(): string
    {
        return $this->firstName;
    }

    /**
     * @param mixed $firstName
     * @return Client
     */
    public function setFirstName($firstName)
    {
        $this->firstName = $firstName;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getLastName()
    {
        return $this->lastName;
    }

    /**
     * @param mixed $lastName
     * @return Client
     */
    public function setLastName($lastName)
    {
        $this->lastName = $lastName;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getAddress()
    {
        return $this->address;
    }

    /**
     * @param mixed $address
     * @return Client
     */
    public function setAddress($address)
    {
        $this->address = $address;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getBirthDate()
    {
        return $this->birthDate;
    }

    /**
     * @param mixed $birthDate
     * @return Client
     */
    public function setBirthDate($birthDate)
    {
        $this->birthDate = $birthDate;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * @param mixed $createdAt
     * @return Client
     */
    public function setCreatedAt($createdAt)
    {
        $this->createdAt = $createdAt;
        return $this;
    }


    public function getClientById($id): bool|array
    {
        $connection = getConnection();
        $req = "SELECT * FROM av_client c
                INNER JOIN av_link_case_client lcc ON lcc.link_id_client = c.client_id
                INNER JOIN av_case ca ON ca.case_id = lcc.link_id_client
                INNER JOIN av_event e ON e.event_id = ca.case_id
                WHERE c.client_di = ".$id;
        $stmt = $connection->prepare($req);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }


    public function getClients(): bool|array
    {
        $connection = getConnection();
        $req = "SELECT * FROM av_client c
                INNER JOIN av_link_case_client lcc ON lcc.link_id_client = c.client_id
                INNER JOIN av_case ca ON ca.case_id = lcc.link_id_client
                INNER JOIN av_event e ON e.event_id = ca.case_id";
        $stmt = $connection->prepare($req);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

}