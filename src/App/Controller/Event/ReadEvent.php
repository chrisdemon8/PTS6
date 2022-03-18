<?php

namespace App\Controller\Event;
use App\Entity\Event;
use Framework\Controller\AbstractController;

class ReadEvent extends AbstractController
{

    public function __invoke()
    {
        $date = new \DateTime('now');
        $event = new Event('', $date, 0, 0);
        $event = $event->getEvents();
        return $this->buildResponse($event);
    }
}