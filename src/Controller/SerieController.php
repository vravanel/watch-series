<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class SerieController extends AbstractController
{
    #[Route('/serie/{id}', name: 'app_serie')]
    public function index(int $id): Response
    {

        return $this->render('serie/index.html.twig', [
            'id' => $id
        ]);
    }
}
