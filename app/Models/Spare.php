<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Spare extends Model
{
    /** @use HasFactory<\Database\Factories\SpareFactory> */
    use HasFactory;

    protected $fillable = [
        'type',
        'part_number',
        'description',
        'serial_number',
    ];

    public function warehouse()
    {
        return $this->belongsTo(Warehouse::class);
    }
}
