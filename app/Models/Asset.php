<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Asset extends Model
{
    /** @use HasFactory<\Database\Factories\AssetFactory> */
    use HasFactory;

    protected $fillable = [
        'make',
        'model',
        'category',
        'description',
        'location',
        'contract_id',  // This is the foreign key to associate the asset with a contract
    ];
    
    public function contract()
    {
        return $this->belongsTo(Contract::class);
    }
}
