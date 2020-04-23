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
 *     description="Cart model",
 *     title="Cart model",
 *     required={"username"},
 *     @OA\Xml(
 *         name="Cart"
 *     )
 * )
 */
class Cart extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username'
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
    private $id;
    
    /**
     * @OA\Property(
     *     description="Username provided by Cognito",
     *     title="Cognito Username",
     * )
     *
     * @var string
     */
    private $username;
    
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