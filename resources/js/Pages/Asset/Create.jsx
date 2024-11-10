import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth, contract }) {
    const { data, setData, post, errors, reset } = useForm({
        make: '',
        model: '',
        category: '',
        description: '',
        location: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('contracts.assets.store', contract.id), {
            onSuccess: () => {
                // On successful asset creation, redirect back to the contract page
                window.location.href = route('contracts.show', contract.id);
            }
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Add New Asset</h2>
                </div>
            }
        >
            <Head title="Add Asset" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-black-900">
                            <form onSubmit={onSubmit}>
                                <div className="mt-4">
                                    <InputLabel htmlFor="make" value="Make" />
                                    <TextInput
                                        id="make"
                                        type="text"
                                        name="make"
                                        value={data.make}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) => setData("make", e.target.value)}
                                    />
                                    <InputError message={errors.make} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="model" value="Model" />
                                    <TextInput
                                        id="model"
                                        type="text"
                                        name="model"
                                        value={data.model}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData("model", e.target.value)}
                                    />
                                    <InputError message={errors.model} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="category" value="Category" />
                                    <TextInput
                                        id="category"
                                        type="text"
                                        name="category"
                                        value={data.category}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData("category", e.target.value)}
                                    />
                                    <InputError message={errors.category} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="description" value="Description" />
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={data.description}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData("description", e.target.value)}
                                    />
                                    <InputError message={errors.description} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="location" value="Location" />
                                    <TextInput
                                        id="location"
                                        type="text"
                                        name="location"
                                        value={data.location}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData("location", e.target.value)}
                                    />
                                    <InputError message={errors.location} className="mt-2" />
                                </div>

                                <div className="mt-4 text-right">
                                    <Link href={route("contracts.show", contract.id)}
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
        </AuthenticatedLayout>
    );
}
