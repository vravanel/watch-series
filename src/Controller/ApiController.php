<?php

namespace App\Controller;

use App\Entity\User;
use App\Service\SeriesService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[Route('/api', name: 'api_')]
class ApiController extends AbstractController
{
  #[Route('/home', name: 'home', methods: ['GET'])]
  public function getLatestSeries(SeriesService $seriesService, SerializerInterface $serializer): JsonResponse
  {
    $series = $serializer->serialize($seriesService->getSeriesTrending(), 'json');
    return new JsonResponse(
      $series,
      Response::HTTP_OK,
      [],
      true
    );
  }

  #[Route('/serie/{id}', name: 'serie', methods: ['GET'])]
  public function getSerieById(SeriesService $seriesService, SerializerInterface $serializer, int $id): JsonResponse
  {
    $serie = $serializer->serialize($seriesService->getSerieById($id), 'json');
    return new JsonResponse(
      $serie,
      Response::HTTP_OK,
      [],
      true
    );
  }

  #[Route('/register', name: 'register', methods: ['POST'])]
  public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, EntityManagerInterface $entityManager): JsonResponse
  {
    $data = json_decode($request->getContent(), true);

    if ($data === null) {
      return new JsonResponse(['error' => 'Invalid JSON'], Response::HTTP_BAD_REQUEST);
    }
    $user = new User();
    $user->setEmail($data['email']);
    $user->setPassword(
      $userPasswordHasher->hashPassword(
        $user,
        $data['plainPassword']
      )
    );

    $entityManager->persist($user);
    $entityManager->flush();

    return new JsonResponse(['message' => 'Utilisateur enregistré avec succès'], Response::HTTP_CREATED);
  }
}
