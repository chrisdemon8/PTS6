<?php

namespace Framework\Controller;
use App\Serializer\JsonSerializer;


abstract class AbstractController
{

    public function redirect(string $url): void
    {
        header('Location: ' . $url);
        exit();
    }

    protected function buildResponse($data): string
    {
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
        header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

        $serializer = new JsonSerializer();
        return $serializer->serialize($data) ?? '{}';
    }

}
