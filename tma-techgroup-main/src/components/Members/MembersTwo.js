import React, {useEffect} from "react";
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import  data  from "../../config/config"
// import background from "../assets/images/AboutUs/background-about.webp"
import "../../assets/sass/membersTwo.scss"

const MembersTwo = () => {
  const language = localStorage.getItem('lang')  === null ? localStorage.getItem('i18nextLng') : localStorage.getItem('lang')
  const { t } = useTranslation();
  const newDate = new Date().getFullYear();
  const Years = newDate - data.companyEstablishmentYear
  return (
    <div>
        <div>
            <div className="d-flex members-two">
                <div className="about-us-content col-lg-7 col-xs-12">
                    <div className="members-two-title">{t('TMA.Solutions')}</div>
                    <div className="about-us-span">
                        {
                            language === 'EN' || language === 'en' ? 
                            <div>{t('Reliable Technology & Innovation Partner for Companies Worldwide')}</div>
                            : ""
                        }
                    </div>
                    <div className="members-two-box d-flex">
                        <div className="col-6 col-box-left">
                            <div className="box-content">
                                <div className="box-content-text">{t('Telecom.5GAutomotive')}</div>
                                <div>2.000 {t('engineer')}</div>
                            </div>
                            <div className="box-content">
                                <div className="box-content-text">{t('Finance.Insurance')}</div>
                                <div>500 {t('engineer')}</div>
                            </div>
                            <div className="box-content">
                                <div className={language === 'EN' || language === 'en' ? "box-content-text e-commerce-retail" : "box-content-text e-commerce-retail-VN" }>{t('E-commerce.Retail.Distribution')}</div>
                                <div>400 {t('engineer')}</div>
                            </div>
                            <div className="box-content">
                                <div className="box-content-text">{t('health.Care')}</div>
                                <div>300 {t('engineer')}</div>
                            </div>
                        </div>
                        <div className="col-6 col-box-right">
                            <div className="box-content">
                                <div className="box-content-text">{t('Application.Development')}</div>
                                <div>2.200 {t('engineer')}</div>
                            </div>
                            <div className="box-content">
                                <div className="box-content-text">Data Analytics & AI/ML</div>
                                <div>400 {t('engineer')}</div>
                            </div>
                            <div className="box-content">
                                <div className="box-content-text">IoT & Robotics</div>
                                <div>300 {t('engineer')}</div>
                            </div>
                            <div className="box-content">
                                <div className="box-content-text">Cloud/ DevOps</div>
                                <div>200 {t('engineer')}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-xs-12">
                    <div className="members-us-img">
                        <div className="about-us-backroud-frame"><img src={require("../../assets/images/AboutUs/backgroud-frame.webp")} alt="image" /></div>
                        <div className="d-flex">
                            <div className="image-members-1-top">
                                <Image className="image-members-1" src={require("../../assets/images/Members/image-memberstwo-1.webp")} alt="image"/>
                            </div>
                            <div className="image-about-us-lab8">
                                <Image className="image-members-2" src={require("../../assets/images/Members/image-memberstwo-2.webp")} alt="image"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default MembersTwo;
