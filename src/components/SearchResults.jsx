import React from "react";
import { connect } from "react-redux";
import { filterResults, selectDrink } from "../actions";
import SearchFilter from "./SearchFilter";
import SearchResultItem from "./SearchResultItem";
import SearchSort from "./SearchSort";

const SearchResults = ({
  resultList,
  selectDrink,
  searchValue,
  resultsQuery,
  filterResults,
}) => {
  const handleFilterText = (e) => {
    filterResults({ filterText: e.target.value });
  };

  const handleFilterBy = (e) => {
    filterResults({ filterBy: e.target.value });
  };

  const handleSort = (e) => {
    filterResults({ sortBy: e.target.value });
  };

  return resultList && searchValue ? (
    <div className="border p-2 h-100">
      <div className="py-2">
        Sort By:
        <SearchSort setSortField={handleSort} />
      </div>
      <div className="py-2">
        Filter By:
        <SearchFilter
          handleFilterBy={handleFilterBy}
          handleFilterText={handleFilterText}
          resultsQuery={resultsQuery}
        />
      </div>
      <div className="mt-2">
        {resultList.length > 0
          ? resultList.map((drink) => (
              <div
                className="clickable hoverable"
                key={drink.idDrink}
                onClick={() => selectDrink(drink)}>
                <SearchResultItem drink={drink} />
              </div>
            ))
          : "No Results For Filter"}
      </div>
    </div>
  ) : (
    "No Results"
  );
};

const mapStateToProps = (state) => ({
  resultList: modifyResults(state.drinks, state.filterQuery),
  resultsQuery: state.filterQuery,
  searchValue: state.searchValue,
});

const modifyResults = (list, query) => {
  if (!list) return;
  let copyResults = [...list];
  copyResults = copyResults.filter((drink) => {
    if (query.filterBy === "category")
      return drink.strCategory
        .toLowerCase()
        .includes(query.filterText.toLowerCase());
    else if (query.filterBy === "ingredient") {
      for (let i = 1; i <= 15; i++) {
        let ingredient = drink["strIngredient" + i];
        if (
          ingredient &&
          ingredient.toLowerCase().includes(query.filterText.toLowerCase())
        ) {
          return true;
        }
      }
    }
    return false;
  });

  let sortValue = query.sortBy;
  let sortOrder = 1;
  if (sortValue[0] === "-") {
    sortOrder = -1;
    sortValue = sortValue.substring(1);
  }

  copyResults.sort(
    (a, b) =>
      (a[sortValue] < b[sortValue] ? -1 : a[sortValue] > b[sortValue] ? 1 : 0) *
      sortOrder
  );

  return copyResults;
};

export default connect(mapStateToProps, { selectDrink, filterResults })(
  SearchResults
);
