import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import '../css/styles.css'


const BookFrom = (props) =>
{
    const [book, setBook] = useState({
        bookname: props.book ? props.book.bookname : '',
        author: props.book ? props.book.author : '',
        quantity: props.book ? props.book.quantity : '',
        price: props.book ? props.book.price : '',
        date: props.book ? props.book.date : '',
    })

    const [errorMsg, setErrorMsg] = useState('');
    const { bookname, author, quantity, price } = book;

    const handleOnSubmit = (e) =>
    {
        e.preventDefault();
        const values = [bookname, author, quantity, price];
        let errorMsg = '';

        const allFieldsFilled = values.every((field) =>
        {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
        });

        if (allFieldsFilled) {
            const book = {
                id: uuidv4(),
                bookname,
                author,
                quantity,
                price,
                date: new Date()
            };
            props.handleOnSubmit(book)
        } else {
            errorMsg = 'Please fill out all the fields.';
        }
        setErrorMsg(errorMsg)
    }

    const handleInputChange = (e) =>
    {
        const { name, value } = e.target;
        switch (name) {
            case 'quantity':
                if (value === '' || parseInt(value) === +value) {
                    setBook((prevState) =>
                    ({
                        ...prevState,
                        [name]: value
                    }));
                }
                break;
            case 'price':
                if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
                    setBook((prevState) => ({
                        ...prevState,
                        [name]: value
                    }))
                }
                break;
            default:
                setBook((prevState) => ({
                    ...prevState,
                    [name]: value
                }))
        }
    }

    return (
        <div className="mani-form">
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Book Name</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="bookname"
                        placeholder="Enter name of book"
                        value={bookname}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="author">
                    <Form.Label>Book Author</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="author"
                        placeholder="Enter name of author"
                        value={author}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="quantity">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="quantity"
                        placeholder="Enter name of quantity"
                        value={quantity}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Form.Group controlId="price">
                    <Form.Label>Book Prince</Form.Label>
                    <Form.Control
                        className="input-control"
                        type="text"
                        name="price"
                        placeholder="Enter name of prince"
                        value={price}
                        onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type='submit' className="submit-btn">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

export default BookFrom;