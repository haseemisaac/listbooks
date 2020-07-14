import React, { useState, useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination'

const PageSelector = ({ page, setPage, numberOfItems, itemsPerPage }) => {
    const [pageNumbers, setPageNumbers] = useState([]);
    const totalPages = Math.ceil(numberOfItems/itemsPerPage);
    useEffect(() => {
        const tempPageNumbers = [];
        const start = (page-2) <= 0 ? 1 : page-2;
        const end = (start+4) > totalPages ? totalPages : start+4;
        for(var i = start; i <= end; i++){
            tempPageNumbers.push(i)
        }
        setPageNumbers(tempPageNumbers)
    }, [numberOfItems, itemsPerPage, totalPages, page])

    return (
        <Pagination>
            {totalPages > 1 ? <>
                <Pagination.Item onClick={() => setPage(1)}>&lt;&lt;</Pagination.Item>
                <Pagination.Item onClick={() => setPage(page-1 <= 0 ? 1 : page-1)}>&lt;</Pagination.Item>
                </> : null}
            
            {pageNumbers.map(item => {
                return <Pagination.Item key={item+"page"} active={page === item}  onClick={() => setPage(item)}>{item}</Pagination.Item>;
            })}
            {totalPages > 1 ? <>
                <Pagination.Item onClick={() => setPage(page+1 > totalPages ? totalPages : page+1)}>&gt;</Pagination.Item>
                <Pagination.Item onClick={() => setPage(totalPages)}>&gt;&gt;</Pagination.Item>
                </> : null }
        </Pagination>
    )
}

export default PageSelector;