<?php

namespace App\Controller\Event;
use App\Entity\Event;
use Framework\Controller\AbstractController;

class NewEventCase extends AbstractController
{

    public function __invoke($id): string
    {
        $event = new Event();
        $event = $event->addCaseEvent($id);
        return $this->buildResponse($event);
    }
}