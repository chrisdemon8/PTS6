<?php

namespace App\Controller\Cases;
use App\Entity\Cases;
use Framework\Controller\AbstractController;

class NewCase extends AbstractController
{

    public function __invoke(): string
    {
        $case = new Cases();
        $case = $case->addCase();
        return $this->buildResponse($case);
    }
}