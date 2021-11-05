const NavBar = ({currentPage, handlePageChange}) => {
    const navLinks = ["about", "portfolio", "resume", "contact"];

    return (
        <nav> 
            <ul className= "nav nav-tabs border-0">
                {navLinks.map((link) => (
                    <li className="nav-item " key={link}>
                        <a href= {"#" + link}
                        onClick={() => {
                            handlePageChange(link);
                        }}
                        className={currentPage === link ? "nav-link text-primary navActive" : "nav-link text-primary"}>
                        {link}
                        </a>
                    </li>
                 ))}
            </ul>
        </nav>

        
    )
}

export default NavBar;