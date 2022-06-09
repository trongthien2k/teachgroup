import React from 'react'
import { useTranslation } from "react-i18next";
import "../../assets/sass/membersOne.scss";

function MembersOne() {
    const language = localStorage.getItem('lang')  === null ? localStorage.getItem('i18nextLng') : localStorage.getItem('lang')
    const { t } = useTranslation();
    return (
        <div className='members-one'>
            <div className="members-one-backgroud">
                <div className="d-flex members-one-contain">
                    <div className="col-xl-6 content-left-col">
                    <div className="content-left-backroud-frame"><img src={require("../../assets/images/Members/backgroud-frame-members-one.webp")} alt="image" /></div>
                    {
                        language === "en" || language === "EN" ? 
                        <div className="content-left">
                            <div className="content-left-title">
                                {t('TMA.Technology.Group.Members')}
                            </div>
                        </div>
                        : 
                        <div className="content-left-VN">
                            <div className="content-left-title-VN">
                                {t('TMA.Technology.Group.Members')}
                            </div>
                        </div>
                    }
                    </div>
                </div>
                <div className="content-box">
                    <div className='d-flex'>
                        <div className="box-content">
                            <div className="item-box">
                                <div className='item-box-logo'>
                                    <img src={require("../../assets/images/Members/logo-tma.webp")} alt="image" />
                                </div>
                                <div className="item-box-name">
                                    <span>TMA Solutions</span>
                                </div>
                                <div className="item-box-text">
                                    <div> {t('Reliable.Technology.&.Innovation.Partner.for.Companies.Worldwide')}</div>
                                </div>
                            </div>
                        </div>
                        <div className="box-content">
                            <div className="item-box">
                                <div className='item-box-logo-BD'>
                                    <img src={require("../../assets/images/Members/logo-tma-BD.webp")} alt="image" />
                                </div>
                                <div className="item-box-name">
                                    <span>TMA Solutions Binh Đinh</span>
                                </div>
                                <div className="item-box-text">
                                    <div>{t('Leading.technolgy.center.in.central.Vietnam')}</div>
                                </div>
                            </div>
                        </div>
                        <div className="box-content">
                            <div className="item-box">
                                <div className='item-box-logo'>
                                    <img src={require("../../assets/images/Members/logo-tma-inno.webp")} alt="image" />
                                </div>
                                <div className="item-box-name">
                                    <span>TMA Innovation</span>
                                </div>
                                <div className={language === "en" || language === "EN" ?  "item-box-text" : "item-box-text-VN-INNO"}>
                                    <div>{t('Innovative.tech.products.and.solutions.for.various.industries')}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MembersOne
