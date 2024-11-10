import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import NavLink from '@/Components/NavLink';
import { Head, Link } from '@inertiajs/react';
import Pagination from '@/Components/Pagination';

export default function Show({ auth, warehouse, spares }) {

    const warehouseData = warehouse.data;

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between" >

                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Warehouse Details
                    </h2>
                    <Link href={`/warehouses/${warehouseData.id}/spares/create`}
                        className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                    >
                        Add New Spare
                    </Link>
                </div>


            }
        >
            <Head title={`Warehouse ${warehouseData.location}`} />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="flex h-16 justify-between">
                                <h3 className="text-lg font-bold mb-4">Warehouse Information</h3>
                                <p><strong>Location:</strong> {warehouseData.location}</p>
                                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                    <NavLink
                                        href={route('warehouses.index')}
                                        active={route().current('warehouses.index')}
                                    >
                                        Assets
                                    </NavLink>
                                    <NavLink
                                        href={route('warehouses.index')}
                                        active={route().current('warehouses.index')}
                                    >
                                        Spares
                                    </NavLink>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-lg font-bold mb-4">Stored Spares</h3>
                                <table className="w-full text-m text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-green-700 dark:text-black-400 border-b-2 border-black-500">
                                        <tr>
                                            <th className="px-3 py-3">Type</th>
                                            <th className="px-3 py-3">Part Number</th>
                                            <th className="px-3 py-3">Description</th>
                                            <th className="px-3 py-3">Serial Number</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {spares.data.map((spare) => (
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={spare.id}>
                                                <td className="px-3 py-2">{spare.type}</td>
                                                <td className="px-3 py-2">{spare.part_number}</td>
                                                <td className="px-3 py-2">{spare.description}</td>
                                                <td className="px-3 py-2">{spare.serial_number}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <Pagination links={spares.meta.links} />
                            </div>

                            <div className="mt-6">
                                <Link
                                    href="/warehouses"
                                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700"
                                >
                                    Back to Warehouses
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
