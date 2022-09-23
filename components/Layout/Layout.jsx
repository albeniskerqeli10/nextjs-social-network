import Navbar from "../Navigation/Navbar";

const Layout = ({ children }) => {
    return (
        <main>
            <Navbar />
            {children}
        </main>
    )
}
export default Layout;