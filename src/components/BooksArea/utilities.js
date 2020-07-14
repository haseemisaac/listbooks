export const URL = 'http://nyx.vima.ekt.gr:3000';
export const ENDPOINT = '/api/books';

export const ITEMS_PER_PAGE = 10;
export const generateOptions = (page, filter) => {
    const params = {
        page,
        itemsPerPage: ITEMS_PER_PAGE
    }

    if(filter){
        Object.assign(params, { filters:  [{type: "all", values: [filter]}]})
    }
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    }
    return options;
};