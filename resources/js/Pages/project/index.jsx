import Layout from "../../components/layout/Layout";
import { Link } from "@inertiajs/inertia-react";
const Index = ({ projects }) => {
    return (
        <Layout>
            <div className="p-4">
                <div className="flex justify-between items-center pb-5">
                    <h3 className="text-2xl font-semibold">Projects</h3>
                    <Link
                        href="/project/create"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Add new
                    </Link>
                </div>
                <div>
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
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {projects.map((project, index) => (
                                    <tr
                                        key={index}
                                        className="text-center h-8 border border-slate-600 [&>td]:border [&>td]:border-slate-600"
                                    >
                                        <td>{index + 1}</td>
                                        {/* <td>{project.id}</td> */}
                                        <td>{project.name}</td>
                                        <td>{project.description ?? "-"}</td>
                                        <td>{project.start_date ?? "-"}</td>
                                        <td>{project.end_date ?? "-"}</td>
                                        <td>{project.duration ?? "-"}</td>
                                        <td>{project.progress}</td>
                                        <td>{project.status}</td>
                                        <td>{project.created_at}</td>
                                        <td className="space-x-2">
                                            <Link href={`/project/details/${project.id}`} className="bg-green-500 text-white px-2 py-1 rounded">
                                                View
                                            </Link>
                                            <Link
                                                href={`/project/edit/${project.id}`}
                                                className="bg-blue-500 text-white px-2 py-1 rounded"
                                            >
                                                Edit
                                            </Link>
                                            <Link method="delete" href={`/project/delete/${project.id}`} className="bg-red-500 text-white px-2 py-1 rounded">
                                                Delete
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Index;