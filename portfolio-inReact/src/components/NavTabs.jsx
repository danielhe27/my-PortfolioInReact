import { Link, useLocation } from 'react-router-dom';

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          Welcome!!
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu is-justify-content-center">
        <div className="navbar-start">
          <Link to="/" className={`navbar-item ${currentPage === '/' ? 'is-active' : ''}`}>
            About
          </Link>
          <Link to="/Portfolio" className={`navbar-item ${currentPage === '/Portfolio' ? 'is-active' : ''}`}>
            Portfolio
          </Link>
          <Link to="/Contact" className={`navbar-item ${currentPage === '/Contact' ? 'is-active' : ''}`}>
            Contact
          </Link>
          <Link to="/Resume" className={`navbar-item ${currentPage === '/Resume' ? 'is-active' : ''}`}>
            Resume
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavTabs;
