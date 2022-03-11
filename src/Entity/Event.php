<?php

class Event
{
    private $eventDescription;
    private $eventDate;
    private $eventDuration;
    private $eventCaseId;

    /**
     * @param $eventDescription
     * @param $eventDate
     * @param $eventDuration
     * @param $eventCaseId
     */
    public function __construct($eventDescription, $eventDate, $eventDuration, $eventCaseId)
    {
        $this->eventDescription = $eventDescription;
        $this->eventDate = $eventDate;
        $this->eventDuration = $eventDuration;
        $this->eventCaseId = $eventCaseId;
    }

    /**
     * @return mixed
     */
    public function getEventDescription()
    {
        return $this->eventDescription;
    }

    /**
     * @param mixed $eventDescription
     * @return Event
     */
    public function setEventDescription($eventDescription)
    {
        $this->eventDescription = $eventDescription;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getEventDate()
    {
        return $this->eventDate;
    }

    /**
     * @param mixed $eventDate
     * @return Event
     */
    public function setEventDate($eventDate)
    {
        $this->eventDate = $eventDate;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getEventDuration()
    {
        return $this->eventDuration;
    }

    /**
     * @param mixed $eventDuration
     * @return Event
     */
    public function setEventDuration($eventDuration)
    {
        $this->eventDuration = $eventDuration;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getEventCaseId()
    {
        return $this->eventCaseId;
    }

    /**
     * @param mixed $eventCaseId
     * @return Event
     */
    public function setEventCaseId($eventCaseId)
    {
        $this->eventCaseId = $eventCaseId;
        return $this;
    }



}