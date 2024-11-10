import Pagination from "@/Components/Pagination";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";

export default function Index({ auth, contracts }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between" >

                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Contracts
                    </h2>
                    
                    <Link
                        href={route("contracts.create")}
                        className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600"
                    >
                        Add New
                    </Link>
                </div>

            }>

            <Head title="Contracts" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">

                            <div>


                                <table className="w-full text-m text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-green-700 dark:text-black-400 border-b-2 border-black-500">
                                        <tr className="text-nowrap">
                                            <th className="px-3 py-3">Contract number</th>
                                            <th className="px-3 py-3">Customer name</th>
                                            <th className="px-3 py-3">Start Date</th>
                                            <th className="px-3 py-3">End Date</th>
                                            <th className="px-3 py-3">Action</th> {/* New column for actions */}

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {contracts.data.map((contract) =>
                                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <td className="px-3 py-2">{contract.amc_number}</td>
                                                <td className="px-3 py-2">{contract.customer_name}</td>
                                                <td className="px-3 py-2">{contract.start_date}</td>
                                                <td className="px-3 py-2">{contract.end_date}</td>
                                                <td className="px-3 py-2">
                                                    <a
                                                        href={`/contracts/${contract.id}`}
                                                        className="text-blue-600 hover:underline dark:text-blue-400"
                                                    >
                                                        View
                                                    </a>
                                                </td>
                                            </tr>


                                        )}
                                    </tbody>
                                </table>
                                <Pagination links={contracts.meta.links}></Pagination>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </AuthenticatedLayout>
    )

}