<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('spares', function (Blueprint $table) {
            $table->id();
            $table->string('type'); // Type of spare part
            $table->string('part_number'); // Part number of the spare
            $table->text('description')->nullable(); // Description of the spare part
            $table->string('serial_number')->nullable()->unique()->default('N/A'); // Unique serial number or N/A
            $table->foreignId('warehouse_id')->constrained()->onDelete('no action'); // Foreign key for warehouse with no action on delete
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('spares');
    }
};
