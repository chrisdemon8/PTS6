<?php

namespace App\Controller\Client;
use App\Entity\Client;
use Framework\Controller\AbstractController;

class NewClient extends AbstractController
{

    public function __invoke(): string
    {
        $client = new Client();
        $client = $client->addClient();
        return $this->buildResponse($client);
    }
}