<?php
namespace App\Http\Controllers;

use App\Cart;
use App\CartProduct;
use Illuminate\Http\Request;
use \Firebase\JWT\JWT;
use \Firebase\JWT\JWK;
use \GuzzleHttp\Client;

class CartController extends Controller
{
    const JWT_KEYS = ["J4hN/RWSIeh5hFDzszeyHOeeWmMHZOS5Nrvpb5ZNVD0=" => [
        "alg"=>"RS256",
        "e"=>"AQAB",
        "kid"=>"J4hN/RWSIeh5hFDzszeyHOeeWmMHZOS5Nrvpb5ZNVD0=",
        "kty"=>"RSA",
        "n"=>"tlsL0JeMGHrhLsdPly2bQvN6uV09motM7HSHrfkxVtcEeSx-_dCV1DSom5B3smlj6uoADOgnt75CxbPOmjeagduKTmrAQmgX2au1i1_PkKANOsuvilUcXRyNg8Y5VZtS64DMlCifVfgO9AMpsGhb_wpjyQhEtc0e0NshIlE_BBrlHy_enuhWoYtrmn6517YN-kFxK2y-eJWJZ4X199gQbJ47nlMpVGv5wSdf5bVxpIuN5e0Wg7oQIbW0jCk9ge3T09lXidFZd84CeOVPQbHeJ0rO39k4CDXqt8UmB8F3N2X-RBwyj-CMVm_ze3qB0NfpMqKDrb3loYucy7MWFkRnvw",
        "use"=>"sig"
    ],"Sl8vjEm+Kmb4P82HnWOmVXw6gZN6kTvzyeXDHUSlz/k=" => [
        "alg"=>"RS256",
        "e"=>"AQAB",
        "kid"=>"Sl8vjEm+Kmb4P82HnWOmVXw6gZN6kTvzyeXDHUSlz/k=",
        "kty"=>"RSA",
        "n"=>"qKkRalDGMBh4SVWwIKtdm-PhNlXlQ5ZRgiBPpYEBztsAyw0ZhDqO8RwRysFXPM7-aM9g3NjNufPp4tV7jb9f5RrtT5DDFzQZeFBx18YXAOSCzPNm_UoX544mCrG6bJNZCwwqK2VFjknXmm1RXDLPuK26ZrRMr3RTpWwybPF9MjewkmpTVMytq6DZ-69Idpj6-p6fJybchorxbcj514FxH0yx9RzZiPUGZlQOUZzMgcIMU0Ne_SzJkZghNUtaP-h2iVYB3CgjIqIh4idUlRB9tRDaUBRl6jdx6j4oXKl0K8U-cWMrJDgMDJ12QMj_cbLMrZpyiM3oPuRoy76D4YM1DQ",
        "use"=>"sig"
    ]];
    const RAW_JWT_KEYS = [[
        "alg"=>"RS256",
        "e"=>"AQAB",
        "kid"=>"J4hN/RWSIeh5hFDzszeyHOeeWmMHZOS5Nrvpb5ZNVD0=",
        "kty"=>"RSA",
        "n"=>"tlsL0JeMGHrhLsdPly2bQvN6uV09motM7HSHrfkxVtcEeSx-_dCV1DSom5B3smlj6uoADOgnt75CxbPOmjeagduKTmrAQmgX2au1i1_PkKANOsuvilUcXRyNg8Y5VZtS64DMlCifVfgO9AMpsGhb_wpjyQhEtc0e0NshIlE_BBrlHy_enuhWoYtrmn6517YN-kFxK2y-eJWJZ4X199gQbJ47nlMpVGv5wSdf5bVxpIuN5e0Wg7oQIbW0jCk9ge3T09lXidFZd84CeOVPQbHeJ0rO39k4CDXqt8UmB8F3N2X-RBwyj-CMVm_ze3qB0NfpMqKDrb3loYucy7MWFkRnvw",
        "use"=>"sig"
    ],[
        "alg"=>"RS256",
        "e"=>"AQAB",
        "kid"=>"Sl8vjEm+Kmb4P82HnWOmVXw6gZN6kTvzyeXDHUSlz/k=",
        "kty"=>"RSA",
        "n"=>"qKkRalDGMBh4SVWwIKtdm-PhNlXlQ5ZRgiBPpYEBztsAyw0ZhDqO8RwRysFXPM7-aM9g3NjNufPp4tV7jb9f5RrtT5DDFzQZeFBx18YXAOSCzPNm_UoX544mCrG6bJNZCwwqK2VFjknXmm1RXDLPuK26ZrRMr3RTpWwybPF9MjewkmpTVMytq6DZ-69Idpj6-p6fJybchorxbcj514FxH0yx9RzZiPUGZlQOUZzMgcIMU0Ne_SzJkZghNUtaP-h2iVYB3CgjIqIh4idUlRB9tRDaUBRl6jdx6j4oXKl0K8U-cWMrJDgMDJ12QMj_cbLMrZpyiM3oPuRoy76D4YM1DQ",
        "use"=>"sig"
    ]];
    
    /**
     * @OA\Get(
     *     path="/carts",
     *     operationId="/carts",
     *     tags={"carts"},
     *     @OA\Response(
     *         response="200",
     *         description="Returns all carts",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(ref="#/components/schemas/Cart")
     *         )
     *     ),
     * )
     */
    public function showAllCarts(Request $request)
    {
        // try {
        //     $data = \DB::connection()->table('carts')->find(1);
        // } catch (\Exception $e) {
        //     die("Could not connect to the database.  Please check your configuration. error:" . $e );
        // }
        $data = Cart::where('username', $request->json()->get("username"))->get();
        return response()->json([
            "data" => $data,
            "metadata" => [
                "parameters" => [],
                "offset" => 0,
                "length" => 1,
            ],
            "errors" => []
        ]);
    }

    public function showOneCart($id)
    {
        return response()->json(["cart" => Cart::find($id), "cart_products" => CartProduct::where("cart_id", $id)->get()]);
    }

    public function create(Request $request)
    {
        $errors = [];
        $token = substr($request->header("Authorization"), 7);
        $tks = \explode('.', $token);

        try {
            $keys = \Firebase\JWT\JWK::parseKeySet(["keys" => self::JWT_KEYS]);
            $decoded = \Firebase\JWT\JWT::decode($token, $keys, array('RS256','RS512'));
            if ($decoded->iss != env("JWT_ISSUER")) {throw new \Exception("Invalid Token");}
            if ($decoded->client_id != env("JWT_CLIENT_ID")) {throw new \Exception("Invalid Token");}
            if ($decoded->token_use != env("JWT_USE")) {throw new \Exception("Invalid Token");}
            if ($decoded->sub != $request->json()->get("username")) {throw new \Exception("Invalid Token");}
            // die(var_dump($decoded));
        } catch (\Firebase\JWT\ExpiredException $exp) {
            $errors[] = "Access Denied";
            $errors[] = $exp->getMessage();
            http_response_code(401);
            return response()->json(["errors"=>$errors]);
        } catch (\Exception $e) {
            $errors[] = "Access Denied";
            $errors[] = $e->getMessage();
            http_response_code(401);
            return response()->json(["errors"=>$errors]);
        } 
        try {
            // look for existing cart before creating one...
            $cart = Cart::where('username', $request->json()->get("username"))->first();
            // die(var_dump($cart));
            if (!$cart) {
                $cart = Cart::create($request->json()->all());
            }
        } catch (\Exception $e) {
            $errors[] = "Something went wrong retrieving a cart";
            $errors[] = $e->getMessage();
            http_response_code(401);
            return response()->json(["errors"=>$errors]);
        }
        return response()->json([
            "data" => $cart,
        ], 201);
        // return response()->json($cart, 201);
    }

    public function update($id, Request $request)
    {
        return response()->json([], 501);
        $cart = Cart::findOrFail($id);
        $cart->update($request->all());

        return response()->json($cart, 200);
    }

    public function delete($id)
    {
        return response()->json([], 501);
        Cart::findOrFail($id)->delete();
        // delete related cart products
        // TODO use a database constraint here?
        return response('Deleted Successfully', 200);
    }


    public function createCartProducts(Request $request)
    {
        $errors = [];
        $token = substr($request->header("Authorization"), 7);
        $tks = \explode('.', $token);

        try {
            $keys = \Firebase\JWT\JWK::parseKeySet(["keys" => self::JWT_KEYS]);
            $decoded = \Firebase\JWT\JWT::decode($token, $keys, array('RS256','RS512'));
            if ($decoded->iss != env("JWT_ISSUER")) {throw new \Exception("Invalid Token");}
            if ($decoded->client_id != env("JWT_CLIENT_ID")) {throw new \Exception("Invalid Token");}
            if ($decoded->token_use != env("JWT_USE")) {throw new \Exception("Invalid Token");}
            // if ($decoded->sub != $request->json()->get("username")) {throw new \Exception("Invalid Token");}
            // die(var_dump($decoded));
        } catch (\Firebase\JWT\ExpiredException $exp) {
            $errors[] = "Access Denied";
            $errors[] = $exp->getMessage();
            http_response_code(401);
            return response()->json(["errors"=>$errors]);
        } catch (\Exception $e) {
            $errors[] = "Access Denied";
            $errors[] = $e->getMessage();
            http_response_code(401);
            return response()->json(["errors"=>$errors]);
        } 
        try {
            // look for existing cart before creating one...
            $cart = Cart::where('username', $decoded->sub)->first();
            // die(var_dump($cart));
            if (!$cart) {
                $cart = Cart::create(['username'=> $decoded->sub]);
            }
            $cart_products = [];
            $warnings = [];
        // for each product found in the request
            // add it to the cart
            // if any products are not found, add it to and errors response
            // if there are any errors return an errors response
            $product_client = new \GuzzleHttp\Client([
                'base_uri' => env("PRODUCT_SERVICE"),
                ]);
            foreach($request->json()->get("products") as $product_request) {
                $res = $product_client->get("/products/" . $product_request["product_id"],[]);
                if ($res->getStatusCode() == 200) {
                    // TODO add logic to merge products if the same product is added more than once
                    // TODO get vendor name instead of vendor ID.
                    $product = json_decode($res->getBody());
                    // check for deleted or disabled products and return a warning
                    if ($product->status == "active") {
                        $cart_product = CartProduct::create([
                            "cart_id" => $cart["id"],
                            "product_id" => $product->id,
                            "product_name" => $product->name,
                            "product_short_name" => $product->short_name,
                            // "product_description" => $product->description,
                            "product_description" => substr($product->description, 0, 250),
                            "product_vendor" => $product->vendor,
                            "product_price" => $product->sale_price,
                            "quantity" => $product_request["quantity"],
                        ]);
                    } else {
                        $warnings[] = "\"$product->name ($product->id)\" could not be added to the cart as it is $product->status";
                    }
                }
            }
            $cart_products = CartProduct::where("cart_id", $cart["id"])->get();
        } catch (\Exception $e) {
            $errors[] = "Something went wrong retrieving a cart";
            $errors[] = $e->getMessage();
            http_response_code(401);
            return response()->json(["errors"=>$errors]);
        }
        return response()->json([
            "data" => [
                "cart" => $cart,
                "cart_products" => $cart_products,
            ],
            "warnings" => $warnings
        ], 201);
        // return response()->json($cart, 201);
    }

    public function deleteCartProducts(Request $request, $cart_id, $product_id)
    {
        $errors = [];
        // $token = substr($request->header("Authorization"), 7);
        $token = $request->bearerToken();
        $tks = \explode('.', $token);

        try {
            $keys = \Firebase\JWT\JWK::parseKeySet(["keys" => self::JWT_KEYS]);
            $decoded = \Firebase\JWT\JWT::decode($token, $keys, array('RS256','RS512'));
            if ($decoded->iss != env("JWT_ISSUER")) {throw new \Exception("Invalid Token");}
            if ($decoded->client_id != env("JWT_CLIENT_ID")) {throw new \Exception("Invalid Token");}
            if ($decoded->token_use != env("JWT_USE")) {throw new \Exception("Invalid Token");}
            // if ($decoded->sub != $request->json()->get("username")) {throw new \Exception("Invalid Token");}
            // die(var_dump($decoded));
        } catch (\Firebase\JWT\ExpiredException $exp) {
            $errors[] = "Access Denied";
            $errors[] = $exp->getMessage();
            http_response_code(401);
            return response()->json(["errors"=>$errors]);
        } catch (\Exception $e) {
            $errors[] = "Access Denied";
            $errors[] = $e->getMessage();
            http_response_code(401);
            return response()->json(["errors"=>$errors]);
        } 
        try {
            //TODO verify that the cart is owned by the user posting the delete
            CartProduct::where([
                ['cart_id', $cart_id],
                ['product_id', $product_id]]
            )->delete();

            // return response()->json([
            //     "foo" => "bar",
            // "cart" => Cart::find($cart_id), 
            // "cart_products" => CartProduct::where("cart_id", $cart_id)->get()
            // ]);

        } catch (\Exception $e) {
            $errors[] = "Something went wrong while deleting an item from the cart";
            $errors[] = $e->getMessage();
            http_response_code(401);
            return response()->json(["errors"=>$errors]);
        }

        return response()->json([
            "data" => [
                "cart" => Cart::find($cart_id), 
                "cart_products" => CartProduct::where("cart_id", $cart_id)->get()
            ]
        ]);
        // return redirect()->action('CartController@showOneCart', ['id' => $cart_id]);
    }

}