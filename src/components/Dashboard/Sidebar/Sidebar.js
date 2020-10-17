import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSignOutAlt, faShoppingBasket, faHome, faPlus, faUserPlus, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Sidebar.css';
const Sidebar = () => {
  const isAdmin = true;
  return (
    <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
      <ul className="list-unstyled">
        <li>
          <Link to="#" className="text-white">
            <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
          </Link>
        </li>
        <li>
          <Link to="#" className="text-white">
            <FontAwesomeIcon icon={faShoppingBasket} /> <span>Service list</span>
          </Link>
        </li>
        <li>
          <Link to="#" className="text-white">
            <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
          </Link>
        </li>
        {isAdmin && <div>
          <li>
            <Link to="#" className="text-white">
              <FontAwesomeIcon icon={faPlus} /> <span>Add Service</span>
            </Link>
          </li>
          <li>
            <Link to="#" className="text-white">
              <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
            </Link>
          </li>
        </div>}
      </ul>
      <div>
        <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Go To Home</span></Link>
      </div>
    </div>
  );
};

export default Sidebar;