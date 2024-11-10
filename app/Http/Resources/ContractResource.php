<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;


class ContractResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return[
            'id' => $this->id,
            'amc_number' => $this->amc_number,  // Updated property name
            'start_date' => (new Carbon($this->start_date))->format('d-m-Y'),
            'end_date' => (new Carbon($this->end_date))->format('d-m-Y'),
            'customer_name' => $this->customer_name,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
