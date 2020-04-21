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
        $product_client = new Client([
            'base_uri' => 'http://localhost:8000'
        ]);

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
        $data = json_decode($response->getBody()->getContents());
        // var_dump($data->hits->hit[0]);

        $products = [];
        // for each hit, get the product and add it to the result
        // this should DEFINITELY be refactored to loosen the coupling between them
        foreach ($data->hits->hit as $hit) {
            $product_response = $product_client->get("products/{$hit->fields->id}");
            // var_dump($product_response);
            $product_data = json_decode($product_response->getBody()->getContents());

            // $products[] = [
            //     'id' => $hit->fields->id,
            //     'name' => $hit->fields->name,
            //     'url' => "products/{$hit->fields->id}"
            // ];
            $products[] = $product_data;
        }
    
        return response()->json([
            "data" => $products,
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