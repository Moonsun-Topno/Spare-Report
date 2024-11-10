<?php

use App\Http\Controllers\ContractController;
use App\Http\Controllers\AssetController;
use App\Http\Controllers\WarehouseController;
use App\Http\Controllers\SpareController;

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('auth')->group(function () {

Route::resource('contracts', ContractController::class);
Route::get('/contracts', [ContractController::class, 'index'])->name('contracts.index');
Route::resource('assets', AssetController::class);
Route::get('contracts/{contract}/assets/create', [AssetController::class, 'create'])->name('contracts.assets.create');
Route::post('contracts/{contract}/assets', [AssetController::class, 'store'])->name('contracts.assets.store');


// Routes for assets (nested under contracts)
Route::resource('contracts.assets', AssetController::class);
Route::resource('warehouses.spares', SpareController::class);

// Warehouse Routes
Route::resource('warehouses', WarehouseController::class);

// Spare Routes
Route::resource('spares', SpareController::class);
});


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
