<?php

namespace App\Controller\Cases;
use App\Entity\Cases;
use Framework\Controller\AbstractController;

class ReadCase extends AbstractController
{

    public function __invoke(int $id): string
    {
        $client = new Cases();
        $client = $client->getCaseById($id);
        return $this->buildResponse($client);
    }
}