import React, { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar'
import FetchWrapper from '../FetchWrapper/FetchWrapper'
import PageSelector from '../PageSelector/PageSelector'
import BooksList from './BooksList/BooksList'
import { generateOptions, URL, ENDPOINT, ITEMS_PER_PAGE } from './utilities'


const BooksArea = () => {
    const params = new URLSearchParams(window.location.search);
    const [books, setBooks] = useState(null);
    const [page, setPage] = useState(params.has('page') ? parseInt(params.get('page')) : 1);
    const [filter, setFilter] = useState(params.get('filter'));
    const [id, setId] = useState(params.has('id') ? parseInt(params.get('id')) : null);
    const [options, setOptions] = useState(generateOptions(1))

    useEffect(() => {
        const urlLink = window.location.origin;
        const params = new URLSearchParams();
        if(filter){
            params.append('filter', filter);
        }
        params.append('page', page);
        if(id){
            params.append('id', id);
        }
        
        window.history.pushState({ id, page, filter },'', `${urlLink}?${params.toString()}`)
        setOptions(generateOptions(page, filter))
    }, [page, filter, id])

    return (
        <div style={{ color: 'white' }}>
            <SearchBar defaultValue={filter} onClick={setFilter}/>
            <hr/>
            <FetchWrapper url={URL + ENDPOINT} options={options} onSuccess={setBooks}>
                <PageSelector {...{ page }} setPage={(pageNumberSelected) => {
                    setPage(pageNumberSelected);
                    setId(null);
                }} numberOfItems={books ? books.count : 0} itemsPerPage={ITEMS_PER_PAGE}/>
                <BooksList books={books ? books.books : []} onSelect={setId} id={id}/>
            </FetchWrapper>
        </div>
    )
}

export default BooksArea;