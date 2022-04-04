<?php

namespace App\Controller\Client;
use App\Entity\Client;
use Framework\Controller\AbstractController;

class UpdateClient extends AbstractController
{

    public function __invoke($id): string
    {

        $client = new Client();
        $client = $client->updateClient($id);
        return $this->buildResponse($client);
    }
}