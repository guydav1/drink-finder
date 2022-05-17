export default (searchValue = '', action) => {

    switch (action.type) {
        case 'SEARCH_DRINK':
            return action.payload.searchValue

        default:
            return searchValue;

    }

}