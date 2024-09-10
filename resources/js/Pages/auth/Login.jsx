import { useState } from "react";
import { router } from "@inertiajs/react";


const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        router.post("/login", {
            email: formData.email,
            password: formData.password,
        });
    };
    
    return (
        <section className="min-h-screen bg-slate-600 flex justify-center items-center">
            <form
                action="/login"
                className="flex flex-col gap-4 bg-slate-300 p-4 rounded"
                method="post"
                onSubmit={handleSubmit}
            >
                
                <h3 className="text-center text-[20px] font-semibold">Login</h3>
                <input
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    type="email"
                    placeholder="Enter Email"
                    className="p-1 outline-none rounded"
                    required
                />
                <input
                    name="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    type="password"
                    placeholder="Enter Password"
                    className="p-1 outline-none rounded"
                    required
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
            </form>
        </section>
    );
};

export default Login;