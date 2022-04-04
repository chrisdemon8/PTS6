<?php

namespace App\Serializer;

use Symfony\Component\Serializer\Encoder\XmlEncoder;
use Symfony\Component\Serializer\Normalizer\GetSetMethodNormalizer;
use Symfony\Component\Serializer\Serializer;

class XmlSerializer
{
    public function serialize($data): string
    {
        $encoder = new XmlEncoder();
        $encoders = [$encoder];
        $normalizers = [new GetSetMethodNormalizer()];

        $serializer = new Serializer($normalizers, $encoders);

        return $serializer->serialize($data, 'xml');

    }
}