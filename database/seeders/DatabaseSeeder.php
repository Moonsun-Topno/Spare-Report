<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Contract;
use App\Models\Asset;
use App\Models\Warehouse;
use App\Models\Spare;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        //User::factory()->create([
          //  'name' => 'Test User',
            //'email' => 'test@example.com',
        //])
        
        Contract::factory()
            ->count(10)
            ->has(Asset::factory()->count(3)) // Each contract has 3 assets
            ->create();

        Warehouse::factory()
            ->count(5)
            ->has(Spare::factory()->count(20))
            ->create();

        
    }
}
