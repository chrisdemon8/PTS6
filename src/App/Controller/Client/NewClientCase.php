<?php

namespace App\Controller\Client;
use App\Entity\Link;
use Framework\Controller\AbstractController;

class NewClientCase extends AbstractController
{

    public function __invoke($id): string
    {
        $link = new Link();
        $link = $link->addClientCase($id);
        return $this->buildResponse($link);
    }
}