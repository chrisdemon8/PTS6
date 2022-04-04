<?php

namespace App\Serializer;

use Symfony\Component\Serializer\Encoder\JsonEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Serializer;

class JsonSerializer
{
    public function serialize($data): string
    {
        $encoders = [new JsonEncoder()];
        $normalizers = [new GetSetMethodNormalizer()];
        $serializer = new Serializer($normalizers, $encoders);
        return $serializer->serialize($data, 'json');
    }
}
