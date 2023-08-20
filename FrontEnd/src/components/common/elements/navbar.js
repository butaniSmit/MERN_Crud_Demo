import Link from "next/link";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Cookies from 'js-cookie'
const NavBar = () => {
    const router = useRouter();
    const handleLogout = (e) => {
        Cookies.remove("nodejstoken");
        router.push("/login");
        toast.success("You have been successfully logged out");
    };
    return (
        <>
            <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <svg className="bi me-2" width="40" height="32">
                        <use href="#bootstrap"></use>
                    </svg>
                    <span className="fs-4">Demo</span>
                </Link>

                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <a className="btn btn-outline-primary me-2" onClick={(e) => handleLogout(e)}>Logout</a>
                    </li>
                </ul>
            </header>
        </>
    )
}
export default NavBar;
