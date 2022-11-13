import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import '../css/styles.css'

const Book = ({
    id,
    bookname,
    author,
    price,
    quantity,
    date,
    handleRemoveBook
}) =>
{
    const history = useHistory();

    return (
        <Card className="books">
            <Card.Body className="books-body">
                <Card.Title className="book-title">{bookname}</Card.Title>
                <div className="book-details">
                    <div>Author: {author}</div>
                    <div>Quantity: {quantity}</div>
                    <div>Price: {price}</div>
                    <div>Date: {new Date(date).toDateString()}</div>
                </div>
                <Button variant="primary" onClick={() => history.push(`/edit/${id}`)} >Edit</Button>
                <Button variant="danger" onClick={() => handleRemoveBook(id)}>Delete</Button>
            </Card.Body>
        </Card>
    )
}

export default Book;