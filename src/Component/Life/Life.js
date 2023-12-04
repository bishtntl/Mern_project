import { useEffect, useState } from "react";
import LifeRouter from "./Liferoute"

function LifeStyle(){
    const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchapi() {
      const ffdata = await fetch("http://localhost:4500/api/getdata");
      const res = await ffdata.json();
      setData(res);
      // console.log(res);
    }
    fetchapi();
  });
    return(
        <>
        <LifeRouter/>
        <div className="one_container">
        <div className="developement_Top_container">
          <h1 style={{ height: "8vh" }}>Lifestyle Courses</h1>
          <h2>Courses to get you started</h2>

          <div className="second_container_developement">
            <span className="three_sub most">Most popular</span>

            <span className="three_sub">New</span>
            <span className="three_sub">Trending</span>
          </div>
          <hr className="hrdelevep" style={{}} />
          <div className="expand_career_two_develop">
            <div className="flex_container_dev">
              <div className="underflex_dev">
                {data
                  .filter((item) => item.id === 223)
                  .map((item, index) => {
                    return (
                      <div key={index} className="underflex_two_dev">
                        <div className="image_flex_div">
                          <img className="imageflexone_dev" src={item.img} alt="Not Found"/>
                        </div>
                        <div
                          className="  .details_div_devlop {
"
                        >
                          <b>{item.heading}</b>
                          <span>{item.name}</span>
                          <p>{item.rating}</p>
                          <span>
                            <span className="priceflex_dev">
                              ₹{item.price}.00
                            </span>{" "}
                            <span className="hideprice_dev">
                              ₹{item.prevprice}.00
                            </span>
                          </span>
                          <span>Best Saaller</span>
                        </div>

                        <div className="hover_container_dev">
                          <div key={index} className="hover_details_dev">
                            <h4 className="heading_hover_dev">
                              {item.headinghover}
                            </h4>
                            <span>{item.time}</span>
                            <p>{item.totalhour}</p>
                            <p>{item.about}</p>
                            <p className="subtitle_dev">✅{item.para}</p>
                            <p className="subtitle_dev">✅{item.predata}</p>
                            <p className="subtitle_dev">✅{item.pre}</p>
                            <div className="addbtn_dev">
                              <button className="addtocart_dev">
                                go to cart
                              </button>
                              <span className="love_dev">
                                <i class="fa-regular fa-heart"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>

              <div className="underflex_dev">
                {data
                  .filter((item) => item.id === 213)
                  .map((item, index) => {
                    return (
                      <div key={index} className="underflex_two_dev">
                        <div className="image_flex_div_dev">
                          <img className="imageflexone_dev" src={item.img} alt="Not Found"/>
                        </div>
                        <div className="details_div_devlop">
                          <b>{item.heading}</b>
                          <span>{item.name}</span>
                          <p>{item.rating}</p>
                          <span>
                            <span className="priceflex_dev">
                              ₹{item.price}.00
                            </span>{" "}
                            <span className="hideprice_dev">
                              ₹{item.prevprice}.00
                            </span>
                          </span>
                          <span>Best Saaller</span>
                        </div>

                        <div className="hover_container_dev">
                          <div key={index} className="hover_details_dev">
                            <h4 className="heading_hover_dev">
                              {item.headinghover}
                            </h4>
                            <span>{item.time}</span>
                            <p>{item.totalhour}</p>
                            <p>{item.about}</p>
                            <p className="subtitle_dev">✅{item.para}</p>
                            <p className="subtitle_dev">✅{item.predata}</p>
                            <p className="subtitle_dev">✅{item.pre}</p>
                            <div className="addbtn_dev">
                              <button className="addtocart_dev">
                                go to cart
                              </button>
                              <span className="love_dev">
                                <i class="fa-regular fa-heart"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>

              <div className="underflex_dev">
                {data
                  .filter((item) => item.id === 224)
                  .map((item, index) => {
                    return (
                      <div key={index} className="underflex_two_dev">
                        <div className="image_flex_div_dev">
                          <img className="imageflexone_dev" src={item.img} alt="Not Found"/>
                        </div>
                        <div className="details_div_devlop">
                          <b>{item.heading}</b>
                          <span>{item.name}</span>
                          <p>{item.rating}</p>
                          <span>
                            <span className="priceflex_dev">
                              ₹{item.price}.00
                            </span>{" "}
                            <span className="hideprice_dev">
                              ₹{item.prevprice}.00
                            </span>
                          </span>
                          <span>Best Saaller</span>
                        </div>

                        <div className="hover_container_right_two_dev">
                          <div key={index} className="hover_details_dev">
                            <h4 className="heading_hover_dev">
                              {item.headinghover}
                            </h4>
                            <span>{item.time}</span>
                            <p>{item.totalhour}</p>
                            <p>{item.about}</p>
                            <p className="subtitle_dev">✅{item.para}</p>
                            <p className="subtitle_dev">✅{item.predata}</p>
                            <p className="subtitle_dev">✅{item.pre}</p>
                            <div className="addbtn_dev">
                              <button className="addtocart_dev">
                                go to cart
                              </button>
                              <span className="love_dev">
                                <i class="fa-regular fa-heart"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>

              <div className="underflex_dev">
                {data
                  .filter((item) => item.id === 229)
                  .map((item, index) => {
                    return (
                      <div key={index} className="underflex_two_dev">
                        <div className="image_flex_div_dev">
                          <img className="imageflexone_dev" src={item.img} alt="Not Found"/>
                        </div>
                        <div className="details_div_devlop">
                          <b>{item.heading}</b>
                          <span>{item.name}</span>
                          <p>{item.rating}</p>
                          <span>
                            <span className="priceflex_dev">
                              ₹{item.price}.00
                            </span>{" "}
                            <span className="hideprice_dev">
                              ₹{item.prevprice}.00
                            </span>
                          </span>
                          <span>Best Saaller</span>
                        </div>

                        <div className="hover_container_right_dev">
                          <div key={index} className="hover_details_dev">
                            <h4 className="heading_hover_dev">
                              {item.headinghover}
                            </h4>
                            <span>{item.time}</span>
                            <p>{item.totalhour}</p>
                            <p>{item.about}</p>
                            <p className="subtitle_dev">✅{item.para}</p>
                            <p className="subtitle_dev">✅{item.predata}</p>
                            <p className="subtitle_dev">✅{item.pre}</p>
                            <div className="addbtn_dev">
                              <button className="addtocart_dev">
                                go to cart
                              </button>
                              <span className="love_dev">
                                <i class="fa-regular fa-heart"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="third_container_develop">
        <div className="music_dev">
          <div className="circle_music_dev">
            <span>
              <i class="fa-solid fa-play"></i>
            </span>
          </div>

          <span className="music_details_dev">
            Learn in-demand skills with over 210,000 video courses
          </span>
        </div>

        <div className="music_dev">
          <div className="circle_music_dev">
            <span>
              <i class="fa-solid fa-star"></i>
            </span>
          </div>

          <span className="music_details_dev">
            Choose courses taught by real-world experts
          </span>
        </div>

        <div className="music_dev">
          <div className="circle_music_dev">
            <span>
              <i class="fa-solid fa-infinity"></i>
            </span>
          </div>

          <span className="music_details_dev">
            Learn at your own pace, with lifetime access on mobile and desktop
          </span>
        </div>
      </div>

      <div className="popul_head">
        {" "}
        <h1>Popular Topic</h1>
      </div>
      <div className="popular_dev_container">
        <div className="launguge_dev">Python</div>
        <div className="launguge_dev">Data Science</div>
        <div className="launguge_dev">React Js</div>
        <div className="launguge_dev">Java</div>
        <div className="launguge_dev">C#(Programing language)</div>
        <div className="launguge_dev">Web Developement</div>
        <div className="launguge_dev">Java Script</div>
        <div className="launguge_dev">Unreal Engine</div>
        <div className="launguge_dev">Machine Learning</div>
        <div className="launguge_dev">Deep Learning</div>
      </div>

      <div className="popul_head_two">
        {" "}
        <h1>Popular Instructors</h1>
      </div>

      <div className="fourth_container">
        <div className="fourth_container_underdiv">
          <div className="fourth_image_container">
            <img
              src="https://img-c.udemycdn.com/user/200_H/31334738_a13c_3.jpg"
              alt="Not Found"
              className="images_fouth_container"
            />
          </div>

          <div className="fourth_container_details">
            <h5>Dr.Angela Yu</h5>
            <p>Python,Data Science</p>
            <span>4.7⭐</span>
            <span>Instructor Rating</span>
            <p>2,422,276 student</p>
            <p>7 courses</p>
          </div>
        </div>
        <div className="fourth_container_underdiv">
          <div className="fourth_image_container">
            <img
              src="https://img-c.udemycdn.com/user/200_H/31926668_94e7_6.jpg"
              alt="Not Found"
              className="images_fouth_container"
            />
          </div>

          <div className="fourth_container_details">
            <h5>Academind by Maximilian Schwarzmuller</h5>
            <p>React JS,React Hooks</p>
            <span>4.7⭐</span>
            <span>Instructor Rating</span>
            <p>2,710,890 student</p>
            <p>46 courses</p>
          </div>
        </div>
        <div className="fourth_container_underdiv">
          <div className="fourth_image_container">
            <img
              src="https://img-c.udemycdn.com/user/200_H/7799204_2091_5.jpg"
              alt="Not Found"
              className="images_fouth_container"
            />
          </div>

          <div className="fourth_container_details">
            <h5>Jonas Schmedtmann</h5>
            <p>JavaScript,React JS</p>
            <span>4.7⭐</span>
            <span>Instructor Rating</span>
            <p>1,831,900 student</p>
            <p>7 courses</p>
          </div>
        </div>
      </div>

      <div className="fifth_underdiv">
        <h1>All Developement Courses</h1>
      </div>
      <div className="fifth_container">
        <div className="circle_dev_fifth">
          <span>
            <i class="fa-solid fa-info"></i>
          </span>
        </div>
        <div className="notsure">
          Not sure? All courses have a 30-day money-back guarantee
        </div>
      </div>

      <div className="six_container">
        <div className="six_container_underdiv">
          <div className="filter_container">
            <span>
              <i class="fa-solid fa-grip-lines"></i>
            </span>
            <p className="filter">Filter (1)</p>
          </div>
          <div className="shortby">
            <b>Short by</b>
            <p>Most Popular</p>
          </div>
          <div></div>
        </div>
        <p className="result">10,000 results</p>
      </div>

      <div className="expand_career_dev_column">
        <div className="rating_div_coloumn">
          <span className="textrating">
            &nbsp;&nbsp;Ratings
            <sapn className="upangleicon">
              <i class="fa-solid fa-angle-up"></i>
            </sapn>
          </span>
          <div className="rating_div_row_parent">
            <div className="rating_div_row">
              <span>
                <i class="fa-regular fa-circle"></i>
              </span>
              <span className="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
              </span>
              <span>
                <b> 4.5 & up </b> (4,042)
              </span>
            </div>
            <div className="rating_div_row">
              <span>
                <i class="fa-regular fa-circle"></i>
              </span>
              <span className="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </span>
              <span>
                <b>4.5 & up </b> (4,042)
              </span>
            </div>
            <div className="rating_div_row">
              <span>
                <i class="fa-regular fa-circle"></i>
              </span>
              <span className="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star-half-stroke"></i>
                <i class="fa-regular fa-star"></i>
              </span>
              <span>
                {" "}
                <b> 4.5 & up</b> (4,042)
              </span>
            </div>
            <div className="rating_div_row">
              <span>
                <i class="fa-regular fa-circle"></i>
              </span>
              <span className="star">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-regular fa-star"></i>
                <i class="fa-regular fa-star"></i>
              </span>
              <span>
                <b> 4.5 & up</b> (4,042)
              </span>
            </div>
          </div>
        </div>
        <div className="flex_container_rating">
          <div className="underflex_column">
            {data
              .filter((item) => item.id >= 222 && item.id <= 224)
              .map((item, index) => {
                return (
                  <>
                    <div key={index} className="underflex_two_rating">
                      <div className="image_flex_div_column">
                        <img className="imageflexone_column" src={item.img} alt="Not Found"/>
                      </div>
                      <div className="details_div_dev_column">
                        <b>{item.heading}</b>
                        <span>{item.name}</span>
                        <p>{item.rating}</p>
                        <span>
                          <span className="priceflex_column">
                            ₹{item.price}.00
                          </span>{" "}
                          <span className="hideprice">
                            ₹{item.prevprice}.00
                          </span>
                        </span>
                        <span>Best Saaller</span>
                      </div>

                      <div className="hover_container_column">
                        <div key={index} className="hover_details_dev_column">
                          <div className="middle_one">
                            <h4 className="heading_hover_dev_column">
                              {item.headinghover}
                            </h4>
                            <span>{item.time}</span>
                            <p>{item.totalhour}</p>
                            <p>{item.about}</p>
                            <p className="subtitle">✅{item.para}</p>
                            <p className="subtitle">✅{item.predata}</p>
                            <p className="subtitle">✅{item.pre}</p>
                            <div className="addbtn">
                              <button className="addtocart_dev_column">
                                go to cart
                              </button>
                              <span className="love">
                                <i class="fa-regular fa-heart"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr style={{ width: "100%" }} />
                  </>
                );
              })}
          </div>
          <div className="seven_container">
            <div className="seven_container_underdiv_first">
              <h3>Top companies trust Udemy</h3>
              <p>Get your team access to Udemy's top 25,000+ courses</p>
            </div>
            <div className="seven_container_underdiv_second">
              <img
                src="https://s.udemycdn.com/partner-logos/v4/nasdaq-dark.svg"
                alt="Not Found"
              />
              <img
                src="https://s.udemycdn.com/partner-logos/v4/eventbrite-dark.svg"
                alt="Not Found"
              />
            </div>
            <div>
              <img
                src="https://s.udemycdn.com/partner-logos/v4/volkswagen-dark.svg"
                alt="Not Found"
              />
            </div>
            <div>
              <img
                src="https://s.udemycdn.com/partner-logos/v4/box-dark.svg"
                alt="Not Found"
              />
            </div>
            <div>
              <img
                src="https://s.udemycdn.com/partner-logos/v4/netapp-dark.svg"
                alt="Not Found"
              />
            </div>
            <div className="TryUdemybtn">Try Udemy Business</div>
          </div>

          <div className="underflex_column">
            {data
              .filter((item) => item.id >= 225 && item.id <= 228)
              .map((item, index) => {
                return (
                  <>
                    <div key={index} className="underflex_two_rating">
                      <div className="image_flex_div_column">
                        <img className="imageflexone_column" src={item.img} alt="Not Found"/>
                      </div>
                      <div className="details_div_dev_column">
                        <b>{item.heading}</b>
                        <span>{item.name}</span>
                        <p>{item.rating}</p>

                        <span>Best Saaller</span>
                      </div>

                      <div className="hover_container_column">
                        <div key={index} className="hover_details_dev_column">
                          <div className="middle_one">
                            <h4 className="heading_hover_dev_column">
                              {item.headinghover}
                            </h4>
                            <span>{item.time}</span>
                            <p>{item.totalhour}</p>
                            <p>{item.about}</p>
                            <p className="subtitle">✅{item.para}</p>
                            <p className="subtitle">✅{item.predata}</p>
                            <p className="subtitle">✅{item.pre}</p>
                            <div className="addbtn">
                              <button className="addtocart_dev_column">
                                go to cart
                              </button>
                              <span className="love">
                                <i class="fa-regular fa-heart"></i>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr style={{ width: "100%" }} />
                  </>
                );
              })}
          </div>
        </div>
      </div>
        </>
    )
}
export default LifeStyle