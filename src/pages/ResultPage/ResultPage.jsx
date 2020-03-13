import React from "react";
import ProfileImage from "../../assets/profile_pic.jpg";
import { Link } from "react-router-dom";
import { ReactComponent as SearchIcon } from "../../assets/search_2.svg";
import GoogleLogo from "../../assets/googlelogo_2.png";
import GoogleMic from "../../assets/googlemic.png";
import CountriesApi from "../../api/coutries.json";
import FooterComponent from "../../components/footer-component/footer-component";
import SearchInput from "../../components/search-container-component/search-container-component";
import "./ResultPage.css";

const ResultPage = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-white">
        <Link className="navbar-brand" to="/">
          <img
            src={GoogleLogo}
            alt="Google Logo"
            id="GoogleLogo"
            style={{
              height: "30px",
              width: "92px"
            }}
          />
        </Link>
        <form className="form-inline mr-auto pt-4">
          <div className="search-group">
            <SearchInput />
            <div className="search-icon-blue">
              <SearchIcon
                style={{
                  fill: "#4285f4",
                  height: "24px"
                }}
              />
            </div>
            <div className="mic-icon" style={{ right: "25px" }}>
              <img src={GoogleMic} alt="" />
            </div>
          </div>
        </form>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <span
                className="profile-avatar"
                style={{
                  backgroundImage: `url(${ProfileImage})`
                }}
              ></span>
            </a>
          </li>
        </ul>
      </nav>
      <hr />
      <div className="container">
        <p class="results-returned">About 151,000,000 results (0.46 seconds)</p>

        <ul>
          <li>
            <p>
              en.wikipedia.org › wiki › Nigeria &thinsp;
              <span className="down-arrow"></span>
            </p>
            <h3 className="result-link">
              <a href="#">Nigeria - Wikipedia</a>
            </h3>
            <p className="text-truncate text-truncate-ctm">
              Nigeria officially the Federal Republic of Nigeria, is a country{" "}
              <br />
              in West Africa, bordering Niger in the north, Chad in the
              northeast,
              <br /> Cameroon in the east, and ...
            </p>
          </li>
          <li>
            <p>
              en.wikipedia.org › wiki › Nigeria &thinsp;
              <span className="down-arrow"></span>
            </p>
            <h3 className="result-link">
              <a href="#">Nigeria - Wikipedia</a>
            </h3>
            <p className="text-truncate text-truncate-ctm">
              Nigeria officially the Federal Republic of Nigeria, is a country{" "}
              <br />
              in West Africa, bordering Niger in the north, Chad in the
              northeast,
              <br /> Cameroon in the east, and ...
            </p>
          </li>
          <li>
            <p>
              en.wikipedia.org › wiki › Nigeria &thinsp;
              <span className="down-arrow"></span>
            </p>
            <h3 className="result-link">
              <a href="#">Nigeria - Wikipedia</a>
            </h3>
            <p className="text-truncate text-truncate-ctm">
              Nigeria officially the Federal Republic of Nigeria, is a country{" "}
              <br />
              in West Africa, bordering Niger in the north, Chad in the
              northeast,
              <br /> Cameroon in the east, and ...
            </p>
          </li>
          <li>
            <p>
              en.wikipedia.org › wiki › Nigeria &thinsp;
              <span className="down-arrow"></span>
            </p>
            <h3 className="result-link">
              <a href="#">Nigeria - Wikipedia</a>
            </h3>
            <p className="text-truncate text-truncate-ctm">
              Nigeria officially the Federal Republic of Nigeria, is a country{" "}
              <br />
              in West Africa, bordering Niger in the north, Chad in the
              northeast,
              <br /> Cameroon in the east, and ...
            </p>
          </li>
        </ul>
      </div>
      <br />
      <br />
      <FooterComponent />
    </React.Fragment>
  );
};

export default ResultPage;
