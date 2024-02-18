import React from "react";
import './NavbarItem.css';

const NavbarItem = (props) =>{
    return ( <li style={props.active ? { border: '2px solid white', borderRadius: '20px' } : {}} className={`fa ` + props.icon}><p>{props.type}</p></li>);
}
export default NavbarItem;