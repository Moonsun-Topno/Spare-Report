<?php

namespace Database\Factories;
use App\Models\Warehouse;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Spare>
 */
class SpareFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'type' => $this->faker->word, // Generates a random word as type
            'part_number' => $this->faker->word, // Generates a unique random word as part number
            'description' => $this->faker->sentence, // Generates a random sentence as description
            'serial_number' => $this->faker->unique()->word, // Unique random serial number
            'warehouse_id' => Warehouse::factory(), // Associates a new warehouse by creating one if needed
            //
        ];
    }
}
