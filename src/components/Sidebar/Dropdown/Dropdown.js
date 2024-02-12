import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import "./Dropdown.css"

const Dropdown = ({ dropDownTitle, dropDownRoute, itemList, dark }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const dropdownContentRef = useRef(null);

  useEffect(() => {
    if (isDropdownOpen) {
      // Apply the height to the dropdown content
      dropdownContentRef.current.style.height = "40vh";//`${contentHeight}px`;
    } else {
      // Reset the height to 0 when the dropdown is closed
      dropdownContentRef.current.style.height = '0';
    }
  }, [isDropdownOpen]);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-heading">
        <Link className='link' to={dropDownRoute}>{dropDownTitle}</Link>

        <div className={`dropdown-button-wrapper ${isDropdownOpen ? 'open' : 'closed'} ${dark? 'dark' : ''}`}>
            <Button variant="secondary" size="sm" className="dropdown-toggler" onClick={toggleDropdown}>
                <div className={`bar1dd ${isDropdownOpen ? 'open' : 'closed'} ${dark? 'dark' : ''}`}></div>
                <div className={`bar2dd ${isDropdownOpen ? 'open' : 'closed'} ${dark? 'dark' : ''}`}></div>
            </Button>
        </div>
      </div>
      
      
        <div className={`dropdown-content ${isDropdownOpen ? 'open': ''}`} ref={dropdownContentRef}>
          <ul>
            {itemList.map((item) => {return(
              <li className={"dropdown-link"} key={item.path}>
                <Link className='link' to={item.path}>{item.name}</Link>
              </li>
            )})}
            <li className="dropdown-link buffer"></li>
          </ul>
          
        </div>
    </div>
  );
};

export default Dropdown;
