import React from 'react';
import NavBar from "../components/navbar";

const Header = (props) => {
    return (
        <header> 
            <div className="header-block">
            <div className="dev-name">Valbona Bajrami </div>
             </div>
            <NavBar 
                 currentPage={props.currentPage}
                 handlePageChange={props.handlePageChange}
            /> 
        </header>
    )
}

export default Header;