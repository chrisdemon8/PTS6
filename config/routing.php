<?php

use App\Controller\Cases\NewClientCase;
use Framework\Routing\Route;

//API
use App\Controller\Client\ReadClient;
use App\Controller\Client\ReadClients;
use App\Controller\Client\NewClient;
use App\Controller\Client\DeleteClient;
use App\Controller\Client\UpdateClient;

use App\Controller\Cases\ReadCases;
use App\Controller\Cases\ReadCase;
use App\Controller\Cases\DeleteCase;
use App\Controller\Cases\NewCase;
use App\Controller\Cases\UpdateCase;

use App\Controller\Event\NewEventCase;


return [

    //API GET
    new Route('GET', '/api/client/{id}', ReadClient::class),
    new Route('GET', '/api/clients', ReadClients::class),
    new Route('GET', '/api/cases', ReadCases::class),
    new Route('GET', '/api/case/{id}', ReadCase::class),

    //API POST
    new Route('POST', '/api/clients/save', NewClient::class),
    new Route('POST', '/api/case/{id}/client/save', NewClientCase::class),
    new Route('POST', '/api/case/{id}/event/save', NewEventCase::class),
    new Route('POST', '/api/cases/save', NewCase::class),

    //API PUT
    new Route('PUT', '/api/client/{id}/update', UpdateClient::class),
    new Route('PUT', '/api/case/{id}/update', UpdateCase::class),

    //API DELETE
    new Route('DELETE', '/api/client/{id}/delete', DeleteClient::class),
    new Route('DELETE', '/api/case/{id}/delete', DeleteCase::class),

];