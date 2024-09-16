import { useState } from "react";
import { router } from "@inertiajs/react";
import Layout from "../../components/layout/Layout";
import { Link } from "@inertiajs/inertia-react";
const Edit = ({ project, errors }) => {
    const [formData, setFormData] = useState({
        name: project.name,
        description: project.description,
        start_date: project.start_date,
        end_date: project.end_date,
        duration: project.duration,
        progress: project.progress,
        status: project.status,
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        router.put(`/project/update/${project.id}`, {
            name: formData.name,
            description: formData.description,
            start_date: formData.start_date,
            end_date: formData.end_date,
            duration: formData.duration,
            progress: formData.progress,
            status: formData.status,
        });
    };

    return (
        <Layout>
            <div className="p-4">
                <div className="flex justify-between items-center pb-5">
                    <h3 className="text-2xl font-semibold">Edit Project</h3>
                    <Link
                        href="/project"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Back to list
                    </Link>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 gap-4 pb-4">
                        <div className="grid grid-cols-1 gap-4">
                            <fieldset className="border border-slate-300 pl-2 rounded">
                                <legend>
                                    <label
                                        htmlFor="name"
                                        className="text-sm font-medium text-slate-900 px-2 bg-white after:content-['_*'] after:text-red-600"
                                    >
                                        Project Name
                                    </label>
                                </legend>
                                <input
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="bg-slate-50 text-slate-900 text-sm w-full p-2 outline-none"
                                    placeholder="Enter Project Name"
                                    required
                                />

                                {errors.name && (
                                    <span className="text-red-600 text-sm">
                                        {errors.name}
                                    </span>
                                )}
                            </fieldset>
                            <fieldset className="border border-slate-300 pl-2 rounded">
                                <legend>
                                    <label
                                        htmlFor="description"
                                        className="text-sm font-medium text-slate-900 px-2 bg-white "
                                    >
                                        Project Description
                                    </label>
                                </legend>

                                <textarea
                                    value={formData.description}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            description: e.target.value,
                                        })
                                    }
                                    name="description"
                                    id="description"
                                    className="bg-slate-50 text-slate-900 text-sm w-full p-2 outline-none"
                                    placeholder="Enter Project Description"
                                ></textarea>
                            </fieldset>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <fieldset className="border border-slate-300 pl-2 rounded">
                                <legend>
                                    <label
                                        htmlFor="start_date"
                                        className="text-sm font-medium text-slate-900 px-2 bg-white"
                                    >
                                        Start Date
                                    </label>
                                </legend>

                                <input
                                    value={formData.start_date}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            start_date: e.target.value,
                                        })
                                    }
                                    type="date"
                                    name="start_date"
                                    id="start_date"
                                    className="bg-slate-50 text-sm rounded w-full p-2 outline-none text-gray-500"
                                />
                            </fieldset>
                            <fieldset className="border border-slate-300 pl-2 rounded">
                                <legend>
                                    <label
                                        htmlFor="end_date"
                                        className="text-sm font-medium text-slate-900 px-2 bg-white"
                                    >
                                        End Date
                                    </label>
                                </legend>

                                <input
                                    value={formData.end_date}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            end_date: e.target.value,
                                        })
                                    }
                                    type="date"
                                    name="end_date"
                                    id="end_date"
                                    className="bg-slate-50 text-gray-500 text-sm rounded w-full p-2 outline-none"
                                />
                            </fieldset>
                            <fieldset className="border border-slate-300 px-2 rounded">
                                <legend>
                                    <label
                                        htmlFor="progress"
                                        className="text-sm font-medium text-slate-900 px-2 bg-white"
                                    >
                                        Project Progress
                                    </label>
                                </legend>
                                <select
                                    name="progress"
                                    className="w-full bg-slate-50 p-2 text-sm"
                                    id="progress"
                                    value={formData.progress}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            progress: e.target.value,
                                        })
                                    }
                                >
                                    <option value="0">Planning</option>
                                    <option value="1">
                                        Requirements Analysis
                                    </option>
                                    <option value="2">Design</option>
                                    <option value="3">Development</option>
                                    <option value="4">Testing</option>
                                    <option value="5">Deployment</option>
                                    <option value="6">Maintenance</option>
                                    <option value="7">Completed</option>
                                </select>
                            </fieldset>
                            <fieldset className="border border-slate-300 px-2 rounded">
                                <legend>
                                    <label
                                        htmlFor="status"
                                        className="block mb-2 text-sm font-medium text-slate-900"
                                    >
                                        Project Status
                                    </label>
                                </legend>

                                <select
                                    value={formData.status}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            status: e.target.value,
                                        })
                                    }
                                    name="status"
                                    id="status"
                                    className="w-full bg-slate-50 p-2 text-sm"
                                >
                                    <option value="1">Active</option>
                                    <option value="0">Inactive</option>
                                </select>
                            </fieldset>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-4 py-2 rounded"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </Layout>
    );
};
export default Edit;
