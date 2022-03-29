<?php

namespace App\Controller\Client;
use App\Entity\Client;
use Framework\Controller\AbstractController;

class ReadClient extends AbstractController
{

    public function __invoke(int $id): string
    {
        $date = new \DateTime('now');
        $client = new Client('','','',$date,$date);
        $client = $client->getClientById($id);
        return $this->buildResponse($client);
//        var_dump($id);
    }
}