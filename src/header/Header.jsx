import React from "react";
import ViewHeadlineIcon from "@material-ui/icons/ViewHeadline";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import IconButton from "@material-ui/core/IconButton";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import "./Header.scss";
import { Link } from "react-router-dom";
import { useStateValue } from "../reducer/StateProvider";
import img from "./Flag_of_Nigeria_(3-2).svg";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <nav className="header">
      {/* 1- icon 2-amazon Icon 3-input 4-flag 5-sign in 6- basket */}
      <IconButton>
        <MenuIcon className="header__menue" />
      </IconButton>
      {/* <ViewHeadlineIcon className='' /> */}
      <Link to="/">
        {" "}
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          className="header__logo"
        />
      </Link>

      <div className="header__inputStuff">
        <span>
          {" "}
          All <ArrowDropDownIcon className="header__arrow" />{" "}
        </span>
        <input type="text" />

        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__flagDropDown">
        <img src={img} className="header__flag" />
        <ArrowDropDownIcon className="header__arrow" />
      </div>
      <div className="header__links">
        <span className="header__optionOne"> Hellow, jaloo </span>
        <span className="header__optionTwo">
          Account & Lists <ArrowDropDownIcon className="header__arrow" />{" "}
        </span>
      </div>
      <div className="header__links">
        <span className="header__optionOne"> Returns </span>
        <span className="header__optionTwo">& Orders </span>
      </div>
      <div className="header__links">
        <span className="header__optionOne"> Try</span>
        <span className="header__optionTwo">
          Prime <ArrowDropDownIcon className="header__arrow" />{" "}
        </span>
      </div>
      <Link to="/checkout">
        <div className="header__cart">
          <ShoppingCartIcon />
          <span>{basket.length} </span>
        </div>
      </Link>
    </nav>
  );
}

export default Header;

{
  /* <img className='home__img' src={'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'}  /> */
}
