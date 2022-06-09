import React, {useEffect} from "react";
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import  data  from "../config/config"
// import background from "../assets/images/AboutUs/background-about.webp"
import "../assets/sass/aboutUs.scss"

const AboutUs = () => {
  const { t } = useTranslation();
  const newDate = new Date().getFullYear();
  const Years = newDate - data.companyEstablishmentYear
  return (
    <div>
      <div className="about-us-backgroundImage"></div>
          <div>
            <div className="d-flex menu about-us">
                  <div className="about-us-content col-lg-6 col-xs-12">
                    <div className="about-us-title">{t('Overview')}</div>
                    <div className="about-us-span">
                      <div>{t('about.us.content1')}</div>
                      <div className="padding-top-12">{t('about.us.content2')}</div>
                      <div className="padding-top-12">{t('about.us.content3')}</div>
                    </div>
                    <div className="about-us-box d-flex">
                      <div className="col-6 col-box-left">
                        <div className="d-flex box-content">
                          <div><img className="box-content-img" src={require("../assets/images/AboutUs/icon-develope.webp")} alt="image" /></div>
                          <div className="box-content-text"><b>{Years}</b> {t("years")}</div>
                        </div>
                        <div className="d-flex box-content">
                          <div><img className="box-content-img" src={require("../assets/images/AboutUs/icon-countries.webp")} alt="image" /></div>
                          <div className="box-content-text">{t("clients.from")} <b>{data.customerCountries} {t("countries")}</b></div>
                        </div>
                      </div>
                      <div className="col-6 col-box-right">
                        <div className="d-flex box-content">
                          <div><img className="box-content-img" src={require("../assets/images/AboutUs/icon-software-engineers.webp")} alt="image" /></div>
                          <div className="box-content-text"><b>{data.engineer}</b> {t("software.engineers")}</div>
                        </div>
                        <div className="d-flex box-content">
                          <div><img className="box-content-img" src={require("../assets/images/AboutUs/icon-offices.webp")} alt="image" /></div>
                          <div className="box-content-text">{t("offices.in")} <b>{data.officeCountries} {t("countries")}</b></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xs-12">
                    <div className="about-us-img">
                      <div className="about-us-backroud-frame"><img src={require("../assets/images/AboutUs/backgroud-frame.webp")} alt="image" /></div>
                      <div className="d-flex">
                          <div className="image-about-us-lab6">
                              <Image className="image-about-us-lab6-nav" src={require("../assets/images/AboutUs/image-about-us-lab6.webp")} alt="image"/>
                          </div>
                          <div className="image-about-us-lab8">
                              <Image className="image-about-us-lab8-nav" src={require("../assets/images/AboutUs/image-about-us-lab8.webp")} alt="image"/>
                          </div>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
        <div>
      </div>
    </div>
  );
};

export default AboutUs;
