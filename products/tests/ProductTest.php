<?php

class ProductAPITest extends TestCase
{
  /**
   * A basic functional test example.
   *
   * @return void
   */
  public function testShouldReturnAllProducts()
  {
    $this->get("/api/products", []);
    $this->seeStatusCode(200);
    $this->seeJsonStructure([
      "data" => ["*" => ["id","name","short_name","description","vendor","price","sale_price","status","updated_at","created_at"]],
      "metadata" => ["parameters","offset","length"],
      "errors" => []]);
  }

  // public function testShouldReturnSearchProducts()
  // {
  //   $this->get("/api/products", []);
  //   $this->seeStatusCode(200);
  //   $this->seeJsonStructure([
  //     "data" => ["*" => ["id","name","short_name","description","vendor","price","sale_price","status","updated_at","created_at"]],
  //     "metadata" => ["parameters","offset","length"],
  //     "errors" => []]);
  // }

  public function testShouldNotCreateAProduct()
  {
    $this->post("/api/products", []);
    $this->seeStatusCode(501);
  //   $this->seeJsonStructure([
  //     "data" => ["*" => ["id","name","short_name","description","vendor","price","sale_price","status","updated_at","created_at"]],
  //     "metadata" => ["parameters","offset","length"],
  //     "errors" => []]);
  }

  public function testShouldNotUpdateAProduct()
  {
    $this->put("/api/products", []);
    $this->seeStatusCode(501);
    // $this->seeJsonStructure([
    //   "data" => ["*" => ["id","name","short_name","description","vendor","price","sale_price","status","updated_at","created_at"]],
    //   "metadata" => ["parameters","offset","length"],
      // "errors" => []]);
  }

}