<?php

namespace App\Controller\Client;
use App\Entity\Link;
use Framework\Controller\AbstractController;

class DeleteClientCase extends AbstractController
{

    public function __invoke($id): string
    {

        $link = new Link();
        $link = $link->deleteClientConcernedCase($id);
        return $this->buildResponse($link);
    }
}