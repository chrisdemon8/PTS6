<?php

namespace App\Controller\Client;
use App\Entity\Link;
use Framework\Controller\AbstractController;

class DeleteClientCase extends AbstractController
{

    public function __invoke($id_case, $id_client): string
    {

        $link = new Link();
        $link = $link->deleteClientConcernedCase($id_case, $id_client);
        return $this->buildResponse($link);
    }
}