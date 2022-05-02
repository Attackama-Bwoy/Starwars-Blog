import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="sticky-top">
        <nav class="navBar1 navbar navbar-expand-lg navbar-light bg-light ">
          <div class="container-fluid ">
            <div className="col-1"></div>
            <Link className="col-10 text-center" to="/">
              <img
                className="logoNavBar"
                src="http://assets.stickpng.com/images/602175e40ad3230004b93c20.png"
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
                    Dropdown
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
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
