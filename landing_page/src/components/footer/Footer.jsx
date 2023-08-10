import "./footer.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <div className="footer">
      <div className="f_container">
        <div className="f_top">
          <div className="f_logo">
            <img
              src="https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg"
              alt=""
            />
          </div>
          <div className="f_lists">
            <ul className="f_list">
              <li className="f_listItem">
                <a
                  style={{ color: "inherit", textDecoration: "none" }}
                  href="#"
                >
                  <b>Legal</b>
                </a>
              </li>
              <li className="f_listItem">
                <a
                  style={{ color: "inherit", textDecoration: "none" }}
                  href="#"
                >
                  Terms and Conditions
                </a>
              </li>
              <li className="f_listItem">
                <a
                  style={{ color: "inherit", textDecoration: "none" }}
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li className="f_listItem">
                <a
                  style={{ color: "inherit", textDecoration: "none" }}
                  href="#"
                >
                  Disclaimer
                </a>
              </li>
              <li className="f_listItem">
                <a
                  style={{ color: "inherit", textDecoration: "none" }}
                  href="#"
                >
                  Caution Notice
                </a>
              </li>
            </ul>
            <ul className="f_list">
              <li className="f_listItem">
                <a
                  style={{ color: "inherit", textDecoration: "none" }}
                  href="#"
                >
                  <b>KFC India</b>
                </a>
              </li>
              <li className="f_listItem">
                <a
                  style={{ color: "inherit", textDecoration: "none" }}
                  href="#"
                >
                  About KFC
                </a>
              </li>
              <li className="f_listItem">
                <a
                  style={{ color: "inherit", textDecoration: "none" }}
                  href="#"
                >
                  KFC Care
                </a>
              </li>
              <li className="f_listItem">
                <a
                  style={{ color: "inherit", textDecoration: "none" }}
                  href="#"
                >
                  Careers
                </a>
              </li>
              <li className="f_listItem">
                <a
                  style={{ color: "inherit", textDecoration: "none" }}
                  href="#"
                >
                  Our Golden Past
                </a>
              </li>
            </ul>
            <ul className="f_list">
              <li className="f_listItem">
                <a
                  style={{ color: "inherit", textDecoration: "none" }}
                  href="#"
                >
                  <b>KFC Food</b>
                </a>
              </li>
              <li className="f_listItem">
                <a
                  style={{ color: "inherit", textDecoration: "none" }}
                  href="#"
                >
                  Menu
                </a>
              </li>
              <li className="f_listItem">
                <a
                  style={{ color: "inherit", textDecoration: "none" }}
                  href="#"
                >
                  Order Lookup
                </a>
              </li>
              <li className="f_listItem">
                <a
                  style={{ color: "inherit", textDecoration: "none" }}
                  href="#"
                >
                  Gift Card
                </a>
              </li>
              <li className="f_listItem">
                <a
                  style={{ color: "inherit", textDecoration: "none" }}
                  href="#"
                >
                  Nutrition & Allergen
                </a>
              </li>
            </ul>
            <ul className="f_list">
              <li className="f_listItem">
                <a
                  style={{ color: "inherit", textDecoration: "none" }}
                  href="#"
                >
                  <b>Support</b>
                </a>
              </li>
              <li className="f_listItem">
                <a
                  style={{ color: "inherit", textDecoration: "none" }}
                  href="#"
                >
                  Get Help
                </a>
              </li>
              <li className="f_listItem">
                <a
                  style={{ color: "inherit", textDecoration: "none" }}
                  href="#"
                >
                  Contact Us
                </a>
              </li>
              <li className="f_listItem">
                <a
                  style={{ color: "inherit", textDecoration: "none" }}
                  href="#"
                >
                  KFC Feedback
                </a>
              </li>
              <li className="f_listItem">
                <a
                  style={{ color: "inherit", textDecoration: "none" }}
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="f_location">
            <LocationOnIcon fontSize="small" className="f_icon" />
            <span className="f_find">
              <a style={{ color: "white" }} href="">
                Find a KFC
              </a>
            </span>
          </div>
          <div className="f_apps">
            <img
              className="f_google"
              src="https://images.ctfassets.net/wtodlh47qxpt/6BdZsyjLn64c06uCIE73d1/fb530f5d5231533b049463f6c7e8a2b1/google_play.svg"
              alt=""
            />
            <img
              className="f_apple"
              src="https://images.ctfassets.net/wtodlh47qxpt/em3mcMuAdXWlgucSJiTbS/d3ae7e51ed101d829e459355e255c47f/apple.svg"
              alt=""
            />
          </div>
        </div>
        <div className="f_bottom">
          <span style={{ cursor: "pointer" }} className="f_copy">
            Copyright © KFC Corporation 2023 All Rights Reserved
          </span>
          <span className="f_social">
            <div className="f_social_icon">
              <InstagramIcon fontSize="small" />
            </div>
            <div className="f_social_icon">
              <FacebookIcon fontSize="small" />
            </div>
            <div className="f_social_icon">
              <TwitterIcon fontSize="small" />
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
