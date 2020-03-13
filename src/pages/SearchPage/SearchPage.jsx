import React, { useState } from "react";
import "./SearchPage.css";
import ProfileImage from "../../assets/profile_pic.jpg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";
import GoogleLogo from "../../assets/googlelogo.png";
import GoogleMic from "../../assets/googlemic.png";
import CountriesApi from "../../api/coutries.json";
import FooterComponent from "../../components/footer-component/footer-component";
import SearchInput from "../../components/search-container-component/search-container-component";

const SearchPage = props => {
  console.log(CountriesApi);
  const [countriesData, setCountriesData] = useState(CountriesApi.countries);
  const handleSubmit = e => {
    e.preventDefault();
    console.log("Hi");
    props.history.push("/result");
  };
  return (
    <React.Fragment>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link" href="#">
            Gmail
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Images
          </a>
        </li>
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
      <form className="search-container">
        <form style={{ textAlign: "center" }}>
          <img src={GoogleLogo} alt="Google Logo" id="GoogleLogo" />
          <form onSubmit={handleSubmit}>
            <div className="search-group">
              <div className="search-icon">
                <SearchIcon />
              </div>
              <SearchInput />
              <div className="mic-icon">
                <img src={GoogleMic} alt="" />
              </div>
            </div>
          </form>
          <div style={{ paddingTop: "18px" }}>
            <button className="custom-search-btn">Google Search</button>
            <button className="custom-search-btn">I'm Feeling Lucky</button>
          </div>
          <div className="lang-container">
            <p>
              Google Offered in: &nbsp;&nbsp;
              <a href="#">Hausa </a> &nbsp;&nbsp;
              <a href="#">Igbo </a> &nbsp;&nbsp;
              <a href="#">Ede Yoruba </a> &nbsp;&nbsp;
              <a href="#">Nigerian Pigin </a>
            </p>
          </div>
        </form>
      </form>
      <FooterComponent />
    </React.Fragment>
  );
};

export default SearchPage;
