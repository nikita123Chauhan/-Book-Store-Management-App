import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BooksDetails= () => {
    const {id} = useParams();
    const [books, setbook] =useState(null);

    useEffect(() => {
        axios.get (`https://carnation-iron-warlock.glitch.me/books/${id}`).then((response) => {
            setbook(response.data);
        });
    }, [id]);

    if(!book) return <p>Loading...........</p>;

    return(
        <div>
            <h2>{books.name}</h2>
            <p>category.{books.category}</p>
            <p>Price: Rs{books.price}</p>
        </div>
    );
};

export default BooksDetails;