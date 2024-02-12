import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css'; // Make sure to import the CSS file for styling
import { Button } from 'react-bootstrap';
import Dropdown from './Dropdown/Dropdown.js'

const Sidebar = ({ routes, pic, dropDownProps, dark, toggleSwitchRef}) => {
  const [isCollapsed, setCollapsed] = useState(true);
  const [isHome, setHome] = useState(true);
  const sidebarRef = useRef(null); // ref for side bar
  const location = useLocation()

  const handleCollapse = () => {
    setCollapsed(!isCollapsed);
  };

  useEffect(() => {
    if(location.pathname === '/') {
      setHome(true)
    }
    else {
      setHome(false)
    }
  }, [location]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if ((sidebarRef.current && sidebarRef.current.contains(event.target))
      || (toggleSwitchRef.current && toggleSwitchRef.current.contains(event.target))) {
        return;
      }
      setCollapsed(true);
    };

    // Attach the event listener when the component mounts
    document.addEventListener('click', handleOutsideClick);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [toggleSwitchRef]);

  return (
    
    <div ref={sidebarRef} className={`sidebar ${isCollapsed ? 'collapsed' : 'uncollapsed'} ${dark? 'dark' : ''}`}>
      {/* Toggle button */}
      <div className={`toggle-button-wrapper ${isCollapsed ? 'collapsed' : 'uncollapsed'} ${(dark && (!isHome || !isCollapsed))? 'dark' : (!dark && isHome && isCollapsed)? 'dark':''}`}>
        <Button variant="secondary" size="sm" className="navbar-toggler" onClick={handleCollapse}>
          <div className={`bar1 ${isCollapsed ? 'collapsed' : 'uncollapsed'} ${(dark && (!isHome || !isCollapsed))? 'dark' : (!dark && isHome && isCollapsed)? 'dark':''}`}></div>
          <div className={`bar2 ${isCollapsed ? 'collapsed' : 'uncollapsed'} ${(dark && (!isHome || !isCollapsed))? 'dark' : (!dark && isHome && isCollapsed)? 'dark':''}`}></div>
          <div className={`bar3 ${isCollapsed ? 'collapsed' : 'uncollapsed'} ${(dark && (!isHome || !isCollapsed))? 'dark' : (!dark && isHome && isCollapsed)? 'dark':''}`}></div>
        </Button>
      </div>

      {!isCollapsed &&
      <div className='picDiv'>
        <img className={`pic ${isCollapsed ? 'collapsed' : 'uncollapsed'}`} src={pic} alt='Me'/>
      </div>}

      {!isCollapsed && (
        <ul>
          {routes.map((route) => (
            <li className='sidebar-item' key={route.path}>
              <Link className='link' to={route.path}>{route.name}</Link>
            </li>
          ))}
          <li>
            <Dropdown {...dropDownProps} dark={dark}/>
          </li>
        </ul>
      )}
    </div>
    
  );
};

export default Sidebar;
