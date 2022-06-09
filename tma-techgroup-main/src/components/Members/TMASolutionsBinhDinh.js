import React from 'react'
import { Image } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "../../assets/sass/TMASolutionsBinhDinh.scss"

function TMASolutionsBinhDinh() {
    const language = localStorage.getItem('lang')  === null ? localStorage.getItem('i18nextLng') : localStorage.getItem('lang')
    const { t } = useTranslation();
    return (
        <div className="d-flex TMA-solutions-Binh-Dinh">
            <div className="experienced-in-large-content col-lg-7 col-xs-12">
                <div className="members-two-title">
                    <div>{t('TMA.Solutions.Binh.Đinh')}</div>
                </div>
                <div className="about-us-span">
                    <div>{t('15.ha.technology.center')}</div>
                </div>
                <div className="members-two-box d-flex">
                    <div className="col-box-left">
                    <Image className="image-tma-BD" src={require("../../assets/images/Members/image-TMA-solutions-BinhDinh.webp")} alt="image"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-5 col-xs-12 experienced-in-large-right">
                <div className="members-us-img">
                    <div className="about-us-backroud-frame"><img src={require("../../assets/images/AboutUs/backgroud-frame.webp")} alt="image" /></div>
                    <div className="d-flex">
                        <div className="box-right">
                            <div className="box-content">
                                <div className="box">
                                    {t('Software.Center')}
                                </div>
                            </div>
                            <div className="box-content">
                                <div className="box">
                                    {t('Data.Science.Lab')}
                                </div>
                            </div>
                            <div className="box-content">
                                <div className="box">
                                    {t('R.D.Center')}
                                </div>
                            </div>
                            <div className="box-content">
                                <div className="box">
                                    {t('Tech.Academy')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TMASolutionsBinhDinh
