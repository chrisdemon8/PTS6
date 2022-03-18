<?php

namespace App\Controller\Cases;
use App\Entity\Cases;
use Framework\Controller\AbstractController;

class ReadCase extends AbstractController
{

    public function __invoke()
    {
        $date = new \DateTime('now');
        $case = new Cases("", $date, "", $date);
        $case = $case->getCases();
        return $this->buildResponse($case);
//        $this->redirect('/client');
    }
}