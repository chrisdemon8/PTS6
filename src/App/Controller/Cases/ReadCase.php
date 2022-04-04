<?php

namespace App\Controller\Cases;
use App\Entity\Cases;
use Framework\Controller\AbstractController;

class ReadCase extends AbstractController
{

    public function __invoke(int $id): string
    {

        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods: GET");
        header("Access-Control-Max-Age: 3600");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

        $client = new Cases();
        $client = $client->getCaseById($id);
        return $this->buildResponse($client);
    }
}