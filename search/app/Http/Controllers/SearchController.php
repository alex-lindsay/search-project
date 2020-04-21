<?php
namespace App\Http\Controllers;

use App\Search;
// use Illuminate\Http\Request;
use GuzzleHttp\Client;

class SearchController extends Controller
{

    /**
     * @OA\Get(
     *     path="/search",
     *     operationId="/search",
     *     tags={"products"},
     *     @OA\Response(
     *         response="200",
     *         description="Returns product search results",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(ref="#/components/schemas/Product")
     *         )
     *     ),
     * )
     */
    public function searchProducts($key)
    {
        $client = new Client([
            'base_uri' => 'http://search-prod-srch-proj-srch-wi67dvqvtekxusxijxaaslg3uy.us-west-2.cloudsearch.amazonaws.com'
        ]);
        $response = $client->get('2013-01-01/search',[
            'query' => [
                'q'=>$key,
                'start'=>0,
                'size'=>25,
                'return'=>'id,name'
            ]
        ]);
        $data = $response->getBody()->getContents();
        // var_dump($data);
    
        return response()->json([
            "data" => json_decode($data),
            "metadata" => [
                "parameters" => [
                    'q'=>$key,
                    'start'=>0,
                    'size'=>25,
                    'return'=>'id,name'
                 ],
                "offset" => 0,
                "length" => 0
            ],
            "errors" => []
        ]);
    }
}