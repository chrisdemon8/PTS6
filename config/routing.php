<?php
use Framework\Routing\Route;

//API
use App\Controller\Client\ReadClient;
use App\Controller\Client\ReadClients;
use App\Controller\Cases\ReadCases;
use App\Controller\Cases\ReadCase;

return [

    //API GET
    new Route('GET', '/api/client/{id}', ReadClient::class),
    new Route('GET', '/api/clients', ReadClients::class),
    new Route('GET', '/api/cases', ReadCases::class),
    new Route('GET', '/api/case/{id}', ReadCase::class),

//    //API POST
//    new Route('POST', '/api/clients', NewClient::class),
//    new Route('POST', '/api/cases', NewCase::class),
//    new Route('POST', '/api/events', NewEvent::class),
//
//    //API PUT
//    new Route('PUT', '/api/client/{id}', UpdateClient::class),
//    new Route('PUT', '/api/case/{id}', UpdateCase::class),
//    new Route('PUT', '/api/event/{id}', UpdateEvent::class),
//
//    //API DELETE
//    new Route('DELETE', '/api/client/{id}', DeleteClient::class),
//    new Route('DELETE', '/api/case/{id}', DeleteCase::class),
//    new Route('DELETE', '/api/event/{id}', DeleteEvent::class),

];