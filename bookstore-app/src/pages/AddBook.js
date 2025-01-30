const handleDelete = (id) => {
    axios.get (`https://carnation-iron-warlock.glitch.me/books/${id}`).then(() => {
        setbook(Books.filter((books)=> books.id !==id));
    });
};

<button onClick={() => handleDelete(book.id)}>Delete</button>