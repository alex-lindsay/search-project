<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});

$router->group([''], function () use ($router) {
  $router->get('carts',  ['uses' => 'CartController@showAllCarts']);

  $router->get('carts/{id}', ['uses' => 'CartController@showOneCart']);

  $router->post('carts', ['uses' => 'CartController@create']);

  $router->delete('carts/{id}', ['uses' => 'CartController@delete']);

  $router->put('carts/{id}', ['uses' => 'CartController@update']);

// Add a product to a cart
  $router->post('carts/products', ['uses' => 'CartController@createCartProducts']);


});
