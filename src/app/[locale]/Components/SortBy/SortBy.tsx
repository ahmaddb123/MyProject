import React from "react";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";

type SortByProps = {
  sortAsc: boolean;
  onToggle: () => void;
};

function SortBy({ sortAsc, onToggle }: SortByProps) {
  return (
    <button onClick={onToggle}>
      {sortAsc ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
    </button>
  );
}

export default SortBy;
