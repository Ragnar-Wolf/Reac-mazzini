import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
const Navbar = () => {
  const imgLogo = ".//assets/logosinf.jpg"
  return (
      <header className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <img className="imgLogo" src={imgLogo} alt="Logo" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <nav className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                    Inicio
                </li>
                <li className="nav-item">
                    Pc Gamer
                </li>
                <li className="nav-item">
                    Hardware
                </li>
                <li className="nav-item">
                    Accesorios
                </li>
              </ul>
            </nav>
          </div>
          <CartWidget />
        </header>




  );
};

export default Navbar;
