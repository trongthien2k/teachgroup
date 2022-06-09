import React from 'react'
import { useTranslation } from "react-i18next";
import "../../assets/sass/solutionsThree.scss"

function SolutionsThree() {
    const language = localStorage.getItem('lang')  === null ? localStorage.getItem('i18nextLng') : localStorage.getItem('lang')
    const { t } = useTranslation();
    return (
        <div className="solutions-three">
            <div className="solutions-backgroud">
                <div className="solutions-contain container">
                    <div className='solutions-title'>
                        {t('Wide.range.of.technology.solutions')}
                    </div>
                    <div className="d-flex solutions-content">
                        <div className="col-xl-6 solutions-content-col col-left">
                            <div className="box-text">
                                <div className="d-flex box-text-title">
                                    <div><img className='box-icon' src={require("../../assets/images/Solutions/icon-automotive.webp")} alt="image" /></div>
                                    <div className="box-title-telecom">{t("automotive")}</div>
                                </div>
                                <div className="d-flex box-text-content">
                                    <div className="box-text-content-col">
                                        <ul className={language === "en" || language === "EN" ? "" : "unactive"}>
                                            <li>Model-based Development</li>
                                            <li>Navigation</li>
                                        </ul>
                                        <ul className={language === "vi" || language === "VI" ? "" : "unactive"}>
                                            <li>Phần mềm xe hơi</li>
                                            <li>Phần mềm robot</li>
                                            <li>Các hệ thống điều khiển</li>
                                        </ul>
                                    </div>
                                    <div className="box-text-content-col box-text-content-col-right">
                                        <ul className={language === "en" || language === "EN" ? "" : "unactive"}>
                                            <li>Infotainment</li>
                                            <li>Car Controller System</li>
                                        </ul>
                                        <ul className={language === "vi" || language === "VI" ? "" : "unactive"}>
                                            <li>LiDAR/SLAM</li>
                                            <li>Wireless</li>
                                            <li>Infotainment/HMI</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="box-text-bottom">
                                <div className="box-text">
                                    <div className="d-flex box-text-title">
                                        <div><img className='box-icon' src={require("../../assets/images/Solutions/icon-agriculture.webp")} alt="image" /></div>
                                        <div className="box-title-telecom">{t("Agriculture")}</div>
                                    </div>
                                    <div className="d-flex box-text-content">
                                        <div className="box-text-content-col">
                                            <ul className={language === "en" || language === "EN" ? "" : "unactive"}>
                                                <li>Dairy analytics</li>
                                                <li>Smart farm</li>
                                            </ul>
                                            <ul className={language === "vi" || language === "VI" ? "" : "unactive"}>
                                                <li>Smart building</li>
                                                <li>Smart camera</li>
                                                <li>Quản lý ra vào</li>
                                            </ul>
                                        </div>
                                        <div className="box-text-content-col box-text-content-col-right">
                                            <ul className={language === "en" || language === "EN" ? "" : "unactive"}>
                                                <li>Food integrity & traceability</li>
                                                <li>Compliance (VietGAP, GlobalGAP)</li>
                                            </ul>
                                            <ul className={language === "vi" || language === "VI" ? "" : "unactive"}>
                                                <li>Giao dịch bất động sản</li>
                                                <li>Tài chính bất động sản</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 solutions-content-col col-right">
                            <div className="d-flex">
                                <div className="box-image-col-3">
                                    <img className='box-image-1' src={require("../../assets/images/Solutions/image8-solutions.webp")} alt="image" />
                                </div>
                            </div>
                            <div className="d-flex box-image-right">
                                <div className="col-xl-6 box-image-col-1">
                                    <img className='box-image-1' src={require("../../assets/images/Solutions/image7-solutions.webp")} alt="image" />
                                </div>
                                <div className="col-xl-6 box-image-col-2">
                                    <img className='box-image-2' src={require("../../assets/images/Solutions/image6-solutions.webp")} alt="image" />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SolutionsThree
