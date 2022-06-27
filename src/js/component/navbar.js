import React from "react";
import { Link } from "react-router-dom";

export const Navbar = ({favorite, setFavorite}) => {

  return (
    <>
      <div className="sticky-top">
        <nav className="navBar1 navbar navbar-expand-lg navbar-light bg-light ">
          <div className="container-fluid ">
            <div className="col-1"></div>
            <Link className="col-10 text-center" to="/">
              <img
                className="logoNavBar"
                src="https://1000marcas.net/wp-content/uploads/2019/12/logo-StarWars.png"
              />
            </Link>
            <div
              className="collapse navbar-collapse col-1 "
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item btn-group dropstart">
                  <a
                    className="nav-link dropdown-toggle btn-danger"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Favorites
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    {favorite.map((item, index) => (
                    <li key={index} className="dropdown-item">{item}</li>
                  ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Segundo NAV */}
        <nav className="navBar2 navbar navbar-dark bg-dark ">
          <div className="container-fluid  d-flex justify-content-center">
            <li className="me-3 nav-item  ">
              <Link className="linkToView" to="/characters">
                Characters
              </Link>
            </li>
            <li className="me-3 nav-item ">
              <Link className="linkToView" to="/planets">
                Planets
              </Link>
            </li>
            <li className="me-3 nav-item ">
              <Link className="linkToView" to="/vehicles">
                Vehicles
              </Link>
            </li>
          </div>
        </nav>
      </div>
    </>
  );
};
