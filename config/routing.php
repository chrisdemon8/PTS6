<?php

use Framework\Routing\Route;

//API
use App\Controller\Client\ReadClient;
use App\Controller\Client\ReadClients;
use App\Controller\Client\NewClient;
use App\Controller\Client\DeleteClient;
use App\Controller\Client\NewClientCase;
use App\Controller\Client\UpdateClient;

use App\Controller\Cases\ReadCases;
use App\Controller\Cases\ReadCase;
use App\Controller\Cases\DeleteCase;
use App\Controller\Cases\NewCase;
use App\Controller\Cases\UpdateCase;

use App\Controller\Event\NewEventCase;

return [

    //API READ
    new Route('GET', '/api/client/{id}', ReadClient::class),
    new Route('GET', '/api/clients', ReadClients::class),
    new Route('GET', '/api/cases', ReadCases::class),
    new Route('GET', '/api/case/{id}', ReadCase::class),

    //API ADD
    new Route('POST', '/api/clients/save', NewClient::class),
    new Route('POST', '/api/case/{id}/client/save', NewClientCase::class),
    new Route('POST', '/api/case/{id}/event/save', NewEventCase::class),
    new Route('POST', '/api/cases/save', NewCase::class),

    //API UPDATE
    new Route('POST', '/api/client/{id}/update', UpdateClient::class),
    new Route('POST', '/api/case/{id}/update', UpdateCase::class),

    //API DELETE
    new Route('POST', '/api/client/{id}/delete', DeleteClient::class),
    new Route('POST', '/api/case/{id}/delete', DeleteCase::class),

];