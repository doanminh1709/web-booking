import React from "react";
import './Navbar.css';
import NavbarItem from "../NavbarItem/NavbarItem";


const dataNavbar = [
    {
        "type": "Stays",
        "icon": "fa-bed",
        "active": true
    },
    {
        "type": "Flights",
        "icon": "fa-plane",
        "active": false
    },
    {
        "type": "Car rentals",
        "icon": "fa-car",
        "active": false
    },
    {
        "type": "Attractions",
        "icon": "fa-bed",
        "active": false
    },
    {
        "type": "Airport taxis",
        "icon": "fa-taxi",
        "active": false
    }
];

function Navbar() {
    return (<div className="nav-bar_container">
        <div className="title-and-button">
            <div className="title">
                <h3>Booking Website</h3>
            </div>
            <div className="box-button">
                <button>Register</button>
                <button>Login</button>
            </div>
        </div>
        <div className="box-icon">
            <ul>
                {dataNavbar.map((item , index) => (
                   <NavbarItem  key={index} active={item.active} icon={item.icon} type={item.type}/>
                ))}
            </ul>
        </div>
    </div>);
}

export default Navbar;