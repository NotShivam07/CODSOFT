import "./header.css";
import Sidebar from "../sidebar/Sidebar";
import SearchIcon from "@mui/icons-material/Search";
import About from "../about/About";

const Header = () => {
  return (
    <div className="header">
      <Sidebar />
      <div className="main">
        <div className="main_container">
          <div className="searchContainer">
            <SearchIcon />
            <input
              className="search"
              type="text"
              placeholder="Search our menu"
            />
          </div>
          <hr className="mainLine" />
          <div className="about">
            <About />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
