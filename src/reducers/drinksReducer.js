export default (drinksList = [], action) => {
    if (action.type === 'SEARCH_DRINK') {
        return action.payload.drinks;
    }
    return drinksList;
}