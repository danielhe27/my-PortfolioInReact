import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

function NavTabs() {
  const [isActive, setIsActive] = useState(false); 
  const currentPage = useLocation().pathname;

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          Welcome!!
        </a>
        <a role="button" className={`navbar-burger burger ${isActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={toggleMenu}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-start">
          <Link to="/" className={`navbar-item ${currentPage === '/' ? 'is-active' : ''}`} onClick={toggleMenu}>
            About Me
          </Link>
          <Link to="/Portfolio" className={`navbar-item ${currentPage === '/Portfolio' ? 'is-active' : ''}`} onClick={toggleMenu}>
            Portfolio
          </Link>
          <Link to="/Contact" className={`navbar-item ${currentPage === '/Contact' ? 'is-active' : ''}`} onClick={toggleMenu}>
            Contact
          </Link>
          <Link to="/Resume" className={`navbar-item ${currentPage === '/Resume' ? 'is-active' : ''}`} onClick={toggleMenu}>
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
