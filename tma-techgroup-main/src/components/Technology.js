import React, { useRef} from 'react';
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  data  from "../config/config.js";
// image
import iconAI from "../assets/images/Technology/icon-AI.webp";
import iconCar from "../assets/images/Technology/icon-car.webp";
import iconIOT from "../assets/images/Technology/icon-IOT.webp";
import iconData from "../assets/images/Technology/icon-data.webp";
import iconRobot from "../assets/images/Technology/icon-robot.webp";
import icon4G5G from "../assets/images/Technology/icon-4G-5G.webp"
import slider1 from "../assets/images/Technology/image-slider-technology-1.webp";
import slider2 from "../assets/images/Technology/image-slider-tech-2.webp";
import slider3 from "../assets/images/Technology/image-slider-tech-3.webp";
// import slider2 from "../assets/images/Technology/IMG_5854.webp";
// import slider3 from "../assets/images/Technology/IMG_5845.webp";
import Background from "../assets/images/Technology/background-slider.webp"
import iconSlider1 from "../assets/images/banner/icon-banner-slider.webp"
import iconSlider2 from "../assets/images/banner/icon-banner-slider-bettwen.webp"
import iconSlider3 from "../assets/images/banner/icon-banner-slider-end.webp"
import "../assets/sass/technology.scss";

const Technology = () => {
  const { t } = useTranslation();
  const ref = useRef({});

  const nextSlider = () => {
    ref.current.slickNext();
  };
  const previous = () => {
    ref.current.slickPrev();
  };
  const newDate = new Date().getFullYear();
  const Years = newDate - data.companyEstablishmentYear
  const dataItem = [
      {
        id : 1,
        icon : iconAI,
        text : "AI/ML"
      },
      {
        id : 2,
        icon : iconCar,
        text : "Automotive"
      },
      {
        id : 3,
        icon : iconIOT,
        text : "IoT"
      },
      {
        id : 4,
        icon : iconData,
        text : "Data Analytics"
      },
      {
        id : 5,
        icon : iconRobot,
        text : "Robotics"
      },
      {
        id : 6,
        icon : icon4G5G,
        text : "4G/5G"
      }
  ]
  const photos = [
    {
        id : 1,
        icon: iconSlider1,
        image : slider1,
    },
    {
        id : 2,
        icon: iconSlider2,
        image : slider2,
    },
    {
        id : 3,
        icon: iconSlider3,
        image : slider3,
    },
  ];
  const settings = {
    dots: false,
    className: 'sample',
    autoplay: true,
    speed: 400,
    arrows: false,
  };
  return (
    <div id="technology">
        <div className="technology-contain container">
            <div className="technology-title-contain">
                <div>{t("technology.title")}</div>
                <span>{Years} {t("technology.title.span")}</span>
            </div>
            <div className="d-flex technology-conttent-contain">
                <div className="col-lg-6 col-xs-12 technology-contain-box padding-left-0">
                 {dataItem.map((item, index) => {
                     return (
                       <div className={ item.id === 6 ? "" : " padding-bottom-12"} key={index}>
                            <div className= "d-flex technology-box">
                              <div className="technology-box-icon">
                                  <Image src={item.icon} alt="image" width="57px" height="55px"/>
                              </div>
                              <div className="technology-box-text">{item.text}</div>
                            </div>
                       </div>
                        
                     )
                 })} 
                </div>
                <div className="col-lg-6 col-xs-12 technology-slider">
                    <div className="technology-slider-background">
                        <Image src={Background} height="550px"/>
                    </div>
                    <Slider ref={ref} {...settings}>
                        {photos.map((item) => {
                            return (
                                <div key={item.id}>
                                    <img className="technology-slider-background-img" src={item.image} alt="image" height="388px" />
                                    <div className="icon-slider">
                                      <div className="icon-slider-nav"> 
                                        <Image src={item.icon} alt="image" height="7px" width="50px" />
                                      </div>
                                    </div>
                                </div>
                            )
                        })}
                    </Slider>
                    <div className='next-slider' onClick={nextSlider}>
                        <Image src={require("../assets/images/Technology/icon-next.webp")} alt="image" width="44px" height="44px" />
                    </div>
                    <div className='prev-slider' onClick={previous}>
                        <Image src={require("../assets/images/Technology/icon-prev.webp")} alt="image" width="44px" height="44px" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Technology;
