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

    public function getClients()
    {
        $connection = getConnection();
        $sql = "SELECT * FROM `av_client`";
        $stmt = $connection->query($sql);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }


//    public function getClientsWithDetails(): bool|array
//    {
//        $connection = getConnection();
//        $sql = "SELECT client_first_name, client_last_name,client_adress, client_birthday, client_createdAt, code, case_description, case_createdAt,
//                case_status, case_end_date, event_description, event_date, event_duration
//                FROM `av_client`,`av_case`,`av_event`,`av_link_case_client`
//                WHERE av_client.client_id = av_link_case_client.link_id_client
//                AND av_case.case_id = av_link_case_client.link_id_case
//                ORDER BY client_first_name, client_last_name";
//        $stmt = $connection->query($sql);
//        return $stmt->fetchAll(PDO::FETCH_ASSOC);
//    }

}