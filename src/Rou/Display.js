import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import Udemy from "../Component/Udmay";
import "../Css/Display.css";
// import Categorie from "../Component/Category";
import LoginButton from "../Login&signup/Login";
import RegisterButton from "../Login&signup/register";
import DevelopmentRoute from "../Component/Devlopment/Devrou";
import Development from "../Component/Devlopment/Design";
import WebDevelopment from "../Component/Devlopment/Webdesign";
import DataScience from "../Component/Devlopment/DataScience";
import Programming from "../Component/Devlopment/Proframming";
import Game from "../Component/Devlopment/Game";
import Mobile from "../Component/Devlopment/Mobile";
import Buniess from "../Component/Business/Business";
import Communication from "../Component/Business/Communication";
import Management from "../Component/Business/Management";
import BuniessStretegy from "../Component/Business/Businesstetegy";
import Oprations from "../Component/Business/Opration";
import Human from "../Component/Business/Human";
import BusinessRoute from "../Component/Business/Businessrou";
import Finance from "../Component/Finance/Finance";
import FinanceAccounting from "../Component/Finance/Finance&Accounting";
import Compliance from "../Component/Finance/Compliance";
import Economics from "../Component/Finance/Economic";
import Accounting from "../Component/Finance/Accounting";
import Taxes from "../Component/Finance/Taxes";
import Itrouter from "../Component/It&software/Itroute";
import ItSoftware from "../Component/It&software/It&Software";
import Certificate from "../Component/It&software/ItCertificate";
import Security from "../Component/It&software/Security";
import Hardware from "../Component/It&software/Hardware";
import Oprating from "../Component/It&software/Oprating";
import OtherIt from "../Component/It&software/Other";
import Marketing from "../Component/Marketing/Marketing";
import Digital from "../Component/Marketing/Digital";
import Content from "../Component/Marketing/Content";
import Social from "../Component/Marketing/Socail";
import Public from "../Component/Marketing/Public";
import Product from "../Component/Marketing/Product";
import Marketingrouter from "../Component/Marketing/Marketingrou";
import LifeStyle from "../Component/Life/Life";
import Art from "../Component/Life/Art";
import Beauty from "../Component/Life/Beauty";
import PetCare from "../Component/Life/Pet";
import Food from "../Component/Life/Food";
import Travel from "../Component/Life/Treval";
import LifeRouter from "../Component/Life/Liferoute";
import PhotographyRouter from "../Component/Photography/Phorou";
import DigitalPhoto from "../Component/Photography/Digital";
import Photography from "../Component/Photography/Photographysub";
import Video from "../Component/Photography/Video";
import Tools from "../Component/Photography/Tools";
import Commercial from "../Component/Photography/Commecial";
import PhotoVideo from "../Component/Photography/Photovid";
import Health from "../Component/Health/Health";
import Fitness from "../Component/Health/Fitness";
import Yoga from "../Component/Health/Yoga";
import Sport from "../Component/Health/Sport";
import Mental from "../Component/Health/Mental";
import Dance from "../Component/Health/Dance";
import HealthRouter from "../Component/Health/Healthrou";
import TeachRouter from "../Component/Teaching/Teachrou";
import Teaching from "../Component/Teaching/Teaching";
import Engneering from "../Component/Teaching/Engeering";
import SocailScience from "../Component/Teaching/Socail";
import Math from "../Component/Teaching/Math";
import Science from "../Component/Teaching/Science";
import Training from "../Component/Teaching/Training";
import TechOn from "../Component/Techon";
function Display() {
  const Navi = useNavigate();
  const auth = localStorage.getItem("token");

  const logoutfunc = () => {
    localStorage.clear();
    Navi("/register");
  };

  return (
    <>
      <div className="container">
        {/* <div> */}
        <NavLink to="/">
          <img
            className="logo"
            src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
            alt="Not Found"
          />
        </NavLink>
        {/* </div> */}

        <div className="parent">
          <ul className="parent_menu">
            <li className="parent_list">
              <div className="parent_list_div">Categories</div>

              <ul className="sub_container">
                <div className="sub_container_two">
                  <li className="developement">
                    <NavLink to="/design"> Design</NavLink>
                    <ul className="development_subroute">
                      <div className="under_div">
                        <li className="web_development_container">
                          <NavLink to="/design/webdesign"> Web Design</NavLink>
                        </li>
                        <li className="data_science_container">
                          <NavLink to="/design/gamedesign">
                            {" "}
                            Game Design
                          </NavLink>
                        </li>
                        <li className="mobile_development_container">
                          <NavLink to="/design/animation">
                            3D & Animation
                          </NavLink>
                        </li>
                        <li className="programing_development_container">
                          <NavLink to="/design/fashion/design">
                            Fashion Design{" "}
                          </NavLink>
                        </li>
                        <li className="game_development_container">
                          <NavLink to="/design/other/design">
                            {" "}
                            Other Design
                          </NavLink>
                        </li>
                      </div>
                    </ul>
                  </li>
                </div>

                <div>
                  <li className="business">
                    <NavLink to="/business"> Business</NavLink>
                    <ul className="business_subroute">
                      <div className="under_div_business">
                        <li className="  communication_science_container">
                          <NavLink to="/business/communication">
                            {" "}
                            communication
                          </NavLink>
                        </li>
                        <li className="management_development_container">
                          <NavLink to="/business/management">
                            Management
                          </NavLink>
                        </li>

                        <li className="Stetegy_container">
                          <NavLink to="/business/Stetegy">
                            Business Stetegy
                          </NavLink>
                        </li>
                        <li className="Oprations_container">
                          <NavLink to="/business/Oprations">Oprations</NavLink>
                        </li>
                        <li className="Project_container">
                          <NavLink to="/business/Human/Resources">
                            Human Resources
                          </NavLink>
                        </li>
                      </div>
                    </ul>
                  </li>
                </div>
                <div>
                  <li className="finance">
                    <NavLink to="/finance"> Finance & Accounting</NavLink>
                    <ul className="subroute_finance">
                      <div className="finance_under_div">
                        <li className=" Accounting_finance_container">
                          <NavLink to="/finance/Book/Keeping">
                            Accounting & Book Keeping
                          </NavLink>
                        </li>

                        <li className="Compliance_container">
                          <NavLink to="/finance/Compliance">Compliance</NavLink>
                        </li>

                        <li className="Economics_container">
                          <NavLink to="/finance/Economics">Economics</NavLink>
                        </li>
                        <li className="Finance_container">
                          <NavLink to="/finance/Finance">Finance</NavLink>
                        </li>
                        <li className=" Cert_container">
                          <NavLink to="/finance/taxes">Taxes</NavLink>
                        </li>
                      </div>
                    </ul>
                  </li>
                </div>

                <li className="it_software">
                  <NavLink to="/it/software">It & Software</NavLink>
                  <ul className="subroute_It">
                    <div className="It_under_div">
                      <li className=" Certification_container">
                        <NavLink to="/it/certificate">It Certification</NavLink>
                      </li>
                      <li className="Network_container">
                        <NavLink to="/it/Network">Network & Security</NavLink>
                      </li>
                      <li className="Hardware_container">
                        <NavLink to="/it/hardware">Hardware</NavLink>
                      </li>
                      <li className="Operating_container">
                        <NavLink to="/it/oprating/system">
                          Operating System & Server
                        </NavLink>
                      </li>
                      <li className="Otherit_container">
                        <NavLink to="/it/other">Other It & Software</NavLink>
                      </li>
                    </div>
                  </ul>
                </li>

                <li className="Marketing">
                  <NavLink to="/marketing">Marketing</NavLink>
                  <ul className="subroute_Marketing">
                    <div className="Marketing_under_div">
                      <li className="Digital_container">
                        <NavLink to="/marketing/digital">
                          Digital Marketing
                        </NavLink>
                      </li>
                      <li className="Illustration_container">
                        <NavLink to="/marketing/content">
                          {" "}
                          Content Marketing
                        </NavLink>
                      </li>
                      <li className="tooldesign_container">
                        <NavLink to="/marketing/social">
                          {" "}
                          Social Media Marketing
                        </NavLink>
                      </li>
                      <li className=" User_container">
                        <NavLink to="/marketing/public">
                          Public Relationship
                        </NavLink>
                      </li>
                      <li className=" User_container">
                        <NavLink to="/marketing/product">
                          Product Marketing
                        </NavLink>
                      </li>
                    </div>
                  </ul>
                </li>

                <li className="LifeStyle">
                  <NavLink to="/life">LifeStyle</NavLink>
                  <ul className="subroute_LifeStyle">
                    <div className="LifeStyle_under_div">
                      <li className="Arts_container">
                        <NavLink to="/life/art/craft">Arts Crafts</NavLink>
                      </li>
                      <li className="Makeup_container">
                        <NavLink to="/life/beauty">Beauty & Makeup</NavLink>
                      </li>
                      <li className="Esoteric_container">
                        <NavLink to="/life/pet/craft">
                          {" "}
                          Pet Care & Training
                        </NavLink>
                      </li>
                      <li className="Bevrage_container">
                        <NavLink to="/life/food/bevrage">
                          Food & Bevrage
                        </NavLink>
                      </li>
                      <li className="Bevrage_container">
                        <NavLink to="/life/travel">Travel</NavLink>
                      </li>
                    </div>
                  </ul>
                </li>
                <li className="Video">
                  <NavLink to="/photography"> Photography & Video</NavLink>
                  <ul className="subroute_Video">
                    <div className="Video_under_div">
                      <li className="Digital_container">
                        <NavLink to="/photography/Digital">
                          Digital Photography
                        </NavLink>
                      </li>
                      <li className=" Photographysecond_container">
                        <NavLink to="/photography/photography">
                          Photography
                        </NavLink>
                      </li>
                      <li className="Portrait_container">
                        <NavLink to="/photography/video/design">
                          Video Design
                        </NavLink>
                      </li>
                      <li className="Toolsphoto_container">
                        <NavLink to="/photography/tools">
                          Photography Tools
                        </NavLink>
                      </li>
                      <li className="Toolsphoto_container">
                        <NavLink to="/photography/Commercial">
                          Commercial Photography
                        </NavLink>
                      </li>
                    </div>
                  </ul>
                </li>
                <li className="Fitness">
                  <NavLink to="/health"> Health & Fitness</NavLink>
                  <ul className="subroute_Fitness">
                    <div className="Fitness_under_div">
                      <li className="Fitness_container">
                        <NavLink to="/health/fitness">Fitness</NavLink>
                      </li>
                      <li className=" General_container">
                        <NavLink to="/health/yoga">Yoga</NavLink>
                      </li>
                      <li className="Sports_container">
                        <NavLink to="/health/sport">Sports</NavLink>
                      </li>
                      <li className="Sports_container">
                        <NavLink to="/health/mental">Mental Health</NavLink>
                      </li>
                      <li className="Diet_container">
                        <NavLink to="/health/dance">Dance</NavLink>
                      </li>
                    </div>
                  </ul>
                </li>

                <li className="Teaching">
                  <NavLink to="/teaching"> Teaching & Academics</NavLink>
                  <ul className="subroute_Teaching">
                    <div className="Teaching_under_div">
                      <li className="Engneering_container">
                        <NavLink to="/teaching/Engneering">Engneering</NavLink>
                      </li>
                      <li className="Humanities_container">
                        <NavLink to="/teaching/social/science">
                          Social Science
                        </NavLink>
                      </li>
                      <li className="Math_container">
                        <NavLink to="/teaching/Math">Math</NavLink>
                      </li>
                      <li className="Science_container">
                        <NavLink to="/teaching/Science">Science</NavLink>
                      </li>
                      <li className="Science_container">
                        <NavLink to="/teaching/Teacher/Training">
                          Teacher Training
                        </NavLink>
                      </li>
                    </div>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <input
          type="text"
          placeholder="enter here"
          className="searchbar"
        ></input>

        <div className="tooltip">
          <ul className="teachonudemy">
            <NavLink to="techon/udemy">Teach on Udemy</NavLink>
            <li className="tooltiptext">
              Turn What You Knonw into an opportunity and reach millions around
              the word
            </li>
          </ul>
        </div>

        <span>🛒</span>

        {auth ? (
          <NavLink to="/login">
            <button onClick={logoutfunc} className="btnone lgtbtn">
              Logout
            </button>
          </NavLink>
        ) : (
          //  <NavLink  to="/register"  onClick={logoutfunc} >Logout</NavLink> :
          //
          <span>
            <NavLink to="/login">
              <button className="btnone loginbtn">login</button>
            </NavLink>
            <NavLink to="/register">
              <button className="btnone">register</button>
            </NavLink>
          </span>
        )}
      </div>

      <Routes>
        <Route path="/" element={<Udemy />}></Route>
        <Route path="/login" element={<LoginButton />}></Route>
        <Route path="/register" element={<RegisterButton />}></Route>
        <Route path="/devroute" element={<DevelopmentRoute />}></Route>
        <Route path="/design" element={<Development />}></Route>
        <Route path="/design/webdesign" element={<WebDevelopment />}></Route>
        <Route path="/design/gamedesign" element={<DataScience />}></Route>
        <Route path="/design/animation" element={<Programming />}></Route>
        <Route path="/design/fashion/design" element={<Game />}></Route>
        <Route path="/design/other/design" element={<Mobile />}></Route>
        <Route path="business" element={<Buniess />}></Route>
        <Route
          path="/business/communication"
          element={<Communication />}
        ></Route>
        <Route path="/business/management" element={<Management />}></Route>
        <Route path="/business/Stetegy" element={<BuniessStretegy />}></Route>
        <Route path="/business/Oprations" element={<Oprations />}></Route>
        <Route path="/business/Human/Resources" element={<Human />}></Route>
        <Route path="business/route" element={<BusinessRoute />}></Route>
        <Route path="/finance" element={<FinanceAccounting />}></Route>
        <Route path="/finance/Book/Keeping" element={<Accounting />}></Route>
        <Route path="/finance/Compliance" element={<Compliance />}></Route>
        <Route path="/finance/Economics" element={<Economics />}></Route>
        <Route path="/finance/Finance" element={<Finance />}></Route>
        <Route path="/finance/taxes" element={<Taxes />}></Route>
        <Route path="/itroute" element={<Itrouter />}></Route>
        <Route path="/it/software" element={<ItSoftware />}></Route>
        <Route path="/it/certificate" element={<Certificate />}></Route>
        <Route path="/it/Network" element={<Security />}></Route>
        <Route path="/it/hardware" element={<Hardware />}></Route>
        <Route path="/it/oprating/system" element={<Oprating />}></Route>
        <Route path="/it/other" element={<OtherIt />}></Route>
        <Route path="/marketing" element={<Marketing />}></Route>
        <Route path="/marketing/digital" element={<Digital />}></Route>
        <Route path="/marketing/content" element={<Content />}></Route>
        <Route path="/marketing/social" element={<Social />}></Route>
        <Route path="/marketing/public" element={<Public />}></Route>
        <Route path="/marketing/product" element={<Product />}></Route>
        <Route path="/marketingroute" element={<Marketingrouter />}></Route>
        <Route path="/life" element={<LifeStyle />}></Route>
        <Route path="/life/art/craft" element={<Art />}></Route>
        <Route path="/life/beauty" element={<Beauty />}></Route>
        <Route path="/life/pet/craft" element={<PetCare />}></Route>
        <Route path="/life/food/bevrage" element={<Food />}></Route>
        <Route path="/life/travel" element={<Travel />}></Route>
        <Route path="liferoute" element={<LifeRouter />}></Route>
        <Route path="/photoroute" element={<PhotographyRouter />}></Route>
        <Route path="/photography/Digital" element={<DigitalPhoto />}></Route>
        <Route path="/photography/photography" element={<Photography />}>
          {" "}
        </Route>
        <Route path="/photography/video/design" element={<Video />}>
          {" "}
        </Route>
        <Route path="/photography/tools" element={<Tools />}></Route>
        <Route path="/photography/Commercial" element={<Commercial />}></Route>
        <Route path="/photography" element={<PhotoVideo />}></Route>
        <Route path="/health" element={<Health />}></Route>
        <Route path="/health/fitness" element={<Fitness />}></Route>
        <Route path="/health/yoga" element={<Yoga />}></Route>
        <Route path="/health/sport" element={<Sport />}></Route>
        <Route path="/health/mental" element={<Mental />}></Route>
        <Route path="/health/dance" element={<Dance />}></Route>
        <Route path="/healthroute" element={<HealthRouter />}></Route>
        <Route path="teachroute" element={<TeachRouter />}></Route>
        <Route path="/teaching" element={<Teaching />}></Route>
        <Route path="/teaching/Engneering" element={<Engneering />}></Route>
        <Route
          path="/teaching/social/science"
          element={<SocailScience />}
        ></Route>
        <Route path="/teaching/Math" element={<Math />}></Route>
        <Route path="/teaching/Science" element={<Science />}></Route>
        <Route path="/teaching/Teacher/Training" element={<Training />}></Route>
        <Route path="techon/udemy" element={<TechOn />}></Route>
      </Routes>
    </>
  );
}
export default Display;
