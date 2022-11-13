import React, { useContext } from 'react';
import BooksContext from '../contexts/BooksContext';
import BookFrom from './BookFrom';

const AddBooks = ({history}) =>
{
    const { books, setBooks } = useContext(BooksContext);

    const handleOnSubmit = (book) =>
    {
        setBooks([book, ...books]);
        history.push('/')
    }

    return (
        <React.Fragment>
            <BookFrom handleOnSubmit = {handleOnSubmit} />
        </React.Fragment>
    )
}

export default AddBooks;