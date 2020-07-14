import React from 'react';
import Table from 'react-bootstrap/Table';

const BookListItemTable = ({ id, book_title, book_author, book_pages, book_publication_city, book_publication_country, book_publication_year }) => {
    return <Table style={{ color: "white" }} bordered>
            <tbody>
            <tr>
                <th>ID</th>
                <td>{id}</td>
            </tr>
            <tr>
                <th>Title</th>
                <td>{book_title}</td>
            </tr>
            <tr>
                <th>Author</th>
                <td>
                    {book_author.map(item => {
                        return <li key={item}>{item}</li>
                    })}
                </td>
            </tr>
            <tr>
                <th>Year</th>
                <td>{book_publication_year}</td>
            </tr>
            <tr>
                <th>Pages</th>
                <td>{book_pages}</td>
            </tr>
            <tr>
                <th>Publication City</th>
                <td>{book_publication_city}</td>
            </tr>
            <tr>
                <th>Publication Country</th>
                <td>{book_publication_country}</td>
            </tr>
            </tbody>
        </Table>;
};

export default BookListItemTable;