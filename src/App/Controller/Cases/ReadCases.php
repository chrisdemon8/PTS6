<?php

namespace App\Controller\Cases;
use App\Entity\Cases;
use Framework\Controller\AbstractController;

class ReadCases extends AbstractController
{

    public function __invoke(): string
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods: GET");
        header("Access-Control-Max-Age: 3600");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

        $case = new Cases();
        $case = $case->getCases();
        return $this->buildResponse($case);
    }
}