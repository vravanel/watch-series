<?php

namespace App\Controller;

use App\Service\SeriesService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Serializer\SerializerInterface;

#[Route('/api', name: 'api_')]
class ApiController extends AbstractController
{
    #[Route('/home', name : 'home', methods: ['GET'])]
    public function getLatestSeries(SeriesService $seriesService, SerializerInterface $serializer): JsonResponse
    {
        $series = $serializer->serialize($seriesService->getSeriesTrending(), 'json');
      return new JsonResponse(
        $series, Response::HTTP_OK, [], true);
    }

    #[Route('/serie/{id}', name : 'serie', methods: ['GET'])]
    public function getSerieById(SeriesService $seriesService, SerializerInterface $serializer, int $id): JsonResponse
    {
        $serie = $serializer->serialize($seriesService->getSerieById($id), 'json');
      return new JsonResponse(
        $serie, Response::HTTP_OK, [], true);
    }
}