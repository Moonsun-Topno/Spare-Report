import { Head, Link } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Pagination from '@/Components/Pagination';

export default function Show({ auth, contract, assets }) {

    const contractData = contract.data;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between" >

                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Contract Details:{contractData.amc_number}
                    </h2>

                    <Link href={`/contracts/${contractData.id}/assets/create`}
                        className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                    >
                        <button>Add Asset</button>
                    </Link>
                </div>

            }
        >
            <Head title={`Contract ${contractData.amc_number}`} />


            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div>
                                <h3 className="text-lg font-bold mb-4">Contract Information</h3>
                                <p><strong>Contract Number:</strong> {contractData.amc_number}</p>
                                <p><strong>Customer Name:</strong> {contractData.customer_name}</p>
                                <p><strong>Start Date:</strong> {contractData.start_date}</p>
                                <p><strong>End Date:</strong> {contractData.end_date}</p>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-lg font-bold mb-4">Assets List</h3>
                                <table className="w-full text-m text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-green-700 dark:text-black-400 border-b-2 border-black-500">
                                        <tr className="text-nowrap">
                                            <th className="px-3 py-3">Asset Make</th>
                                            <th className="px-3 py-3">Model</th>
                                            <th className="px-3 py-3">Category</th>
                                            <th className="px-3 py-3">Description</th>
                                            <th className="px-3 py-3">Location</th> {/* New column for location */}

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {assets.data.map((asset) => (
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={asset.id}>
                                                <td className="px-3 py-2">{asset.make}</td>
                                                <td className="px-3 py-2">{asset.model}</td>
                                                <td className="px-3 py-2">{asset.category}</td>
                                                <td className="px-3 py-2">{asset.description}</td>
                                                <td className="px-3 py-2">{asset.location}</td> {/* Display location */}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <Pagination links={assets.meta.links} />
                            </div>

                            <div className="mt-6">
                                <Link
                                    href="/contracts"
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                                >
                                    Back to Contracts
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
