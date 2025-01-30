import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {AuthProvider} from "./context/AuthContext";
import  Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Books from "./pages/Books";
import BooksDetails from "./pages/BookDetails";

const App = () =>{
  return(
    <AuthProvider>
      <Router>
        <Navbar/>
       <Routes>
          <Routes path="/" element={<Home/>}/>
           <Routes path="/Login" element={<Login/>}/>
           <Routes path="/books" element={<PrivateRoute><Books/></PrivateRoute>}/>
          <Routes path="/books/:id" element={<PrivateRoute><BooksDetails/></PrivateRoute>}/>

        </Routes>
     </Router>
    </AuthProvider>
  );
};

export default App;