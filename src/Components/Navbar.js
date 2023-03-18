import { useHistory, Link } from "react-router-dom";

const Navbar = ({ searchText, setSearchText }) => {
  const history = useHistory();

  const updateSearchText = (e) => {
    history.push("/search");
    setSearchText(e.target.value);
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand" aria-current="page">
          Movie Browser
        </Link>

        <div className="nav-item">
          <Link className="nav-link" to="/about">
            About
          </Link>
        </div>
        <div className="nav-item">
          <Link
            className="nav-link disabled"
            to="gotonowhere"
            tabIndex="-1"
            aria-disabled="true"
          >
            Coming Soon
          </Link>
        </div>

        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="search"
            aria-label="Search"
            value={searchText}
            onChange={updateSearchText}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
