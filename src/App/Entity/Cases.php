<?php

namespace App\Entity;
use PDO;
use Symfony\Component\Serializer\Annotation\Groups;

class_exists(Groups::class);
require_once __DIR__ . '../../Controller/Connexion/Connexion.php';

class Cases
{
    protected string $caseDescription;
    protected \DateTime $caseCreatedAt;
    protected string $caseStatus;
    protected \DateTime $caseEndDate;


    public function __construct()
    {
        $this->caseCreatedAt = new \DateTime();
        $this->caseEndDate = new \DateTime();
    }

    public function getCaseDescription(): string
    {
        return $this->caseDescription;
    }

    public function setCaseDescription(?string $caseDescription): self
    {
        $this->caseDescription = $caseDescription;
        return $this;
    }

    public function getCaseCreatedAt(): \DateTime
    {
        return $this->caseCreatedAt;
    }

    public function setCaseCreatedAt(\DateTime $caseCreatedAt): self
    {
        $this->caseCreatedAt = $caseCreatedAt;
        return $this;
    }

    public function getCaseStatus(): string
    {
        return $this->caseStatus;
    }

    public function setCaseStatus(?string $caseStatus): self
    {
        $this->caseStatus = $caseStatus;
        return $this;
    }

    public function getCaseEndDate(): \DateTime
    {
        return $this->caseEndDate;
    }

    public function setCaseEndDate(\DateTime $caseEndDate): self
    {
        $this->caseEndDate = $caseEndDate;
        return $this;
    }

    public function getConcernedClients($id): bool|array
    {
        $connexion = getConnexion();
        $req = "SELECT client_id, client_first_name, client_last_name, client_adress, client_birthday, client_createdAt
                FROM av_client, av_case, av_link_case_client
                WHERE av_link_case_client.link_id_case =".$id ."
                AND av_link_case_client.link_id_client = av_client.client_id
                AND av_link_case_client.link_id_case = av_case.case_id";
        $stmt = $connexion->prepare($req);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }


    public function getCases(): bool|array
    {
        $connexion = getConnexion();
        $req = "SELECT case_id, code, case_description, case_createdAt, case_status, case_end_date
                FROM av_case c, av_link_case_client lcc
                WHERE c.case_id = lcc.link_id_case";
        $stmt = $connexion->prepare($req);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        for ($i = 0; $i < count($result); $i++) {
            $result[$i]['concernedClient'] = $this->getConcernedClients($result[$i]['case_id']);
            $result[$i]['event'] = $this->getEvents($result[$i]['case_id']);
        }
        return $result;
    }
    public function getEvents($id): bool|array
    {
        $connexion = getConnexion();
        $req = "SELECT event_id, event_description, event_date, event_duration 
                FROM av_event e, av_case c
                WHERE c.case_id = e.event_id_case
                AND e.event_id_case =" . $id;
        $stmt = $connexion->prepare($req);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getCaseById($id): bool|array
    {
        $connexion = getConnexion();
        $req = "SELECT * 
                FROM av_case c
                WHERE c.case_id = " . $id;
        $stmt = $connexion->prepare($req);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        for ($i = 0; $i < count($result); $i++) {
            $result[$i]['concernedClient'] = $this->getConcernedClients($result[$i]['case_id']);
            $result[$i]['event'] = $this->getEvents($result[$i]['case_id']);
        }

        return $result;
    }



}