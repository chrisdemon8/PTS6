<?php

namespace App\Controller\Cases;
use App\Entity\Cases;
use Framework\Controller\AbstractController;

class ReadCases extends AbstractController
{

    public function __invoke(): string
    {
        $case = new Cases();
        $case = $case->getCases();
        return $this->buildResponse($case);
    }
}