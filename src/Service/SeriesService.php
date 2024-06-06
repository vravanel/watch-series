<?php

namespace App\Service;

use Symfony\Contracts\HttpClient\HttpClientInterface;

class SeriesService
{
    private string $apiKey;
    private HttpClientInterface $httpClient;

    public function __construct(HttpClientInterface $httpClient)
    {
        $this->httpClient = $httpClient;
        $this->apiKey = $_ENV['TMDB_API_KEY'];
    }


    public function getSeriesTrending(): array 
    {
        $reponse = $this->httpClient->request('GET', 'https://api.themoviedb.org/3/trending/tv/week', [
            'headers' => [
                'Authorization' => 'Bearer ' . $this->apiKey ,
                'accept' => 'application/json',
              ],
            ]); 
       return $reponse->toArray();   

    }
}