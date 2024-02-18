import React from "react";
import SearchListItem from "../SearchList/SearchListItem";
import SearchPopup from "../SearchNavbar/SearchPopup";
import './SearchContent.css';

const SearchContent = () =>{
    return (<div className="container-search-content">
        <SearchPopup/>
        <SearchListItem/>
    </div>);
}

export default SearchContent;