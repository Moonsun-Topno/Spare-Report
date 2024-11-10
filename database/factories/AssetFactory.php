<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Contract; // Make sure this line is included

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Asset>
 */
class AssetFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'contract_id' => Contract::inRandomOrder()->first()->id ?? Contract::factory()->create()->id,
            'make' => $this->faker->word,
            'model' => $this->faker->word,
            'category' => $this->faker->word,
            'description' => $this->faker->text,
            'location' => $this->faker->city, // Using city as a location example

            //
        ];
    }
}
