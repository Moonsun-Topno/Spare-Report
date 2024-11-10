<?php

namespace App\Http\Controllers;

use App\Models\Contract;
use App\Http\Resources\ContractResource;
use App\Models\Asset;
use App\Http\Requests\StoreAssetRequest;
use App\Http\Requests\UpdateAssetRequest;
use Illuminate\Http\Request; // Import Request
use Inertia\Inertia;



class AssetController extends Controller
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
    public function create(Contract $contract)
    {
        // Pass the contract instance to the view so the form knows which contract it's tied to
        return Inertia::render('Asset/Create', [
            'contract' => $contract, // Send the contract details to the frontend
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreAssetRequest $request, Contract $contract)
    {
        $contract->assets()->create($request->validated());
        
        return redirect()->route('contracts.show', $contract)->with('success', 'Asset added successfully!');
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Asset $asset)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Asset $asset)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateAssetRequest $request, Asset $asset)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Asset $asset)
    {
        //
    }
}
