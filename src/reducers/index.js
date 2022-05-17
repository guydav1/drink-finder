import { combineReducers } from "redux";
import drinkReducer from "./drinkReducer";
import drinksReducer from "./drinksReducer";
import previousSearchesReducer from "./previousSearchesReducer";
import searchReducer from "./searchReducer";
import resultsFilterReducer from './resultsFilterReducer'

export default combineReducers({
    drinks: drinksReducer,
    searchValue: searchReducer,
    previousSearches: previousSearchesReducer,
    selectedDrink: drinkReducer,
    filterQuery: resultsFilterReducer
})