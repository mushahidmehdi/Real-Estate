import React, { useState } from "react";

import { Search, ChevronDown, ChevronUp } from "react-feather";
import Dropdown from "./Dropdown";

const dropdownList = [
  "Something 1",
  "Something Something 2",
  "Lorem, ipsum",
  "dolor sit amet consectetur",
  "rum fugiat voluptates",
  "ut qui labore",
  " at repudiandae sit ipsum",
  "Something 5",
  "Something 6",
  "Something 7",
];

const Filter = () => {
  const [dropdown, setDropdown] = useState(false);
  const [seleted, setSeleted] = useState("");

  const toggleItems = (item) => {
    setSeleted(item);
    setDropdown(!dropdown);
  };

  return (
    <div className="filter__container">
      <div className="filter__search">
        <input
          type="text"
          name="seach"
          id="seach"
          placeholder="Enter a Keyword"
        />
        <div className="filter__search-btn">
          <Search strokeWidth={1} />
          <button>Search</button>
        </div>
      </div>

      <p className="filter__seprator">
        <span>Filter settings</span>
      </p>

      <div className="filter__dropdown">
        <Dropdown
          title="Sale or Rent"
          data={dropdownList}
          toggleItems={toggleItems}
          dropdown={dropdown}
          setDropdown={setDropdown}
        />
        <Dropdown
          title="Select room flat"
          data={dropdownList}
          toggleItems={toggleItems}
          dropdown={dropdown}
          setDropdown={setDropdown}
        />
        <Dropdown
          title="Select location"
          data={dropdownList}
          toggleItems={toggleItems}
          dropdown={dropdown}
          setDropdown={setDropdown}
        />
        <Dropdown
          title="Most expensive"
          data={dropdownList}
          toggleItems={toggleItems}
          dropdown={dropdown}
          setDropdown={setDropdown}
        />
      </div>
    </div>
  );
};

export default Filter;
