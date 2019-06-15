import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import { NavItem } from '../ReusableComponents/navItem';


class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <aside className="main-sidebar col-12 col-md-3 col-lg-2 px-0">
                <div className="main-navbar">
                    <nav className="navbar align-items-stretch navbar-light bg-white flex-md-nowrap border-bottom p-0">
                        <NavLink className="navbar-brand w-100 mr-0" to="/" style={{ lineHeight: "25px" }}>
                            <div className="d-table m-auto">
                                <img id="main-logo" className="d-inline-block align-top mr-1" style={{ maxWidth: "25px" }} src="images/shards-dashboards-logo.svg" alt="Shards Dashboard" />
                                <span className="d-none d-md-inline ml-1">Dashboard</span>
                            </div>
                        </NavLink>
                        <a className="toggle-sidebar d-sm-inline d-md-none d-lg-none">
                            <i className="material-icons">&#xE5C4;</i>
                        </a>
                    </nav>
                </div>
                <form action="#" className="main-sidebar__search w-100 border-right d-sm-flex d-md-none d-lg-none">
                    <div className="input-group input-group-seamless ml-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-search"></i>
                            </div>
                        </div>
                        <input className="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search" /> </div>
                </form>
                <div className="nav-wrapper">
                    <ul className="nav flex-column">
                        <NavItem label="User Profile" icon="person" link="userProfile" />
                        <NavItem label="Add Stock Item" icon="edit" link="addStockItem" />
                        <NavItem label="All Stock items" icon="table_chart" link="allStockItems" />
                    </ul>
                </div>
            </aside>);
    }
}

export default SideBar;
