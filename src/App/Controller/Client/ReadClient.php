<?php

namespace App\Controller\Client;
use App\Entity\Client;
use Framework\Controller\AbstractController;

class ReadClient extends AbstractController
{

    public function __invoke(int $id): string
    {
        $client = new Client();
        $client = $client->getClientById($id);
        return $this->buildResponse($client);
    }
}