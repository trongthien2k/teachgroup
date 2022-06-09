import React from "react";
import { Image, Col } from "react-bootstrap";
import "../assets/sass/Banner.scss"
// import background from "../assets/images/banner/backgound-banner.webp"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import  data  from "../config/config.js";

const Banner = () => {
  const { t } = useTranslation();
  return (
    <div className="contain-banner">
        <div className="contain-banner-backgound"> 
            <div className="container">
                <div className="banner-logo-tma">
                    <Image src={require("../assets/images/banner/logo-tma-25years.webp")} alt="image" width="106px" height="72px"/>
                </div>
                <div className="banner-title">
                  <p>TMA<span> Technology Group</span></p>
                </div>
                <div className="banner-title-nav">
                  <span> {t('Your.Technology.Innovation.Partner')} </span>
                </div>
                <div className="banner-contain-logo-three">
                  <div className="banner-logo-three d-flex margin-left--5 margin-right-5">
                    <Col className="col-lg-2 banner-bg padding-right-0 padding-left-0">
                      <Image src={require("../assets/images/banner/banner-bg-left.webp")} alt="image" height="267px" width="100%"/>
                    </Col>
                    <Col className="col-lg-8 logo-tma-three padding-right-0 padding-left-0">
                      <div className="group-logo-banner d-flex justify-content-between">
                        <Image className="logo-banner-1 logo-tma-three-nav " src={require("../assets/images/banner/TMA-favicon.webp")} alt="image" width="194px"/>
                        <div className="group-logo-banner-bot">
                          <Image className="col-xs-6 logo-tma-three-nav" src={require("../assets/images/banner/tma-binhdinh.webp")} alt="image" height="110px"/>
                          <Image className="col-xs-6 logo-tma-three-nav" src={require("../assets/images/banner/tma-innovation.webp")} alt="image" width="202px"/>
                        </div>
                      </div>
                    </Col>
                    <Col className="col-lg-2 banner-bg banner-bg-right padding-right-0 padding-left-0">
                      <Image src={require("../assets/images/banner/banner-bg-right.webp")} alt="image" height="267px" width="100%" />
                    </Col>
                  </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Banner;
