import React, { useContext } from 'react';
import { useParams } from 'react-router';
import BooksContext from '../contexts/BooksContext';
import BookFrom from './BookFrom';


const EditBook = ({history}) =>
{
    const { books, setBooks } = useContext(BooksContext);

    const { id } = useParams();
    const bookToEdit = books.find((book) => book.id !== id);

    const handleOnSubmit = (book) =>
    {
        const filteredBook = books.filter((book) => book.id !== id);
        setBooks([book, ...filteredBook]);
        history.push('/');
    }

    return (
        <div>
            <BookFrom book={bookToEdit} handleOnSubmit={handleOnSubmit} />
        </div>
    )
}

export default EditBook;