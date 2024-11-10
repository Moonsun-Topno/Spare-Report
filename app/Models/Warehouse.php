<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Warehouse extends Model
{
    /** @use HasFactory<\Database\Factories\WarehouseFactory> */
    use HasFactory;

    protected $fillable = [
        'location'
    ];

    public function spares()
    {
        return $this->hasMany(Spare::class);
    }
}