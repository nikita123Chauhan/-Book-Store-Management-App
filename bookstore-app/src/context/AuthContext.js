import { createContext, useState, useContext} from "react";

const AuthContext=createContext();
export const AuthPrevious=({children}) => {
     const [token, setToken] =
     useState(localStorage.getItems("token") || null);
     const login=async(username, password) => {
        fetch("https://carnation-iron-warlock.glitch.me/users", {
            method :"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({username, password}),
        });

        const data=await response.json();
        if(data.success){
            localStorage.setItems("token",data.token);
            setToken(data.token);
        }
        else{
            throw new Error(data.message);
        }
     };
     const logout =() =>{
        localStorage.removeItems("token");
        settoken(null);
     };

     return (
        <AuthContext.Provider value ={{token, login,logout}}>
        {children}
        </AuthContext.Provider>
     );
};

export const useAuth = () => useContext(AuthContext);