
import { Link } from 'react-router-dom';
import React from 'react';

function Sidebar() {
  return (
    <div className="NavBar">
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to={'/'}>
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-laugh-wink"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Admin <sup>2</sup></div>
        </Link>
        <hr className="sidebar-divider my-0" />
        <hr className="sidebar-divider" />
        <div className="sidebar-heading">
          Gerenciamento do site
        </div>
        <hr className="sidebar-divider" />
        <li className="nav-item">
          <Link className="nav-link" to={'/'}>
            <i className="fas fa-fw fa-table"></i>
            <span>Usuários</span>
          </Link>
        </li>
        <hr className="sidebar-divider d-none d-md-block" />
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
      </ul>
    </div>
  );
}

export default Sidebar;
