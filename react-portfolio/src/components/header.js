import { useState } from "react";

import React from 'react';
import NavBar from "../components/navbar";



const Header = () => {
    const [currentPage, handlePageChange] = useState("About me");

    return (
        <header> 
            <div className="header-block">
            <div className="dev-name">Valbona Bajrami </div>
             </div>
            <NavBar 
                 currentPage={currentPage}
                 handlePageChange={handlePageChange}
            /> 
        </header>
    )
}

export default Header;