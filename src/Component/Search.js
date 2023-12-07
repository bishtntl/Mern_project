import { useLocation } from "react-router-dom";
import "../Css/Search.css";

function SearchBar() {
  const results = useLocation();
  const getdata = results.state;
  console.log(getdata);
  return (
    <>
      {getdata.map((item, index) => {
        return (
          <div className="main">
            <div className="search_container">
              <div className="search_images_container">
                <img src={item.img} alt="Not Found" className="search_images" />
              </div>

              <div className="search_dtl">
                <h2 className="search_dtl_heading">{item.heading}</h2>
                <h5>{item.name}</h5>
                <h3>{item.headinghover}</h3>
                <p>{item.totalhour}</p>

                <p>{item.rating}</p>
                <p>{item.about}</p>
                <p>{item.id}</p>
              </div>
            </div>
            <hr className="search_hrline" />
          </div>
        );
      })}
    </>
  );
}
export default SearchBar;
