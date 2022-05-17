import React from "react";

const PreviousSearchList = ({ previousSearchValues, selectSearchValue }) => {
  return (
    <div>
      {previousSearchValues &&
        previousSearchValues.map((val, index) => (
          <span
            key={index}
            className="badge rounded-pill text-dark border fw-normal  py-1 px-2 ms-2 clickable"
            onClick={() => selectSearchValue(val)}>
            {val}
          </span>
        ))}
    </div>
  );
};

export default PreviousSearchList;
