import React from "react";
import './SearchPopup.css';
const SearchPopup = (props) => {
    return (<div className="container-search_popup">
        <h1>Search</h1>
        <div className="popup-lable popup_destination">
            <label>Destination</label>
            <input className="input-destionation" />
        </div>
        <div className="popup-lable">
            <label>Check-in Date</label>
            <input type="date" className="input-date" />
            <input type="date" className="input-date" />
        </div>
        <div className="popup-options">
            <p>Options</p>
            <div>
                <label>Min price per night</label>
                <input type="number"/>
            </div>
            <div>
                <label>Max price per night</label>
                <input type="number"/>
            </div>
            <div>
                <label>Adult</label>
                <input type="number"/>
            </div>
            <div>
                <label>Children</label>
                <input type="number"/>
            </div>
            <div>
                <label>Room</label>
                <input type="number"/>
            </div>
        </div>
        <button>Search</button>
    </div>)
}
export default SearchPopup;