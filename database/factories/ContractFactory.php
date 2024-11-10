<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Contract>
 */
class ContractFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'amc_number' => $this->faker->unique()->bothify('AMC-###'), // Unique AMC# format
            'start_date' => $this->faker->date(),
            'end_date' => $this->faker->date(),
            'customer_name' => $this->faker->company,
            //
        ];
    }
}
