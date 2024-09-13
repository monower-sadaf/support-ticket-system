import Layout from "../../components/layout/Layout";
import { Link } from "@inertiajs/inertia-react";
const Create = () => {
    return (
        <Layout>
            <div className="p-4">
                <div className="flex justify-between items-center pb-5">
                    <h3 className="text-2xl font-semibold">Add New Project</h3>
                    <Link
                        href="/project"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Back to list
                    </Link>
                </div>
                <form action="">
                    <div className="grid grid-cols-2 gap-4 pb-4">
                        <div>
                            <label
                                htmlFor="name"
                                className="block mb-2 text-sm font-medium text-slate-900"
                            >
                                Project Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="description"
                                className="block mb-2 text-sm font-medium text-slate-900"
                            >
                                Project Description
                            </label>
                            <textarea
                                name="description"
                                id="description"
                                className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            ></textarea>
                        </div>
                        <div>
                            <label
                                htmlFor="start_date"
                                className="block mb-2 text-sm font-medium text-slate-900"
                            >
                                Start Date
                            </label>
                            <input
                                type="date"
                                name="start_date"
                                id="start_date"
                                className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="end_date"
                                className="block mb-2 text-sm font-medium text-slate-900"
                            >
                                End Date
                            </label>
                            <input
                                type="date"
                                name="end_date"
                                id="end_date"
                                className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="progress"
                                className="block mb-2 text-sm font-medium text-slate-900"
                            >
                                Project Progress
                            </label>
                            <input
                                type="number"
                                name="progress"
                                id="progress"
                                className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="status"
                                className="block mb-2 text-sm font-medium text-slate-900"
                            >
                                Project Status
                            </label>
                            <select
                                name="status"
                                id="status"
                                className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                            >
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};

export default Create;
