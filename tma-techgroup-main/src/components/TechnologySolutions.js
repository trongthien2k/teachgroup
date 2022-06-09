import React from 'react';
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import iconcommerce from "../assets/images/TechnologySolutions/icon-e-commerce.webp";
import iconFinance from "../assets/images/TechnologySolutions/icon-finance.webp";
import iconHealthCare from "../assets/images/TechnologySolutions/icon-health-care.webp";
import iconTelecom from "../assets/images/TechnologySolutions/icon-telecom.webp";
import iconRealEstate from "../assets/images/TechnologySolutions/icon-real-estate.webp";
import iconEducation from "../assets/images/TechnologySolutions/icon-education.webp";
import iconTransportation from "../assets/images/TechnologySolutions/icon-transportation.webp";
import iconAI from "../assets/images/TechnologySolutions/icon-AI.webp";
import "../assets/sass/technologySolutions.scss";

const TechnologySolutions = (props) => {
      const i18nextLng = localStorage.getItem('lang')  === null ? localStorage.getItem('i18nextLng') : localStorage.getItem('lang')
    const language = i18nextLng === "" ? props.lang : i18nextLng
  const { t } = useTranslation();
  const dataLeft = [
      {
        id : 1,
        icon : iconTelecom,
        text : t("telecom.network")
      },
      {
        id : 2,
        icon : iconcommerce,
        text : t("commerce.distribution")
      },
      {
        id : 3,
        icon : iconFinance,
        text : t("finance.insurance")
      },
      {
        id : 4,
        icon : iconHealthCare,
        text : t("health.care")
      }
  ]
  const dataRight = [
    {
      id : 1,
      icon : iconRealEstate,
      text : t("real.estate.construction")
    },
    {
      id : 2,
      icon : iconEducation,
      text : t("education.training")
    },
    {
      id : 3,
      icon : iconTransportation,
      text : t("mabufacturing.logistics.transportation")
    },
    {
      id : 4,
      icon : iconAI,
      text : t("automotive")
    }
]
  return (
    <div id="industry">
        <div className="TechnologySolutions-contain container">
            <div className="technology-title-contain">
                <div>{t("technology.solutions.in.a.variety.of.fields")}</div>
            </div>
            <div className="technology-conttent-contain">
                <div className="col-lg-6 col-sm-12 col-xs-12 technology-contain-box padding-left-0">
                    {dataLeft.map((item, index) => {
                        return (
                            <div className={item.id === 6 ? "" : "padding-bottom-30"} key={index}>
                              <div className="d-flex technology-box" >
                                    <div className="technology-box-icon">
                                        <Image src={item.icon} alt="image" width="56px" height="56px"/>
                                    </div>
                                    <div className={item.id === 2 && language === "vi" ? "technology-box-text technology-box-text-padding-34" : "technology-box-text technology-box-text-padding-48" }>{item.text}</div>
                              </div>
                            </div>
                        )
                    })} 
                </div>
                <div className="col-lg-6 col-sm-12 col-xs-12 technology-contain-box-right padding-right-0">
                    {dataRight.map((item, index) => {
                        return (
                            <div className={item.id === 6 ? "" : "padding-bottom-30"} key={index}>
                                <div className="d-flex technology-box" >
                                    <div className="technology-box-icon">
                                        <Image src={item.icon} alt="image" width="56px" height="56px"/>
                                    </div>
                                    <div className={item.id === 1 && language === "vi" ? "technology-box-text technology-box-text-padding-34-nav" : "technology-box-text technology-box-text-padding-48" }>{item.text}</div>
                            </div>
                            </div>
                        )
                    })} 
                </div>
            </div>
        </div>
    </div>
  );
};

export default TechnologySolutions;
