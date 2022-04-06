<?php

namespace App\Controller\Client;
use App\Entity\Client;
use Framework\Controller\AbstractController;

class DeleteClient extends AbstractController
{

    public function __invoke($id): string
    {
        $client = new Client();
        $client = $client->deleteClient($id);
        return $this->buildResponse($client);
    }
}