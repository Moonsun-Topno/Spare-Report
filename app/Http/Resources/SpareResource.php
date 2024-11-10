<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SpareResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'type' => $this->type,
            'part_number' => $this->part_number,
            'description' => $this->description,
            'serial_number' => $this->serial_number,
            'warehouse_id' => $this->warehouse_id,
        ];    
    }
}
