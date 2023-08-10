import "./navbar.css";
import PersonIcon from "@mui/icons-material/Person";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <span className="logo">
            <img
              src="https://online.kfc.co.in/static/media/kfcLogo.492728c6.svg"
              alt=""
            />
          </span>
          <span className="navOptions">Menu</span>
          <span className="navOptions">Deals</span>
          <img
            className="navIcon"
            src="https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg"
            alt=""
          />
        </div>
        <div className="right">
          <button className="signIn">
            <PersonIcon />
            <span>Sign In</span>
          </button>
          <div className="line">
            <hr />
          </div>
          <button className="register">
            <span>Register</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
