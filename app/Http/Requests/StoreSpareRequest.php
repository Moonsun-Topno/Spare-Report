<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSpareRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'type' => 'required|string|max:255', // Type is required, must be a string, and cannot exceed 255 characters
            'part_number' => 'required|string|max:255', // Part number must be unique in the 'spares' table
            'description' => 'nullable|string|max:1000', // Description is optional, must be a string, and cannot exceed 1000 characters
            'serial_number' => 'nullable|string|max:255|unique:spares,serial_number', // Serial number must be unique in the 'spares' table, or 'N/A'
       
            //
        ];
    }
}
