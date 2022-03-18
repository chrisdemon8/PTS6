<?php

namespace App\Controller\Client;
use App\Entity\Client;
use Framework\Controller\AbstractController;

class ReadClient extends AbstractController
{

    public function __invoke()
    {
        $date = new \DateTime('now');
        $client = new Client('','','',$date,$date);
        $client = $client->getClients();
        return $this->buildResponse($client);
    }
}