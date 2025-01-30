import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const {token, logout} = useAuth();
    return(
        <nav>
            <Link to="/">Home</Link>
            {token && <Link to="/books">Books</Link>}
            {!token ? <Link to="/Login">Login</Link> : <button onclick={logout}>Logout</button>}

        </nav>
    );
};

export default Navbar;
