<?php

namespace App\Controller\Client;
use App\Entity\Client;
use Framework\Controller\AbstractController;

class ReadClients extends AbstractController
{

    public function __invoke(): string
    {
        $client = new Client();
        $client = $client->getClients();
        return $this->buildResponse($client);
    }
}