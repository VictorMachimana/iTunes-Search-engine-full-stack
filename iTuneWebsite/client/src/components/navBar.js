import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";

function NavBar() {
  return (
    <header className="App-header">
      <Navbar expand="sm" bg="dark" variant="dark">
        {/*---Logo icon image --- */}
        <Navbar.Brand href="/">
          <div className="wrap-Brand">
            <i className="fa fa-music" aria-hidden="true" />
            <h2 className="logoName"> iTunes Search API</h2>
          </div>
        </Navbar.Brand>

        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="nav-text">
            <Nav className="mr-auto">
              <Link to="/music" className="link">
                Music
              </Link>
              <Link to="/videos" className="link">
                Videos
              </Link>
              <Link to="/movies" className="link">
                Movies
              </Link>
              <Link to="/audiobooks" className="link">
                Audio Books
              </Link>
            </Nav>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
      <div className="welcome-text">
        <h1>Welcome To iTunes</h1>
      </div>
    </header>
  );
}

export default NavBar;
