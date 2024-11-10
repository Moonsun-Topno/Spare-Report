<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request; // Import Request
use App\Models\Contract;
use App\Http\Resources\ContractResource;
use App\Http\Resources\AssetResource;
use App\Http\Requests\StoreContractRequest;
use App\Http\Requests\UpdateContractRequest;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ContractController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Contract::query();
        $contracts = $query->paginate(25)->onEachSide(1);

        return inertia("Contract/Index",[
            "contracts" => ContractResource::collection($contracts),
        ]);
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Contract/Create");

        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreContractRequest $request)
    {
        $contract = Contract::create($request->validated());

        return redirect()->route('contracts.index')->with('success', 'Contract created successfully.');

        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Contract $contract)
    {
        $assets = $contract->assets()->paginate(10)->onEachSide(1); // Adjust pagination as needed

        // Return the Inertia view with the contract and its assets
        return inertia('Contract/Show', [
            'contract' => new ContractResource($contract),
            'assets' => AssetResource::collection($assets),
        ]);
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Contract $contract)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateContractRequest $request, Contract $contract)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Contract $contract)
    {
        //
    }
}
