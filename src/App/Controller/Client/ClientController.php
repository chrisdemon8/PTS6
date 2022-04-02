<?php
//
//namespace App\Controller\Client;
//use App\Entity\Client;
//use Framework\Controller\AbstractController;
//
//class ClientController extends AbstractController
//{
//
//    public function __invoke(?int $id): string
//    {
//
//        header("Access-Control-Allow-Origin: *");
//        header("Content-Type: application/json; charset=UTF-8");
//        header("Access-Control-Allow-Methods: GET");
//        header("Access-Control-Max-Age: 3600");
//        header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
//
//        $client = new Client();
//
//        switch ($_SERVER['REQUEST_METHOD']) {
//            case 'GET':
//                if (isset($id)) {
//                    $client = $client->getClientById($id);
//                    break;
//                }else{
//                    $client = $client->getClients();
//                    break;
//                }
//            case 'POST':
//                $client = $client->addClient($_POST);
//                break;
//
//            case 'PUT':
//                $client = $client->updateClient($_POST);
//                break;
//
//            case 'DELETE':
//                $client = $client->deleteClient($id);
//                break;
//        }
//
//        return $this->buildResponse($client);
//    }
//}