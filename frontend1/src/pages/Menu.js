import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faHome ,faSearch, faTh, faUser, faComments, faChartPie, faFolder, faShoppingCart, faHeart, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './Menu.css';

const Menu = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`sidebar ${isActive ? 'active' : ''}`}>
      <div className="logo_content">
        <div className="logo">
             {/* <img className='logo' src="https://t4.ftcdn.net/jpg/05/42/69/97/360_F_542699727_nW5selXTMm256TcnzLLpPFJ6Glemafl5.jpg" alt="" /> */}
          
        </div>
        <FontAwesomeIcon icon={faBars} onClick={toggleSidebar} style={{ fontSize: '25px', color:'white',marginLeft:'15px' }} /> <span><FontAwesomeIcon  style={{ fontSize: '25px', color:'white',marginLeft:'15px' }} className="icons" icon={faUser} /> <span></span></span>
      </div>
      <ul className="nav_list">
        {/* <li>
          <FontAwesomeIcon icon={faSearch} />
          <input type="text" placeholder="Search..." />
          <span className="tooltip">Search</span>
        </li> */}
        <li>
          <a href="#">
            <FontAwesomeIcon className="icons" icon={faHome} /> <span></span>
            <span className="link_names">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon className="icons" icon={faTh} /> <span></span>
            <span className="link_names">Dashboard</span>
          </a>
          <span className="tooltip">Dashboard</span>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon className="icons" icon={faTh} /> <span></span>
            <span className="link_names">Tasks</span>
          </a>
          <span className="tooltip">Tasks</span>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon className="icons" icon={faChartPie} /> <span></span>
            <span className="link_names">stats</span>
          </a>
          <span className="tooltip">Stats</span>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon className="icons" icon={faCog} /> <span></span>
            <span className="link_names">Settings</span>
          </a>
          <span className="tooltip">Settings</span>
        </li>
        {/* Add other list items here */}
      </ul>
      <div className="profile_content">
        <div className="profile">
          <div className="profile_details">
            <img src="https://vz.cnwimg.com/wp-content/uploads/2014/01/alex.jpg?x86007" alt="" />
            <div className="name_job">
              <div className="name">Name</div>
              <div className="job">Role</div>
            </div>
          </div>
          <FontAwesomeIcon icon={faSignOutAlt} id="log_out" />
        </div>
      </div>
    </div>
  );
};

export default Menu;
