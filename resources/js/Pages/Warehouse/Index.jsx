import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head,Link } from '@inertiajs/react';
import Pagination from '@/Components/Pagination';

export default function Index({ auth, warehouses }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between" >

                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Warehouses
                    </h2>

                    <Link
                        href={route("warehouses.create")}
                        className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                    >
                        Add New
                    </Link>
                </div>
            }
        >
            <Head title="Warehouses" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <table className="w-full text-m text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-green-700 dark:text-black-400 border-b-2 border-black-500">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-3">Location</th>
                                        <th className="px-3 py-3">Required Spares</th>
                                        <th className="px-3 py-3">Available Spares</th>
                                        <th className="px-3 py-3">Action</th> {/* Column for actions */}
                                    </tr>
                                </thead>
                                <tbody>
                                    {warehouses.data.map((warehouse) => (
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={warehouse.id}>
                                            <td className="px-3 py-2">{warehouse.location}</td>
                                            <td className="px-3 py-2">{warehouse.created_at}</td>
                                            <td className="px-3 py-2">{warehouse.updated_at}</td>
                                            <td className="px-3 py-2">
                                                <a
                                                    href={`/warehouses/${warehouse.id}`}
                                                    className="text-blue-600 hover:underline dark:text-blue-400"
                                                >
                                                    View
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <Pagination links={warehouses.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
