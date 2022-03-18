<?php

namespace App\Controller\Client;
use App\Entity\Client;
use Framework\Controller\AbstractController;

class ReadAll extends AbstractController
{

    public function __invoke()
    {
        $date = new \DateTime('now');
        $client = new Client('','','',$date,$date);
        $client = $client->getClientsWithDetails();
        return $this->buildResponse($client);
    }
}