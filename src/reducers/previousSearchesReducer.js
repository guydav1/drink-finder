export default (previousSearches = [], { type, payload }) => {
  switch (type) {

    case 'SEARCH_DRINK':
      return [...new Set([payload.searchValue.toLowerCase(), ...previousSearches])].slice(0, 5)


    default:
      return previousSearches
  }
}
