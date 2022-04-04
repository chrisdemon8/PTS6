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

    public function addEvent()
    {
        $connexion = getConnexion();
        $method = $_SERVER['REQUEST_METHOD'];
        switch ($method) {
            case 'POST':
                $event = json_decode(file_get_contents('php://input'));
                $sql = "INSERT INTO av_event(event_id, event_description, event_date, event_duration, event_id_case)
                values(null, :event_description, :event_date, :event_duration, :event_id_case)";
                $stmt = $connexion->prepare($sql);
                $stmt->bindParam(':event_description', $event->eventDescription);
                $stmt->bindParam(':event_date', $event->eventDate);
                $stmt->bindParam(':event_duration', $event->eventDuration);
                $stmt->bindParam(':event_id_case', $event->eventCaseId);
                if($stmt->execute()) {
                    $data = ['status' => 1, 'message' => "Record successfully created"];
                } else {
                    $data = ['status' => 0, 'message' => "Failed to create record."];
                }
                echo json_encode($data);
                break;
        }
    }

}