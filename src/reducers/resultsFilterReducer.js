const initialState = {
  sortBy: "strDrink",
  filterText: "",
  filterBy: "category",
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case 'FILTER_RESULTS':
      return { ...state, ...payload }

    case 'SEARCH_DRINK':
      return initialState

    default:
      return state
  }
}
