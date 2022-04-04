<?php

namespace App\Controller\Cases;
use App\Entity\Cases;
use Framework\Controller\AbstractController;

class UpdateCase extends AbstractController
{

    public function __invoke($id): string
    {

        $case = new Cases();
        $case = $case->updateCase($id);
        return $this->buildResponse($case);
    }
}