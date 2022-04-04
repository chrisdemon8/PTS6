<?php

namespace App\Entity;
use PDO;
require_once __DIR__ . '../../Controller/Connexion/Connexion.php';

class Event
{
    private string $eventDescription;
    private \DateTime $eventDate;
    private int $eventDuration;
    private int $eventCaseId;

    public function __construct()
    {
        $this->eventDate = new \DateTime();

    }

    public function getEventDescription(): string
    {
        return $this->eventDescription;
    }

    public function setEventDescription(?string $eventDescription): self
    {
        $this->eventDescription = $eventDescription;
        return $this;
    }

    public function getEventDate(): \DateTime
    {
        return $this->eventDate;
    }

    public function setEventDate(\DateTime $eventDate): self
    {
        $this->eventDate = $eventDate;
        return $this;
    }

    public function getEventDuration(): int
    {
        return $this->eventDuration;
    }

    public function setEventDuration(?int $eventDuration): self
    {
        $this->eventDuration = $eventDuration;
        return $this;
    }

    public function getEventCaseId(): int
    {
        return $this->eventCaseId;
    }

    public function setEventCaseId(?int $eventCaseId): self
    {
        $this->eventCaseId = $eventCaseId;
        return $this;
    }

    public function getEvents()
    {
        $connection = getConnexion();
        $req = "SELECT * FROM av_event";
        $stmt = $connection->prepare($req);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

}