import { NavLink } from "react-router-dom";
import "../Css/Footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div className="footer_container">
          <div className="footer_under_first_div">
            <div className="underdiv_underdiv">
              <h2>Teach the world online</h2>
              <p className="_head_footer">
                Create an online video course, reach students across the globe,
                and earn money
              </p>
            </div>
            <div className="techbtn">
              <NavLink to="techon/udemy" className="tech_footer">
                Teach on Udemy
              </NavLink>
            </div>
          </div>
          <div className="second_container_footer">
            <h2>
              Top companies choose Udemy Business to build in-demand career
              skills.
            </h2>
            <img
              src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
              alt="Not Found"
            />
            <img
              src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
              alt="Not Found"
            />
            <img
              src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
              alt="Not Found"
            />
            <img
              src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
              alt="Not Found"
            />
            <img
              src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
              alt="Not Found"
            />
          </div>
          <hr />
          <div className="footer_third_continer">
            <div className="underfotter">
              <div className="fitrstlink">
                <NavLink to="/design" className="footernav">
                  Design
                </NavLink>
                <NavLink to="/design/webdesign" className="footernav">
                  web Design
                </NavLink>
                <NavLink to="/business" className="footernav">
                  Buniess
                </NavLink>
                <NavLink to="/business/communication" className="footernav">
                  Communication
                </NavLink>
                <NavLink to="/finance" className="footernav">
                  Finance & Accounting
                </NavLink>
                <NavLink to="/finance/Book/Keeping" className="footernav">
                  Accounting & Book Keeping
                </NavLink>
              </div>
              <div className="secondlink">
                <NavLink to="/it/software" className="footernav">
                  It& Software
                </NavLink>{" "}
                <NavLink to="/it/certificate" className="footernav">
                  It Certification
                </NavLink>
                <NavLink to="/marketing" className="footernav">
                  Marketing
                </NavLink>{" "}
                <NavLink to="/marketing/digital" className="footernav">
                  Digital Marketing
                </NavLink>
                <NavLink to="/life" className="footernav">
                  LifeStyle
                </NavLink>
                <NavLink to="/life/art/craft" className="footernav">
                  Art Crafts
                </NavLink>{" "}
              </div>
              <div className="thirdlink">
                <NavLink to="/photography" className="footernav">
                  Photography & Video
                </NavLink>{" "}
                <NavLink to="/photography/Digital" className="footernav">
                  Digital Photography
                </NavLink>
                <NavLink to="/health" className="footernav">
                  Health
                </NavLink>{" "}
                <NavLink to="/health/fitness" className="footernav">
                  Fitness
                </NavLink>
                <NavLink to="/teaching" className="footernav">
                  Teaching & Academics
                </NavLink>{" "}
                <NavLink to="/teaching/Engneering" className="footernav">
                  Engneering
                </NavLink>
              </div>
            </div>
            <div className="englishbtn">🌐 English</div>
          </div>
          <hr />
          <div className="footer_last-div">
            <div className="footer_last-div_img">
              <img
                src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
                className="udemy_footer_img"
                alt="Not Found"
              />
            </div>
            <div className="footer_last-div_email">© 2023 Udemy, Inc.</div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
