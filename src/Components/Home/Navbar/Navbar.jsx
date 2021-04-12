function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light pt-4">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <a className="nav-link menu-item" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link menu-item" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link menu-item" href="#">
              Dental Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link menu-item" href="#">
              Reviews
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link menu-item" href="#">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
