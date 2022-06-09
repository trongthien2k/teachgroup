import React from 'react'
import { useTranslation } from "react-i18next";
import "../../assets/sass/solutionsOne.scss"

function SolutionsOne() {
    const language = localStorage.getItem('lang')  === null ? localStorage.getItem('i18nextLng') : localStorage.getItem('lang')
    const { t } = useTranslation();
    return (
        <div className="solutions-one">
            <div className="solutions-backgroud">
                <div className="solutions-contain container">
                    <div className='solutions-title'>
                        {t('Wide.range.of.technology.solutions')}
                    </div>
                    <div className="d-flex solutions-content">
                        <div className="col-xl-6 solutions-content-col col-left">
                            <div className="box-text">
                                <div className="d-flex box-text-title">
                                    <div><img className='box-icon' src={require("../../assets/images/Solutions/icon-telecommunication.webp")} alt="image" /></div>
                                    <div className="box-title-telecom">{t("Telecom.Network")}</div>
                                </div>
                                <div className="d-flex box-text-content">
                                    <div className="col-xl-6 box-text-content-col">
                                        <ul className={language === "en" || language === "EN" ? "" : "unactive"}>
                                            <li>4G LTE, 5G, LoRa, LIDAR,SLAM</li>
                                            <li>VoIP, Carrier VoIP, Mobile VoIP</li>
                                            <li>NFV, SDN, WebRTC</li>
                                        </ul>
                                        <ul className={language === "vi" || language === "VI" ? "" : "unactive"}>
                                            <li>Mạng 4G/5G</li>
                                            <li>IoT</li>
                                            <li>VoIP</li>
                                            <li>WebRTC</li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-6 box-text-content-col">
                                        <ul>
                                            <li>{t('Unified.communication')}</li>
                                            <li>{t('Wireless.and.edge.router')}</li>
                                            <li>{t('Network.and.access.management')}</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex box-image">
                                <div className="col-xl-6 box-image-col-1">
                                    <img className='box-image-1' src={require("../../assets/images/Solutions/image1-solutions.webp")} alt="image" />
                                </div>
                                <div className="col-xl-6 box-image-col-2">
                                    <img className='box-image-2' src={require("../../assets/images/Solutions/image2-solutions.webp")} alt="image" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 solutions-content-col col-right">
                            <div className="d-flex box-image-right">
                                <div className="box-image-col-3">
                                    <img className='box-image-1' src={require("../../assets/images/Solutions/image3-solutions.webp")} alt="image" />
                                </div>
                            </div>
                            <div className="box-text">
                                <div className="d-flex box-text-title">
                                    <div><img className='box-icon' src={require("../../assets/images/Solutions/icon-e-commerce-distribution.webp")} alt="image" /></div>
                                    <div className="box-title-commerce-right">{t('E-Commerce.&.Distribution')}</div>
                                </div>
                                <div className="d-flex box-text-content">
                                    <div className="col-xl-6 box-text-content-col">
                                        <ul className={language === "en" || language === "EN" ? "" : "unactive"}>
                                            <li>Customer analytics</li>
                                            <li>Distribution management</li>
                                            <li>Sale forecasting</li>
                                        </ul>
                                        <ul className={language === "vi" || language === "VI" ? "" : "unactive"}>
                                            <li>Tư vấn, thiết kế, và xây dựng kỹ thuật hệ thống trọn gói về thương mại điện tử</li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-6 box-text-content-col">
                                        <ul className={language === "en" || language === "EN" ? "" : "unactive"}>
                                            <li>Online and mobile store</li>
                                            <li>Retail back-office</li>
                                        </ul>
                                        <ul className={language === "vi" || language === "VI" ? "" : "unactive"}>
                                            <li>Phân tích hành vi khách hàng</li>
                                            <li>Dự báo doanh số</li>
                                            <li>Phần mềm phân phối</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SolutionsOne
