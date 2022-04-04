<?php

namespace App\Controller\Event;
use App\Entity\Event;
use Framework\Controller\AbstractController;

class NewEvent extends AbstractController
{

    public function __invoke(): string
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods: GET");
        header("Access-Control-Max-Age: 3600");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

        $event = new Event();
        $event = $event->addEvent();
        return $this->buildResponse($event);
    }
}