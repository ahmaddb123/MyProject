import React from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

function SortBy({ sortAsc, onToggle }) {
  return (
    <button onClick={onToggle}>
      {sortAsc ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
    </button>
  );
}

export default SortBy;
