<?php
use Framework\Routing\Route;

//API
use App\Controller\Client\ReadClient;
use App\Controller\Client\ReadAll;
use App\Controller\Cases\ReadCase;
use App\Controller\Event\ReadEvent;


return [

    //API
    new Route('GET', '/api/client/{id}', ReadClient::class),
    new Route('GET', '/api/clients', ReadAll::class),
    new Route('GET', '/api/case', ReadCase::class),
    new Route('GET', '/api/event', ReadEvent::class),

];