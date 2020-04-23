<?php
namespace App;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Cart
 *
 * @package Carts Service
 *
 * @author  Alex Lindsay <work@alex-lindsay.com>
 *
 * @OA\Schema(
 *     description="Cart Product model",
 *     title="Cart Product model",
 *     required={"name", "short_name", "description", "vendor", "price"},
 *     @OA\Xml(
 *         name="CartProduct"
 *     )
 * )
 */
class CartProduct extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'cart_id', 'product_id', 'product_name', 'product_short_name', 'product_description', 'product_vendor', 'product_price', 'quantity'
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
     *     description="Cart ID.",
     *     title="Cart ID",
     * )
     *
     * @var integer
     */
    private $cart_id;
    
    /**
     * @OA\Property(
     *     format="int64",
     *     description="Product ID.",
     *     title="Product ID",
     * )
     *
     * @var integer
     */
    private $product_id;
    
    /**
     * @OA\Property(
     *     description="Product Name when added to cart.",
     *     title="Product Name",
     * )
     *
     * @var string
     */
    private $product_name;
    
    /**
     * @OA\Property(
     *     description="Product Short Name when added to cart.",
     *     title="Product Short Name",
     * )
     *
     * @var string
     */
    private $product_short_name;
    
    /**
     * @OA\Property(
     *     description="Product Description when added to cart.",
     *     title="Product Description",
     * )
     *
     * @var string
     */
    private $product_description;
    
    /**
     * @OA\Property(
     *     description="Product Vendor ID when added to cart.",
     *     title="Product Vendor ID",
     * )
     *
     * @var integer
     */
    private $product_vendor_id;
    
    /**
     * @OA\Property(
     *     description="Product Price when added to cart.",
     *     title="Product Price",
     * )
     *
     * @var float
     */
    private $product_price;
    
    /**
     * @OA\Property(
     *     description="Quantity of product added to cart.",
     *     title="Quantity",
     * )
     *
     * @var integer
     */
    private $quantity;
    
    /**
     * @OA\Property(
     *     format="datetime",
     *     description="Time when the cart was last updated.",
     *     title="Cart Updated At",
     * )
     *
     * @var \DateTime
     */
    private $updated_at;
    
    /**
     * @OA\Property(
     *     format="datetime",
     *     description="Time when the cart was created.",
     *     title="Cart Created At",
     * )
     *
     * @var \DateTime
     */
    private $created_at;
}