import Layout from "../../components/layout/Layout";
const Index = () => {
    return (
        <Layout>
            <div className="p-4">
                <div className="flex justify-between items-center pb-5">
                    <h3 className="text-2xl font-semibold">Projects</h3>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded">
                        Add new
                    </button>
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
                                <tr className="text-center h-8 border border-slate-600 [&>td]:border [&>td]:border-slate-600">
                                    <td>1</td>
                                    <td>demo name</td>
                                    <td>demo Description</td>
                                    <td>02/09/2024</td>
                                    <td>02/09/2024</td>
                                    <td>60</td>
                                    <td>running</td>
                                    <td>active</td>
                                    <td>26/08/2024</td>
                                    <td>
                                        <button className="bg-blue-500 text-white px-2 py-1 rounded">
                                            Edit
                                        </button>
                                        <button className="bg-red-500 text-white px-2 py-1 rounded">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Index;
