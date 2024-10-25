import { Link } from "@inertiajs/inertia-react";
import { useState } from "react";
import { router } from "@inertiajs/react";
import Layout from "../../components/layout/Layout";
const Edit = ({errors}) => {
    return (
        <Layout>
            <div className="p-4">
                <div className="flex justify-between items-center pb-5">
                    <h3 className="text-2xl font-semibold">Add New Department</h3>
                    <Link
                        href="/departments"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Back to list
                    </Link>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="pb-4">
                        <fieldset className="border border-slate-300 pl-2 rounded">
                            <legend>
                                <label htmlFor="name" className="text-sm font-medium text-slate-700 px-2 bg-white after:content-['_*'] after:text-red-500">Name</label>
                            </legend>
                            <input name="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} type="text" className="w-full outline-none p-2" placeholder="Enter Name of Department" required />
                            {errors.name && <p className="text-red-500">{errors.name}</p>}
                        </fieldset>
                    </div>
                    <div className="flex justify-end gap-2">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Save
                        </button>
                        <Link
                            href="/departments"
                            className="bg-red-500 text-white px-4 py-2 rounded"
                        >
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </Layout>
    );
};
export default Edit;
