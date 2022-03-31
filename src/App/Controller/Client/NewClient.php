<?php

namespace App\Controller\Client;
use App\Entity\Client;
use Framework\Controller\AbstractController;

class NewClient extends AbstractController
{

    public function __invoke(): string
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods: GET");
        header("Access-Control-Max-Age: 3600");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

        $client = new Client();
        $client = $client->addClient();
        return $this->buildResponse($client);
    }
}