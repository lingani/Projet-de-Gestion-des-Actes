import React from "react";

class SearchBar extends React.Component{
    render(){
        return(
            <div className="search-bar">
                <div className="search-icon">
                    <i className="material-icons">search</i>
                </div>
                <input type="text" placeholder="START TYPING..."/>
                <div className="close-search">
                    <i className="material-icons">close</i>
                </div>
            </div>
        );
    }
}
export default SearchBar;