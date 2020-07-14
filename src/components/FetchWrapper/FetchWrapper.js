import React, { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';

const USER_SIDE_ERROR_MESSAGE = "Something went wrong...";

const FetchWrapper = ({ url, options, onSuccess, children }) => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        setError(null);
        fetch(url, options)
        .then(data => {
            if(data.ok){
                return data.json();
            } else {
                setError(USER_SIDE_ERROR_MESSAGE)
            }
        })
        .then(res => {
            onSuccess(res);
            setIsLoading(false);
        })
        .catch(() => setError(USER_SIDE_ERROR_MESSAGE));
    }, [url, options, onSuccess]);

    return <> {error ? <Alert variant="danger"> {error} </Alert> : isLoading ? <Spinner animation="border" variant="light"/> : children} </>;
}

export default FetchWrapper;