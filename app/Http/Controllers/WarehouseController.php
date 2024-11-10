<?php

namespace App\Http\Controllers;

use App\Models\Warehouse;
use App\Http\Resources\WarehouseResource;
use App\Http\Resources\SpareResource;
use App\Http\Requests\StoreWarehouseRequest;
use App\Http\Requests\UpdateWarehouseRequest;

class WarehouseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Warehouse::query();
        $warehouses = $query->paginate(10)->onEachSide(1);

        return inertia("Warehouse/Index", [
            "warehouses" => WarehouseResource::collection($warehouses),
        ]);
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Warehouse/Create");
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreWarehouseRequest $request)
    {
        $warehouse = Warehouse::create($request->validated());

        return redirect()->route('warehouses.index')->with('success', 'Contract created successfully.');

        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Warehouse $warehouse)
    {
        // Load spares associated with the warehouse
        $spares = $warehouse->spares()->paginate(10)->onEachSide(1);

        if ($spares->isEmpty()) {
            logger("No spares found for warehouse ID: " . $warehouse->id);
        }
        // Return the Inertia view with the warehouse and its spares
        return inertia('Warehouse/Show', [
            'warehouse' => new WarehouseResource($warehouse),
            'spares' => SpareResource::collection($spares),
        ]);
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Warehouse $warehouse)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateWarehouseRequest $request, Warehouse $warehouse)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Warehouse $warehouse)
    {
        //
    }
}
