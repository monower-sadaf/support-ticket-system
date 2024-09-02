const Login = () => {
    return (
        <section className="min-h-screen bg-slate-600 flex justify-center items-center">
            <form
                action="#"
                className="flex flex-col gap-4 bg-slate-300 p-4 rounded"
            >
                <h3 className="text-center text-[20px] font-semibold">Login</h3>
                <input
                    type="email"
                    placeholder="Enter Email"
                    className="p-1 outline-none rounded"
                    required
                />
                <input
                    type="password"
                    placeholder="Enter Password"
                    className="p-1 outline-none rounded"
                    required
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
            </form>
        </section>
    );
};

export default Login;