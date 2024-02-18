import React from "react";
import SearchListItem from "../../components/SearchList/SearchListItem";
import SearchPopup from "../../components/SearchNavbar/SearchPopup";
import './SearchContent.css';

const SearchContent = () =>{
    return (<div className="container-search-content">
        <SearchPopup/>
        <SearchListItem/>
    </div>);
}

export default SearchContent;