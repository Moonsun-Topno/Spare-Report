import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { useForm, Head, Link } from "@inertiajs/react";

export default function Create({ auth, warehouse }) {

    const { data, setData, post, errors, reset } = useForm({
        type: '',
        part_number: '',
        description: '',
        serial_number: '',

    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('warehouses.spares.store', warehouse.id),{
            onSuccess: () => {
                window.location.href = route('warehous.show', warehouse.id);
            }
        });

    };

    //this is where css and html are
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justiify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">Add New Spare</h2>

                </div>
            }>
            <Head title={`Add Spare to ${warehouse.location}`}/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-black-900">
                            <form onSubmit={onSubmit}>
                                <div className="mt-4">
                                    <InputLabel htmlFor="type" value="Type" />
                                    <TextInput
                                        id="type"
                                        type="text"
                                        name="type"
                                        value={data.type}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) => setData("type", e.target.value)}
                                    />
                                    <InputError message={errors.type} className="mt-2" />
                                </div>

                                <div className="mt-4">
                                    <InputLabel htmlFor="part-number" value="Part number" />
                                    <TextInput
                                        id="part-number"
                                        type="text"
                                        name="part-number"
                                        value={data.part_number}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData("part_number", e.target.value)}
                                    />
                                    <InputError message={errors.part_number} className="mt-2" />
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
                                    <InputLabel htmlFor="serial-number" value="Serial number" />
                                    <TextInput
                                        id="serial-number"
                                        type="text"
                                        name="serial-number"
                                        value={data.serial_number}
                                        className="mt-1 block w-full"
                                        onChange={(e) => setData("serial_number", e.target.value)}
                                    />
                                    <InputError message={errors.serial_number} className="mt-2" />
                                </div>

                                <div className="mt-4 text-right">
                                    <Link href={route("warehouses.show", warehouse.id)}
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