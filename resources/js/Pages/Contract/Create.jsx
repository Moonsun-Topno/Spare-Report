import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { data, setData, post, errors, reset } = useForm({
        amc_number: '',
        customer_name: '',
        start_date: '',
        end_date: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('contracts.store'));
    };

    return (
        <Authenticated
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Add New Contract</h2>
                </div>
            }
        >
            <Head title="Create Contract" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-black-900">
                            <form onSubmit={onSubmit}>
                                <div className="mt-4">
                                    <InputLabel htmlFor="amc_number" value="AMC Number" />
                                    <TextInput
                                        id="amc_number"
                                        type="text"
                                        name="amc_number"
                                        value={data.amc_number}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) => setData("amc_number", e.target.value)}
                                    />
                                    <InputError message={errors.amc_number} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="customer_name" value="Customer Name" />
                                    <TextInput
                                        id="customer_name"
                                        type="text"
                                        name="customer_name"
                                        value={data.customer_name}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData("customer_name", e.target.value)}
                                    />
                                    <InputError message={errors.customer_name} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="start_date" value="Start Date" />
                                    <TextInput
                                        id="start_date"
                                        type="date"
                                        name="start_date"
                                        value={data.start_date}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData("start_date", e.target.value)}
                                    />
                                    <InputError message={errors.start_date} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="end_date" value="End Date" />
                                    <TextInput
                                        id="end_date"
                                        type="date"
                                        name="end_date"
                                        value={data.end_date}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData("end_date", e.target.value)}
                                    />
                                    <InputError message={errors.end_date} className="mt-2" />
                                </div>

                                <div className="mt-4 text-right">
                                    <Link href={route("contracts.index")}
                                          className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2">
                                        Cancel
                                    </Link>
                                    <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Authenticated>
    )
}
