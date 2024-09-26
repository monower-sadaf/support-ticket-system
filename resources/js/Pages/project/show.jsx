import Layout from "../../components/layout/Layout";
const Show = ({ project }) => {
    return (
        <Layout>
            <div className="p-4">
                <div className="flex justify-between items-center pb-5">
                    <h3 className="text-2xl font-semibold">Project</h3>
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
                </div>
            </div>
        </Layout>
    );
};

export default Show;
