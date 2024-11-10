<?php

namespace App\Http\Controllers;

use App\Models\Warehouse;
use App\Http\Resources\WarehouseResource;
use App\Models\Spare;
use App\Http\Requests\StoreSpareRequest;
use App\Http\Requests\UpdateSpareRequest;

class SpareController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Warehouse $warehouse)
    {
        return inertia('Spare/Create', [
            'warehouse' => $warehouse, // Send the contract details to the frontend
        ]);
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSpareRequest $request, Warehouse $warehouse)
    {
        $warehouse->spares()->create($request->validated());

        return redirect()->route('warehouses.show', $warehouse)->with('success', 'Asset added successfully!');

        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Spare $spare)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Spare $spare)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSpareRequest $request, Spare $spare)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Spare $spare)
    {
        //
    }
}
