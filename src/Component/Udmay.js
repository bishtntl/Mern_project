import { useEffect, useState } from "react";
import "../Css/Udmey.css";

function Udemy() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchapi() {
      const ffdata = await fetch(
        "https://mern-backend-o0hb.onrender.com/api/getdata"
      );
      const res = await ffdata.json();
      setData(res);
      // console.log(typeof res[0].id);
    }
    fetchapi();
  });

  return (
    <>
      <div>
        {data
          .filter((item) => item.category === "topimage")
          .map((item, index) => {
            return (
              <>
                <div key={index} className="top_image_div">
                  <img src={item.img} alt="Not Found" className="top_image" />
                  <div className="middle_div">
                    <p className="cyber">
                      Cyber Monday? Meet tomorrow’s skills
                    </p>
                    <p className="change">
                      Change your future with courses from just ₹389. Deal ends
                      tomorrow.
                    </p>
                  </div>
                </div>
              </>
            );
          })}
      </div>
      <div className="second_one">
        <span>
          Trusted by over 15,000 companies and millions of learners around the
          world
        </span>
        <div className="second_div">
          {data
            .filter((item) => item.category === "middleimage")
            .map((item, index) => {
              return (
                <>
                  <img
                    key={index}
                    src={item.img}
                    alt="Not Found"
                    className="middleimages"
                  />
                </>
              );
            })}
        </div>
      </div>

      <div className="Third_top">
        <h1>A broad selection pf courses</h1>
        <p className="choose">
          choose from over 210,000 online video courses with new addition
          published every month
        </p>
      </div>
      <div className="static_language">
        <span>Python</span>
        <span>Excel</span>
        <span>Web Development</span>
        <span>JavaScript</span>
        <span>Data Science</span>
        <span>Amazon AWS</span>
        <span>Drawing</span>
      </div>
      <div className="expand_career">
        <h1>Expand your career opportunities with Python</h1>
        <div className="under_para">
          <p>
            Take one of Udemy’s range of Python courses and learn how to code
            using this incredibly useful language. Its simple syntax and
            readability makes Python perfect for Flask, Django, data science,
            and machine learning. You’ll learn how to build everything from
            games to sites to apps. Choose from a range of courses that will
            appeal to ....
          </p>
        </div>
        <button className="explorebtn">Explore Python</button>
        <div className="flex_container">
          <div className="underflex">
            {data
              .filter((item) => item.id === 10)
              .map((item, index) => {
                return (
                  <div key={index} className="underflex_two">
                    <div className="image_flex_div">
                      <img
                        className="imageflexone"
                        src={item.img}
                        alt="Not Found"
                      />
                    </div>
                    <div className="details_div">
                      <b>{item.heading}</b>
                      <span>{item.name}</span>
                      <p>{item.rating}</p>
                      <span>
                        <span className="priceflex">₹{item.price}.00</span>{" "}
                        <span className="hideprice">₹{item.prevprice}.00</span>
                      </span>
                      <span>Best Saaller</span>
                    </div>

                    <div className="hover_container">
                      <div key={index} className="hover_details">
                        <h4 className="heading_hover">{item.headinghover}</h4>
                        <span>{item.time}</span>
                        <p>{item.totalhour}</p>
                        <p>{item.about}</p>
                        <p className="subtitle">✅{item.para}</p>
                        <p className="subtitle">✅{item.predata}</p>
                        <p className="subtitle">✅{item.pre}</p>
                        <div className="addbtn">
                          <button className="addtocart">go to cart</button>
                          <span className="love">
                            <i class="fa-regular fa-heart"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="underflex">
            {data
              .filter((item) => item.id === 11)
              .map((item, index) => {
                return (
                  <div key={index} className="underflex_two">
                    <div className="image_flex_div">
                      <img
                        className="imageflexone"
                        src={item.img}
                        alt="Not Found"
                      />
                    </div>
                    <div className="details_div">
                      <b>{item.heading}</b>
                      <span>{item.name}</span>
                      <p>{item.rating}</p>
                      <span>
                        <span className="priceflex">₹{item.price}.00</span>{" "}
                        <span className="hideprice">₹{item.prevprice}.00</span>
                      </span>
                      <span>Best Saaller</span>
                    </div>

                    <div className="hover_container">
                      <div key={index} className="hover_details">
                        <h4 className="heading_hover">{item.headinghover}</h4>
                        <span>{item.time}</span>
                        <p>{item.totalhour}</p>
                        <p>{item.about}</p>
                        <p className="subtitle">✅{item.para}</p>
                        <p className="subtitle">✅{item.predata}</p>
                        <p className="subtitle">✅{item.pre}</p>
                        <div className="addbtntwo">
                          <button className="addtocarttwo">go to cart</button>
                          <span className="love">
                            <i class="fa-regular fa-heart"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="underflex">
            {data
              .filter((item) => item.id === 12)
              .map((item, index) => {
                return (
                  <div key={index} className="underflex_two">
                    <div className="image_flex_div">
                      <img
                        className="imageflexone"
                        src={item.img}
                        alt="Not Found"
                      />
                    </div>
                    <div className="details_div">
                      <b>{item.heading}</b>
                      <span>{item.name}</span>
                      <p>{item.rating}</p>
                      <span>
                        <span className="priceflex">₹{item.price}.00</span>{" "}
                        <span className="hideprice">₹{item.prevprice}.00</span>
                      </span>
                      <span>Best Saaller</span>
                    </div>

                    <div className="hover_container_right_two">
                      <div key={index} className="hover_details">
                        <h4 className="heading_hover">{item.headinghover}</h4>
                        <span>{item.time}</span>
                        <p>{item.totalhour}</p>
                        <p>{item.about}</p>
                        <p className="subtitle">✅{item.para}</p>
                        <p className="subtitle">✅{item.predata}</p>
                        <p className="subtitle">✅{item.pre}</p>
                        <div className="addbtn_three">
                          <button className="addtocart_three">
                            go to cart
                          </button>
                          <span className="love">
                            <i class="fa-regular fa-heart"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="underflex">
            {data
              .filter((item) => item.id === 13)
              .map((item, index) => {
                return (
                  <div key={index} className="underflex_two">
                    <div className="image_flex_div">
                      <img
                        className="imageflexone"
                        src={item.img}
                        alt="Not Found"
                      />
                    </div>
                    <div className="details_div">
                      <b>{item.heading}</b>
                      <span>{item.name}</span>
                      <p>{item.rating}</p>
                      <span>
                        <span className="priceflex">₹{item.price}.00</span>{" "}
                        <span className="hideprice">₹{item.prevprice}.00</span>
                      </span>
                      <span>Best Saaller</span>
                    </div>

                    <div className="hover_container_right">
                      <div key={index} className="hover_details">
                        <h4 className="heading_hover">{item.headinghover}</h4>
                        <span>{item.time}</span>
                        <p>{item.totalhour}</p>
                        <p>{item.about}</p>
                        <p className="subtitle">✅{item.para}</p>
                        <p className="subtitle">✅{item.predata}</p>
                        <p className="subtitle">✅{item.pre}</p>
                        <div className="addbtn_four">
                          <button className="addtocart_four">go to cart</button>
                          <span className="love">
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
      <div className="ls_div">
        <div className="lastone_div">
          <h1 className="headinglastone_div">
            How learners like you are achieving their goals
          </h1>

          <div className="box">
            <div className="first_box">
              <div className="comma">
                <i class="fa-solid fa-quote-left"></i>
              </div>
              <p>
                I am proud to say that after a few months of taking this
                course...
                <b>
                  I passed my exam and am now an AWS Certified Cloud
                  Practitioner!
                </b>{" "}
                This content was exactly what the CCP exam covered.
              </p>
              <p className="circle">
                <b className="insidecircle">WA</b>
              </p>{" "}
              <div className="shortname">Will A</div>
              <hr className="hrline" />
              <div className="music">
                <div className="circle_music">
                  <span>
                    <i class="fa-solid fa-play"></i>
                  </span>
                </div>

                <span className="music_details">
                  Become a Product Manager | Learn the Skill & Get the Job
                </span>
              </div>
            </div>
            <div className="first_box">
              <div className="comma">
                <i class="fa-solid fa-quote-left"></i>
              </div>
              <p>
                This course helped me
                <b>
                  freshen up on my product manager skills and land a job at
                  Facebook!
                </b>
                Thanks guys :
              </p>
              <p className="circle">
                <b className="insidecircle">RF</b>
              </p>
              <div className="shortname">Ron F</div>
              <hr className="hrline" />
              <div className="music">
                <div className="circle_music">
                  <span>
                    <i class="fa-solid fa-play"></i>
                  </span>
                </div>

                <span className="music_details">
                  Become a Product Manager | Learn the Skill & Get the Job
                </span>
              </div>
            </div>
            <div className="first_box">
              <div className="comma">
                <i class="fa-solid fa-quote-left"></i>
              </div>
              <p>
                One of the best courses on management and leadership I have come
                across so far. The advice is practical, and examples highly
                relatable.<b>Would help anyone become a better manager.</b>
              </p>
              <p className="circle">
                <b className="insidecircle">PW</b>
              </p>{" "}
              <div className="shortname">Phillip W</div>
              <hr className="hrline" />
              <div className="music">
                <div className="circle_music_last">
                  <span>
                    <i class="fa-solid fa-play"></i>
                  </span>
                </div>

                <span className="music_details">
                  leadership :practical Leadership Skill
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="expand_career_two">
        <h1>Learners are viewing</h1>
        <div className="flex_container">
          <div className="underflex">
            {data
              .filter((item) => item.id === 14)
              .map((item, index) => {
                return (
                  <div key={index} className="underflex_two">
                    <div className="image_flex_div">
                      <img
                        className="imageflexone"
                        src={item.img}
                        alt="Not Found"
                      />
                    </div>
                    <div className="details_div">
                      <b>{item.heading}</b>
                      <span>{item.name}</span>
                      <p>{item.rating}</p>
                      <span>
                        <span className="priceflex">₹{item.price}.00</span>{" "}
                        <span className="hideprice">₹{item.prevprice}.00</span>
                      </span>
                      <span>Best Saaller</span>
                    </div>

                    <div className="hover_container">
                      <div key={index} className="hover_details">
                        <h4 className="heading_hover">{item.headinghover}</h4>
                        <span>{item.time}</span>
                        <p>{item.totalhour}</p>
                        <p>{item.about}</p>
                        <p className="subtitle">✅{item.para}</p>
                        <p className="subtitle">✅{item.predata}</p>
                        <p className="subtitle">✅{item.pre}</p>
                        <div className="addbtn_five">
                          <button className="addtocartfive">go to cart</button>
                          <span className="love">
                            <i class="fa-regular fa-heart"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="underflex">
            {data
              .filter((item) => item.id === 15)
              .map((item, index) => {
                return (
                  <div key={index} className="underflex_two">
                    <div className="image_flex_div">
                      <img
                        className="imageflexone"
                        src={item.img}
                        alt="Not Found"
                      />
                    </div>
                    <div className="details_div">
                      <b>{item.heading}</b>
                      <span>{item.name}</span>
                      <p>{item.rating}</p>
                      <span>
                        <span className="priceflex">₹{item.price}.00</span>{" "}
                        <span className="hideprice">₹{item.prevprice}.00</span>
                      </span>
                      <span>Best Saaller</span>
                    </div>

                    <div className="hover_container">
                      <div key={index} className="hover_details">
                        <h4 className="heading_hover">{item.headinghover}</h4>
                        <span>{item.time}</span>
                        <p>{item.totalhour}</p>
                        <p>{item.about}</p>
                        <p className="subtitle">✅{item.para}</p>
                        <p className="subtitle">✅{item.predata}</p>
                        <p className="subtitle">✅{item.pre}</p>
                        <div className="addbtn_six">
                          <button className="addtocartsix">go to cart</button>
                          <span className="love_six">
                            <i class="fa-regular fa-heart"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="underflex">
            {data
              .filter((item) => item.id === 16)
              .map((item, index) => {
                return (
                  <div key={index} className="underflex_two">
                    <div className="image_flex_div">
                      <img
                        className="imageflexone"
                        src={item.img}
                        alt="Not Found"
                      />
                    </div>
                    <div className="details_div">
                      <b>{item.heading}</b>
                      <span>{item.name}</span>
                      <p>{item.rating}</p>
                      <span>
                        <span className="priceflex">₹{item.price}.00</span>{" "}
                        <span className="hideprice">₹{item.prevprice}.00</span>
                      </span>
                      <span>Best Saaller</span>
                    </div>

                    <div className="hover_container_right_two">
                      <div key={index} className="hover_details">
                        <h4 className="heading_hover">{item.headinghover}</h4>
                        <span>{item.time}</span>
                        <p>{item.totalhour}</p>
                        <p>{item.about}</p>
                        <p className="subtitle">✅{item.para}</p>
                        <p className="subtitle">✅{item.predata}</p>
                        <p className="subtitle">✅{item.pre}</p>
                        <div className="addbtn_seven">
                          <button className="addtocartseven">go to cart</button>
                          <span className="love">
                            <i class="fa-regular fa-heart"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="underflex">
            {data
              .filter((item) => item.id === 17)
              .map((item, index) => {
                return (
                  <div key={index} className="underflex_two">
                    <div className="image_flex_div">
                      <img
                        className="imageflexone"
                        src={item.img}
                        alt="Not Found"
                      />
                    </div>
                    <div className="details_div">
                      <b>{item.heading}</b>
                      <span>{item.name}</span>
                      <p>{item.rating}</p>
                      <span>
                        <span className="priceflex">₹{item.price}.00</span>{" "}
                        <span className="hideprice">₹{item.prevprice}.00</span>
                      </span>
                      <span>Best Saaller</span>
                    </div>

                    <div className="hover_container_right">
                      <div key={index} className="hover_details">
                        <h4 className="heading_hover">{item.headinghover}</h4>
                        <span>{item.time}</span>
                        <p>{item.totalhour}</p>
                        <p>{item.about}</p>
                        <p className="subtitle">✅{item.para}</p>
                        <p className="subtitle">✅{item.predata}</p>
                        <p className="subtitle">✅{item.pre}</p>
                        <div className="addbtn">
                          <button className="addtocart">go to cart</button>
                          <span className="love">
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

      <h1 className="heaingtopcategory">Top categories</h1>
      <div className="cartoon_image_container">
        {data
          .filter((item) => item.category === "topcategories")
          .map((item, index) => {
            return (
              <>
                <div className="cartoon_underdiv">
                  <div className="hovercartoon_div">
                    <img
                      className="cartoon_image"
                      src={item.img}
                      alt="Not Found"
                    />
                  </div>

                  <h4>{item.name}</h4>
                </div>
              </>
            );
          })}
      </div>

      <div className="tabledata">
        <table className="table">
          <tr>
            <th style={{ fontSize: "1.5em" }}>
              Development
            </th>
            <th style={{ fontSize: "1.5em" }}>Business</th>
            <th style={{ fontSize: "1.5em" }}>IT and Software</th>
            <th style={{ fontSize: "1.5em" }}>Design</th>
          </tr>
          <tr>
            <th className="language firstrow">Python</th>

            <th className="language">Financial Analysis</th>

            <th className="language">Amazon AWS</th>

            <th className="language">Photoshop</th>
          </tr>
          <tr>
            <td>36,354,994 learners</td>
            <td>1,195,282 learners</td>
            <td>6,123,456 learners</td>
            <td>10,909,736 learners</td>
          </tr>

          <tr>
            <th className="language">Web Development</th>
            <th className="language">SQL </th>
            <th className="language">Ethical Hacking</th>
            <th className="language">Graphic Design</th>
          </tr>
          <tr>
            <td> 11,415,615 learners</td>
            <td>5,977,561 learners </td>
            <td>10,931,066 learners</td>
            <td>3,381,052 learners</td>
          </tr>
          <tr>
            <th className="language"> Machine Learning</th>
            <th className="language">PMP </th>
            <th className="language">Cyber Security</th>
            <th className="language">Drawing</th>
          </tr>
          <tr>
            <td>7,070,015 learners</td>
            <td>1,733,398 learners</td>
            <td>3,998,037 learners</td>
            <td>2,410,849 learners</td>
          </tr>
          <button className="moretopicbtn">Explore more topic</button>
        </table>
      </div>

      <div className="firsttwo_photo">
        <div>
          <span className="udemy_head">Udemy</span>
          <span className="udemy_head_two">business</span>
          <h1 className="head_three">Upskill your team with Udemy Business</h1>
          <ul className="point">
            <li style={{ fontWeight: "bold" }}>
              Unlimited access to 25,000+ top Udemy courses, anytime, anywhere
            </li>
            <li style={{ fontWeight: "bold" }}>
              International course collection in 14 languages
            </li>
            <li style={{ fontWeight: "bold" }}>
              Top certifications in tech and business
            </li>
          </ul>
          <div className="bottons">
            <button className="btnone">Get Udemy Business</button>
            <button className="btnlearn">Learn More</button>
          </div>
        </div>
        <div>
          <img
            className="image_one"
            src="https://s.udemycdn.com/home/non-student-cta/UB_Promo_800x800.jpg"
            alt="Not Found"
          />
        </div>
      </div>

      <div className="container_all">
        <div className="containerlasttwo">
          <div className="containerlasttwo_details">
            <div>
              <i class="fa-solid fa-quote-left"></i>
            </div>
            <p>
              Thanks to Udemy Business, Booz Allen has armed our workforce,
              specifically its
              <b>
                data scientists, with highly relevant and in-demand tech skills
              </b>{" "}
              that are enabling consultants to stay ahead of big data trends and
              raise the bar on proficiency, skills, and competencies to meet
              client demand.
            </p>
          </div>
          <div className="containerlasttwo_image_container">
            <div>
              <img
                src="https://s.udemycdn.com/home/ub-case-studies/James_Hemgen.jpeg"
                className="containerlasttwo_image"
                alt="Not Found"
              />
              <span>Jim Hemgen</span>
            </div>
            <p>Principal</p>
            <div className="booz">Booz Allen Hamilton</div>
          </div>
        </div>
      </div>

      <div className="lastlast">
        <div className="latone_container">
          <div>
            <img
              src="https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg"
              alt="Not Found" className="last_last_img"
            />
          </div>
          <div className="lastone_details">
            <h1>Become an instructor</h1>
            <p className="para_dtl">
              Instructors from around the world teach millions of learners on
              Udemy. We provide the tools and skills to teach what you love.
            </p>
            <button className="todaybtn">Start teaching today</button>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
}
export default Udemy;
