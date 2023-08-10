import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sb_container">
        <img
          className="lines"
          src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg"
          alt=""
        />
        <h1 className="title">KFC MENU</h1>
        <ul className="list">
          <li className="listItem">PERI PERI CHICKEN</li>
          <li className="listItem">VALUE SNACKERS</li>
          <li className="listItem">CHICKEN ROLLS</li>
          <li className="listItem">CHICKEN BUCKETS</li>
          <li className="listItem">BIRYANI BUCKETS</li>
          <li className="listItem">BOX MEALS</li>
          <li className="listItem">BURGERS</li>
          <li className="listItem">SNACKS</li>
          <li className="listItem">BEVERAGES</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
