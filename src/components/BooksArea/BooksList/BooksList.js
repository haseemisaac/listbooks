import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import BookListItemTable from './BookListItemTable'

const BooksList = ({ books, onSelect, id }) => {
    let initialBook;
    if(books.length >= 1){
        const bookWithId = books.find(item => item.id === id)
        if(bookWithId){
            initialBook = bookWithId;
        } else {
            initialBook = books[0];
        }
    } else {
        initialBook = null;
    }
    const [selected, setSelected] = useState(initialBook);
    return <Tab.Container>
            <Row>
                <Col sm={4}>
                <ListGroup>
                    {books.map((item) => {
                        return <ListGroup.Item key={item.id} active={selected.id === item.id} action onClick={() => {
                            onSelect(item.id);
                            setSelected(item);
                        }}>
                        {item.book_title}
                        </ListGroup.Item>
                    })}
                </ListGroup>
                </Col>
                <Col sm={8}>
                <Tab.Content>
                    {selected !== null ? <BookListItemTable {...selected}/> : null}
                </Tab.Content>
                </Col>
            </Row>
    </Tab.Container>;
}

export default BooksList;