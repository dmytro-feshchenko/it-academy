import React from 'react';

const Header = () => (
    <div className="page__header">
        <div className="top-bar">
            <div className="top-bar-left">
                <ul className="dropdown menu" data-dropdown-menu>
                    <li className="menu-text">Maestro</li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Resources</a></li>
                    <li><a href="#">Forum</a></li>
                    <li><a href="#">Three</a></li>
                </ul>
            </div>
            <div className="top-bar-right">
                <ul className="menu">
                    <li><input type="search" placeholder="Search" /></li>
                    <li><button type="button" className="button">Search</button></li>
                </ul>
            </div>
        </div>
    </div>
);

export default Header;