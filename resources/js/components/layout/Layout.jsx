import Sidebar from './Sidebar';
const Layout = ({children}) => {
    return (
        <section className="flex 2xl:container 2xl:mx-auto">
            <Sidebar />
            <div className="grow">{children}</div>
        </section>
    );
};

export default Layout;