import {useState} from "react";
import {useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] =useState("");
    const [Password, setPassword] =useState("");
    const [error, setError]=useState("");

    const {login} =useAuth();
    const navigate=useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        try{
            await login(username, password);
            navigate("/books");
        }catch(err){
            setError(err.message);
        }

    };

    return(
        <div>
            <h2>Login</h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="Username" onChange={(e) => setUsername(e.currentTarget.value)}/>
                <input type="Password" placeholder="Password" onChange={(e) => setPassword(e.currentTarget.value)}/>
                <button type="Submit">Login</button>

            </form>
        </div>
    );
};

export default Login;