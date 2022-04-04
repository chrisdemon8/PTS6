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
        $serializer = new JsonSerializer();
        return $serializer->serialize($data) ?? '{}';
    }

}
