<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{
    /** @use HasFactory<\Database\Factories\ContractFactory> */
    use HasFactory;

    protected $fillable = [
        'amc_number',      // Add this line
        'customer_name',
        'start_date',
        'end_date',
        // Add any other fillable attributes here
    ];

    public function assets()
    {
        return $this->hasMany(Asset::class);
    }
}
