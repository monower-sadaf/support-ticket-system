import Layout from "../../components/layout/Layout";
import { Link } from "@inertiajs/inertia-react";
const Show = ({ project }) => {
    return (
        <Layout>
            <div className="p-4">
                <div className="flex justify-between items-center pb-5">
                    <h3 className="text-2xl font-semibold">Project Details</h3>
                    <Link
                        href="/projects"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Back to list
                    </Link>
                </div>
                <div className="p-4 bg-slate-200 rounded">
                    <div className="flex justify-end gap-2">
                        <Link
                            href={`/projects/edit/${project.id}`}
                            className="bg-blue-500 text-white px-2 py-1 rounded"
                        >
                            Edit
                        </Link>
                        <Link
                            method="delete"
                            href={`/projects/delete/${project.id}`}
                            className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                            Delete
                        </Link>
                    </div>
                    <div className="flex justify-between items-center pb-3">
                        <h3 className="text-xl font-semibold">
                            ID: {project.id}
                        </h3>
                    </div>
                    <div className="flex justify-between items-center pb-3">
                        <h3 className="text-xl font-semibold">
                            Name: {project.name}
                        </h3>
                    </div>
                    <div className="flex justify-between items-center pb-3">
                        <h3 className="text-xl font-semibold">
                            Description: {project.description}
                        </h3>
                    </div>
                    <div className="flex justify-between items-center pb-3">
                        <h3 className="text-xl font-semibold">
                            Start Date: {project.start_date}
                        </h3>
                    </div>
                    <div className="flex justify-between items-center pb-3">
                        <h3 className="text-xl font-semibold">
                            End Date: {project.end_date}
                        </h3>
                    </div>
                    <div className="flex justify-between items-center pb-3">
                        <h3 className="text-xl font-semibold">
                            Duration: {project.duration}
                        </h3>
                    </div>
                    <div className="flex justify-between items-center pb-3">
                        <h3 className="text-xl font-semibold">
                            Progress: {project.project_progress.name}
                        </h3>
                    </div>
                    <div className="flex justify-between items-center pb-3">
                        <h3 className="text-xl font-semibold">
                            Status: {project.status == 1 ? "Active" : "Inactive"}
                        </h3>
                    </div>
                    <div className="flex justify-between items-center pb-3">
                        <h3 className="text-xl font-semibold">
                            Added on: {project.created_at}
                        </h3>
                    </div>
                    <div className="flex justify-between items-center pb-3">
                        <h3 className="text-xl font-semibold">Attachments:</h3>
                    </div>
                </div>
                {/* <div>
                    <div className="flex justify-end pb-3">pagination</div>
                    <div className="overflow-x-auto">
                        <table className="w-full border border-slate-600">
                            <thead className="bg-slate-600 text-center text-slate-100 h-10">
                                <tr>
                                    <td>ID</td>
                                    <td>Name</td>
                                    <td>Description</td>
                                    <td>Start Date</td>
                                    <td>End Date</td>
                                    <td>Duration</td>
                                    <td>Progress</td>
                                    <td>Status</td>
                                    <td>Added on</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{project.id}</td>
                                    <td>{project.name}</td>
                                    <td>{project.description}</td>
                                    <td>{project.start_date}</td>
                                    <td>{project.end_date}</td>
                                    <td>{project.duration}</td>
                                    <td>{project.progress}</td>
                                    <td>{project.status}</td>
                                    <td>{project.created_at}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div> */}
            </div>
        </Layout>
    );
};

export default Show;
