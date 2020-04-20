<?php
namespace App\Http\Controllers;

use App\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    /**
     * @OA\Get(
     *     path="/products",
     *     operationId="/products",
     *     tags={"products"},
     *     @OA\Response(
     *         response="200",
     *         description="Returns all products",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(ref="#/components/schemas/Product")
     *         )
     *     ),
     * )
     */
    public function showAllProducts()
    {
        $data = Product::all();
        return response()->json([
            "data" => $data,
            "metadata" => [
                "parameters" => [],
                "offset" => 0,
                "length" => count(Product::all())
            ],
            "errors" => []
        ]);
    }

    public function showSearchProducts()
    {
        //TODO fine tune this to add business search logic
        $data = Product::all();
        return response()->json([
            "data" => $data,
            "metadata" => [
                "parameters" => [],
                "offset" => 0,
                "length" => count(Product::all())
            ],
            "errors" => []
        ]);
    }

    public function showOneProduct($id)
    {
        return response()->json(Product::find($id));
    }

    public function create(Request $request)
    {
        return response()->json([], 501);
        $product = Product::create($request->all());

        return response()->json($product, 201);
    }

    public function update($id, Request $request)
    {
        return response()->json([], 501);
        $product = Product::findOrFail($id);
        $product->update($request->all());

        return response()->json($product, 200);
    }

    public function delete($id)
    {
        return response()->json([], 501);
        Product::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}