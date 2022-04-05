<?php

namespace App\Controller\Cases;
use App\Entity\Cases;
use Framework\Controller\AbstractController;

class DeleteCase extends AbstractController
{

    public function __invoke($id): string
    {

        var_dump($id); 
        $case = new Cases();
        $case = $case->deleteCase($id);
        return $this->buildResponse($case);
    }
}