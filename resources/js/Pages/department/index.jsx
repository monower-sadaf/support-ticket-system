import Layout from "../../components/layout/Layout";
import { Link } from "@inertiajs/inertia-react";
const Index = ({departments}) => {
    return (
        <Layout>
            <div className="p-4">
                <div className="flex justify-between items-center pb-5">
                    <h3 className="text-2xl font-semibold">Departments</h3>
                    <Link
                        href="/departments/create"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                    >
                        Add new
                    </Link>
                </div>
                
                {
                    departments.length == 0 ? (
                        <p className="text-center">No Departments Found.</p>
                    ) : (
                        <div>
                            <div className="flex justify-end pb-3">pagination</div>
                            <div className="overflow-x-auto">
                                <table className="w-full border border-slate-600">
                                    <thead className="bg-slate-600 text-center text-slate-100 h-10">
                                        <tr>
                                            <td>SI</td>
                                            <td>Name</td>
                                            <td></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {departments.map((department, index) => (
                                            <tr
                                                key={index}
                                                className="text-center h-10 border border-slate-600 [&>td]:border [&>td]:border-slate-600"
                                            >
                                                <td>{index + 1}</td>
                                                <td>{department.name}</td>
                                                <td className="space-x-2"> 
                                                    <Link
                                                        href={`/departments/${department.id}/edit`}
                                                        className="bg-blue-500 text-white px-2 py-1 rounded"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <Link method="delete" href={`/departments/delete/${department.id}`} className="bg-red-500 text-white px-2 py-1 rounded">
                                                        Delete
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )
                }
            </div>
        </Layout>
    );
};

export default Index;
