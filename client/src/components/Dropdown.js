import React, {useState} from "react";
import { ChevronDown, ChevronUp } from "react-feather";

const Dropdown = ({ toggleItems, data, title }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <section className="dropdown">
      <div className="dropdown_btn" onClick={() => setDropdown(!dropdown)}>
        <span>{title}</span>
        {!dropdown ? (
          <ChevronDown strokeWidth={1} className="dropdown_btn-icon" />
        ) : (
          <ChevronUp strokeWidth={1} className="dropdown_btn-icon" />
        )}
      </div>

      <div className="dropdown_content">
        {dropdown &&
          data.map((item, index) => (
            <ul key={index}>
              <li className="dropdown_items" onClick={() => [toggleItems(item), setDropdown(!dropdown)]}>
                {item}
              </li>
            </ul>
          ))}
      </div>
    </section>
  );
};

export default Dropdown;
