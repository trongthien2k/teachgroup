import React, {useEffect} from "react";
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import  data  from "../config/config"
// import background from "../assets/images/AboutUs/background-about.webp"
import "../assets/sass/technologies.scss"

const Technologies = () => {
  const { t } = useTranslation();
  const newDate = new Date().getFullYear();
  const Years = newDate - data.companyEstablishmentYear
  return (
    <div>
        <div>
            <div className="d-flex menu technologies-page">
                <div className="about-us-content col-lg-6 col-xs-12">
                    <div className="technologies-title">{t('title.technologies.top')}</div>
                    <div className="technologies-title">{t('title.technologies.bottom')}</div>
                    <div className="technologies-box d-flex">
                      <div className="col-6 col-box-left">
                        <div className="d-flex box-content">
                          <div className="box-icon"><img className="box-icon-img" src={require("../assets/images/Technologies/icon-4g-5g.webp")} alt="image" /></div>
                          <div className="box-text">4G/5G</div>
                        </div>
                        <div className="d-flex box-content">
                          <div className="box-icon"><img className="box-icon-img" src={require("../assets/images/Technologies/icon-ai-ml.webp")} alt="image" /></div>
                          <div className="box-text">AI/ML</div>
                        </div>
                        <div className="d-flex box-content">
                          <div className="box-icon"><img className="box-icon-img" src={require("../assets/images/Technologies/icon-data-analytics.webp")} alt="image" /></div>
                          <div className="box-text">Data Analytics</div>
                        </div>
                      </div>
                      <div className="col-6 col-box-right box-right-mr">
                        <div className="d-flex box-content">
                          <div className="box-icon"><img className="box-icon-img" src={require("../assets/images/Technologies/icon-iot.webp")} alt="image" /></div>
                          <div className="box-text">IoT</div>
                        </div>
                        <div className="d-flex box-content">
                          <div className="box-icon"><img className="box-icon-img" src={require("../assets/images/Technologies/icon-automotive.webp")} alt="image" /></div>
                          <div className="box-text">Automotive</div>
                        </div>
                        <div className="d-flex box-content">
                          <div className="box-icon"><img className="box-icon-img" src={require("../assets/images/Technologies/icon-robot.webp")} alt="image" /></div>
                          <div className="box-text">Robotics</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-xs-12 technologies-backgroud-right">
                    <div className="technologies-img">
                      <div className="technologies-backroud-frame"><img src={require("../assets/images/AboutUs/backgroud-frame.webp")} alt="image" /></div>
                      <div className="technologies-image-backgroud">
                          <div className="technologies-backgroud-one">
                            <Image className="technologies-image-one" src={require("../assets/images/Technologies/image1.webp")} alt="image"/>
                          </div>
                          <div className="d-flex technologies-image-bottom">
                              <div>
                                <Image className="technologies-image-two" src={require("../assets/images/Technologies/image2.webp")} alt="image"/>
                              </div>
                              <div>
                                <Image className="technologies-image-three" src={require("../assets/images/Technologies/image3.webp")} alt="image"/>
                              </div>
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

export default Technologies;
