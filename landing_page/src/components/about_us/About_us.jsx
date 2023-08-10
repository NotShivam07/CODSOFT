import "./about_us.css";

const About_us = () => {
  return (
    <div className="au">
      <div className="au_t">
        <img
          className="au_title_lines"
          src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg"
          alt=""
        />
        <h1 className="au_title">About Us</h1>
      </div>
      <div className="au_container">
        <h2 className="au_sub_title">
          Journey of fried chicken, through the ages
        </h2>
        <p className="au_desc">
          It all started with Colonel Harland Sanders creating a finger lickin’
          good recipe more than 75 years ago. A list of secret herbs and spices
          scratched out on the back of his kitchen door, that continues to be
          followed across 145 countries, with more than 800,000 team members
          breading and freshly preparing bucket after bucket of our signature
          Hot & Crispy chicken. The Colonel’s Secret Recipe continues to be as
          guarded; and our commitment towards Food, People and Planet remains as
          steadfast. With a new KFC restaurant opening every 6 hours, we power
          on to serve the World’s Tastiest Chicken!
        </p>
        <div className="au_cards">
          <div className="au_card">
            <img
              src="https://about.kfc.co.in/assets/images/D/Icons/calendar.png"
              alt=""
              className="au_img"
            />
            <div className="au_info">
              <span className="au_info_text">Since</span>
              <span className="au_info_number">1930</span>
            </div>
            <img
              className="au_lines"
              src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg"
              alt=""
            />
          </div>
          <div className="au_card">
            <img
              src="https://about.kfc.co.in/assets/images/D/Icons/country.png"
              alt=""
              className="au_img"
            />
            <div className="au_info">
              <span className="au_info_text">Countries</span>
              <span className="au_info_number">145</span>
            </div>
            <img
              className="au_lines"
              src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg"
              alt=""
            />
          </div>
          <div className="au_card">
            <img
              src="https://about.kfc.co.in/assets/images/D/Icons/kfc-board.png"
              alt=""
              className="au_img"
            />
            <div className="au_info">
              <span className="au_info_text">Restaurants</span>
              <span className="au_info_number">25k+</span>
            </div>
            <img
              className="au_lines"
              src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg"
              alt=""
            />
          </div>
          <div className="au_card">
            <img
              src="https://about.kfc.co.in/assets/images/D/Icons/kitchen-lovers.png"
              alt=""
              className="au_img"
            />
            <div className="au_info">
              <span className="au_info_text">Team Members</span>
              <span className="au_info_number">800k+</span>
            </div>
            <img
              className="au_lines"
              src="https://online.kfc.co.in/static/media/Stripes_Small_OffersIcon.87fc6256.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_us;
