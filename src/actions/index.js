import axios from "axios"

export const searchDrinks = (searchValue) => {
    return async function (dispatch, getState) {
        const drinks = await axios.get(
            "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchValue
        );

        dispatch({ type: 'SEARCH_DRINK', payload: { searchValue, drinks: drinks.data.drinks } })
    }
}


export const selectDrink = drink => {
    return {
        type: 'SELECT_DRINK',
        payload: drink
    }
}

export const fetchRandomDrink = () => {
    return async function (dispatch, getState) {
        const randomDrink = await axios.get(
            "https://www.thecocktaildb.com/api/json/v1/1/random.php"
        );

        dispatch(selectDrink(randomDrink.data.drinks[0]))
    }
}

export const filterResults = (query) => {
    return {
        type: 'FILTER_RESULTS',
        payload: query
    }
}