import "../Css/Tech.css";
function TechOn() {
  return (
    <>
      <div className="tech_container">
        <img
          className="tech_top_img"
          src="https://s.udemycdn.com/teaching/billboard-desktop-v4.jpg" alt="Not Found"
        />
        <div className="tech_second_div">
          <h1>Come teach with us</h1>
          <p>Become an instructor and change lives — including your own</p>
          <button className="startbtn">Get Start</button>
        </div>
      </div>
      <div className="middle_container">
        <div className="many_div_heading">
          <h1>So many reasons to start</h1>
        </div>
        <div className="tech_multi_img_container">
          <div className="data">
            <img src="https://s.udemycdn.com/teaching/value-prop-teach-v3.jpg" alt="Not Found"/>
            <h2>Teach your way</h2>
            <p className="title_sub">
              Publish the course you want, in the way you want, and always have
              control of your own content.
            </p>
          </div>
          <div className="data">
            <img src="https://s.udemycdn.com/teaching/value-prop-inspire-v3.jpg" alt="Not Found"/>
            <h2>Inspire learners</h2>
            <p className="title_sub">
              Teach what you know and help learners explore their interests,
              gain new skills, and advance their careers.
            </p>
          </div>
          <div className="data">
            <img src="https://s.udemycdn.com/teaching/value-prop-get-rewarded-v3.jpg" alt="Not Found"/>
            <h2>Get rewarded</h2>
            <p className="title_sub">
              Expand your professional network, build your expertise, and earn
              money on each paid enrollment.
            </p>
          </div>
        </div>
      </div>
      <div className="blue_container">
        <div>
          <h1>62M</h1>
          <p>Students</p>
        </div>
        <div>
          <h1>75+</h1>
          <p>Languages</p>
        </div>
        <div>
          <h1>830M</h1>
          <p>Enrollments</p>
        </div>
        <div>
          <h1>180+</h1>
          <p>Countries</p>
        </div>
        <div>
          <h1>15,000+</h1>
          <p>Enterprise customers</p>
        </div>
      </div>
      <div>
        <div className="how_to_begin">
          {" "}
          <h1>How to begin</h1>
        </div>
        <div className="head_route">
          <h2>
            Plan your curriculum
            <hr className="hrline_tech" />
          </h2>

          <h2>Record your video</h2>
          <h2>Launch your cources</h2>
        </div>
        <div className="lat_upper_div">
          <div className="lat_upper_div_under_first">
            <p>
              You start with your passion and knowledge. Then choose a promising
              topic with the help of our Marketplace Insights tool.The way that
              you teach — what you bring to it — is up to you.
            </p>
            <h4>How we help you</h4>
            <p>
              We offer plenty of resources on how to create your first course.
              And, our instructor dashboard and curriculum pages help keep you
              organized.{" "}
            </p>
          </div>
          <div>
            <img src="https://s.udemycdn.com/teaching/plan-your-curriculum-v3.jpg" alt="Not Found"/>
          </div>
        </div>
      </div>
      <div className="last_one_tech">
        <div>
          <img src="https://s.udemycdn.com/teaching/instructors/en/frank-1x-v2.jpg" alt="Not Found"/>
        </div>
        <div className="last_one_tech_dtl">
          <p>
            “I’m proud to wake up knowing my work is helping people around the
            world improve their careers and build great things. While being a
            full-time instructor is hard work, it lets you work when, where, and
            how you want.”
          </p>
          <h5>Frank Kane</h5>
          <p>Data Science & IT Certifications</p>
        </div>
      </div>
      <div className="last_tech">
        <div>
          <img src="https://s.udemycdn.com/teaching/support-1-v3.jpg" alt="Not Found" />
        </div>
        <div className="last_tech_details">
          <h1>You won’t have to do it alone</h1>
          <p className="dtl_dtl"> 
            Our Instructor Support Team is here to answer your questions and
            review your test video, while our Teaching Center gives you plenty
            of resources to help you through the process. Plus, get the support
            of experienced instructors in our online community.
          </p>
          <p className="need_data">Need more details before you start ? Learn more</p>
        </div>
        <div>
          <img src="https://s.udemycdn.com/teaching/support-2-v3.jpg" alt="Not Found"/>
        </div>
      </div>
    </>
  );
}
export default TechOn;
