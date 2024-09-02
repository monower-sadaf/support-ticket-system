import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { RxDashboard } from "react-icons/rx";
import { FiLogOut } from "react-icons/fi";

const Sidebar = () => {
    const [hidden, setHidden] = useState(false);
    return (
        <div
            className={`min-h-screen flex flex-col justify-between w-64 transition-all duration-300 ease-in-out ${
                hidden ? "w-10" : "w-64"
            }`}
        >
            <aside className=" bg-slate-600 px-4 py-2 h-full">
                <div className="flex gap-2 pb-5">
                    <img
                        src="/images/dummy_image.jpg"
                        alt="logo"
                        className="w-full h-10 rounded"
                    />
                    <button onClick={() => setHidden(!hidden)}>
                        <FaBars className="w-6 h-6 fill-slate-300" />
                    </button>
                </div>
                <ul className="flex flex-col gap-2">
                    <li>
                        <a
                            href="#"
                            className="flex items-center gap-2 bg-slate-300 p-1 pl-2 rounded text-slate-900"
                        >
                            <RxDashboard />
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="/project"
                            className="flex items-center gap-2 bg-slate-300 p-1 pl-2 rounded text-slate-900"
                        >
                            <RxDashboard />
                            <span>Projects</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center gap-2 bg-slate-300 p-1 pl-2 rounded text-slate-900"
                        >
                            <RxDashboard />
                            <span>Teams</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center gap-2 bg-slate-300 p-1 pl-2 rounded text-slate-900"
                        >
                            <RxDashboard />
                            <span>User Management</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center gap-2 bg-slate-300 p-1 pl-2 rounded text-slate-900"
                        >
                            <RxDashboard />
                            <span>Tickets</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center gap-2 bg-slate-300 p-1 pl-2 rounded text-slate-900"
                        >
                            <RxDashboard />
                            <span>Role Permissions</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center gap-2 bg-slate-300 p-1 pl-2 rounded text-slate-900"
                        >
                            <RxDashboard />
                            <span>Logs</span>
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className="flex items-center gap-2 bg-slate-300 p-1 pl-2 rounded text-slate-900"
                        >
                            <RxDashboard />
                            <span>Settings</span>
                        </a>
                    </li>
                </ul>
            </aside>
            <div className="flex items-center justify-between gap-1 border border-slate-600 p-2">
                <img
                    src="/images/dummy_image.jpg"
                    alt="Avatar"
                    className="w-16 rounded-full border border-slate-600"
                />
                <div>
                    <p>John Doe</p>
                    <p>Super Admin</p>
                </div>
                <button>
                    <FiLogOut className="w-6 h-6 text-slate-600" />
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
