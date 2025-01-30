import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
const Books = () =>{
    const [books, setBooks] =useState([]);
    useEffect(() => {

        axios.get("https://carnation-iron-warlock.glitch.me/books").then((response)=>{
            setBooks(response.data);
        });
    }, []);

    return(
        <div>
            <h2>Book List</h2>
            {books.map((books) => (
                <div key={books.id}>
                    <Link to={`/books/${books.id}`}>{books.name}</Link>-
                    {books.category}-Rs{books.price}
                </div>
            ))}
        </div>
    );
};

export default Books;