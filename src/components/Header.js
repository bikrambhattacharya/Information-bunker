import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div className="navbar">
        <header>
            <NavLink className="navbar-menu-item" to='/' activeClassName='is-active' exact={true}>Home</NavLink>
            <NavLink className="navbar-menu-item" to='/create' activeClassName='is-active' exact={true}>Add Post</NavLink>
            <NavLink className="navbar-menu-item" to='/dashboard'> Post Dashboard</NavLink>

        </header>
    </div>

);
export default Header;