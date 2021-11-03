const NavBar = ({currentPage, handlePageChange}) => {
    const navLinks = ["About", "Portfolio", "Resume", "Contact"];

    return (
        <nav> 
            <ul className= "nav nav-tabs border-0">
                {navLinks.map((link) => (
                    <li className="nav-item " key={link}>
                        <a href= {"" + link.toLowerCase()}
                        onClick={() => {
                            handlePageChange(link);
                        }}
                        className={currentPage === link ? "nav-link navActive" : "nav-link text-primary"}>
                        {link}
                        </a>
                    </li>
                 ))}
            </ul>
        </nav>
    )
}

export default NavBar;