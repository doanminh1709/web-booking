import React from "react";
import './Header.css';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useState } from "react";

const searchData = () => {
    window.location.replace('http://localhost:3000/search');
}


const Header = () => {
    const [active_date, setActiveDate] = useState(false);

    const activeDate = () => {
        if (active_date) {
            setActiveDate(false);
        } else {
            setActiveDate(true);
        }
    }
    const [state, setState] = useState([
        {
            startDate: new Date(),
            endDate: null,
            key: 'selection'
        }
    ]);
    const formatDate = (date) => {
        return date.toLocaleDateString('en-GB');
    };
    const handleDateChange = (item) => {
        setState([item.selection]);
    };

    return (
        <div className="container-header">
            <div className="content-header">
                <h1>A lifetime of discounts? It's Genius.</h1>
                <p>Get rewarded for your travels - unlock instant savings of 10% or more with a free account</p>
                <div className="box-register">
                    <a>Sign in</a>/<a>Register</a>
                </div>
                <div className="box-form">
                    <div className="form-search">
                        <input className="destination-input" placeholder="Where are you going?" />
                        <div>
                            <div onClick={activeDate} className="view-date-input">
                                <input
                                    value={state[0].startDate ? formatDate(state[0].startDate) : ''}
                                    onChange={(e) => setState([{ ...state[0], startDate: new Date(e.target.value) }])}
                                /> to
                                <input
                                    value={state[0].endDate ? formatDate(state[0].endDate) : ''}
                                    onChange={(e) => setState([{ ...state[0], endDate: new Date(e.target.value) }])}
                                />
                            </div>
                            <div className="book-date">
                                {active_date && (<DateRange
                                    editableDateInputs={true}
                                    onChange={handleDateChange}
                                    moveRangeOnFirstSelection={false}
                                    ranges={state}//attribute is used to specify the selected date range or ranges
                                />)}
                            </div>
                        </div>
                        <div className="info-book_room">
                            <input type="text" />adult
                            <input type="text" />children
                            <input type="text" />room
                        </div>
                        <button className="header-button_search" onClick={searchData}>Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Header;
