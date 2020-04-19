<?php
namespace App;
use Illuminate\Database\Eloquent\Model;


/**
 * Class Pet
 *
 * @package Petstore30
 *
 * @author  Alex Lindsay <work@alex-lindsay.com>
 *
 * @OA\Schema(
 *     description="Product model",
 *     title="Product model",
 *     required={"name", "short_name", "description", "vendor", "price"},
 *     @OA\Xml(
 *         name="Product"
 *     )
 * )
 */
class Product extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name','short_name','description','vendor','price','sale_price'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];

    /**
     * @OA\Property(
     *     format="int64",
     *     description="Product ID.",
     *     title="Product ID",
     * )
     *
     * @var integer
     */
    private $id;
    
    /**
     * @OA\Property(
     *     description="Full descriptive name of the product.",
     *     title="Product Name",
     * )
     *
     * @var string
     */
    private $name;
    
    /**
     * @OA\Property(
     *     description="Familiar name of the product.",
     *     title="Product Nickname",
     * )
     *
     * @var string
     */
    private $short_name;
    
    /**
     * @OA\Property(
     *     description="Description of the product.",
     *     title="Product Description",
     * )
     *
     * @var string
     */
    private $description;
    
    /**
     * @OA\Property(
     *     format="int64",
     *     description="ID of the vendor of the product.",
     *     title="Product Vendor ID",
     * )
     *
     * @var integer
     */
    private $vendor;
    
    /**
     * @OA\Property(
     *     format="float",
     *     description="Retail price of the product.",
     *     title="Product Price",
     * )
     *
     * @var float
     */
    private $price;
    
    /**
     * @OA\Property(
     *     format="float",
     *     description="Sale price of the product.",
     *     title="Product Sale Price",
     * )
     *
     * @var float
     */
    private $sale_price;
    
    /**
     * @OA\Property(
     *     format="datetime",
     *     description="Time when the product was last updated.",
     *     title="Product Updated At",
     * )
     *
     * @var \DateTime
     */
    private $updated_at;
    
    /**
     * @OA\Property(
     *     format="datetime",
     *     description="Time when the product was created.",
     *     title="Product Created At",
     * )
     *
     * @var \DateTime
     */
    private $created_at;
}