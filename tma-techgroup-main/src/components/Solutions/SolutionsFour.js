import React from 'react'
import { useTranslation } from "react-i18next";
import "../../assets/sass/solutionsFour.scss"

function SolutionsFour() {
    const language = localStorage.getItem('lang')  === null ? localStorage.getItem('i18nextLng') : localStorage.getItem('lang')
    const { t } = useTranslation();
    return (
        <div className="solutions-four">
            <div className="solutions-backgroud">
                <div className="solutions-contain container">
                    <div className='solutions-title'>
                        {t('Wide.range.of.technology.solutions')}
                    </div>
                    <div className="d-flex solutions-content">
                        <div className="col-xl-6 solutions-content-col col-left">
                            <div className="d-flex box-image">
                                <div className="box-image-col-1">
                                    {
                                        language === "en" || language === "EN" ?
                                        <img className='box-image-1' src={require("../../assets/images/Solutions/image9-solutions.webp")} alt="image" />
                                        : <img className='box-image-1' src={require("../../assets/images/Solutions/image3-solutions.webp")} alt="image" />
                                    }
                                </div>
                            </div>
                            <div className="box-text">
                                <div className="d-flex box-text-title">
                                    <div><img className='box-icon' src={require("../../assets/images/Solutions/icon-manufacturing.webp")} alt="image" /></div>
                                    <div className="box-title-telecom">{t("Manufacturing.Logistics.Transportation")}</div>
                                </div>
                                <div className="d-flex box-text-content">
                                    <div className="col-xl-6 box-text-content-col">
                                        <ul className={language === "en" || language === "EN" ? "" : "unactive"}>
                                            <li>Logistics management</li>
                                            <li>Fleet and vehicle management</li>
                                            <li>AVG robot</li>
                                        </ul>
                                        <ul className={language === "vi" || language === "VI" ? "box-text-logistics-VN" : "unactive"}>
                                            <li>Quản lý logistics</li>
                                            <li>Quản lý đội xe và phương tiện vận chuyển</li>
                                            <li>Giải pháp tự động hóa</li>
                                            <li>Robot tự hành AGV</li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-6 box-text-content-col">
                                        <ul className={language === "en" || language === "EN" ? "" : "unactive"}>
                                            <li>Product counting</li>
                                            <li>Field force automation</li>
                                            <li>Machine optimization</li>
                                        </ul>
                                        <ul className={language === "vi" || language === "VI" ? "box-text-logistics-rightVN" : "unactive"}>
                                            <li>Tối ưu hoạt động của máy móc</li>
                                            <li>Giải pháp đếm sản phẩm, hàng hóa tự động</li>
                                            <li>Theo dõi container</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 solutions-content-col col-right">
                            <div className="box-text">
                                <div className="d-flex box-text-title">
                                    <div><img className='box-icon' src={require("../../assets/images/Solutions/icon-education.webp")} alt="image" /></div>
                                    <div className="box-title-commerce-right">{t('Education.Training')}</div>
                                </div>
                                <div className="d-flex box-text-content">
                                    <div className="col-xl-6 box-text-content-col">
                                        <ul className={language === "en" || language === "EN" ? "" : "unactive"}>
                                            <li>Smart learning</li>
                                            <li>e-TextBook, e-Library, e-Book</li>
                                            <li>Personalized learning content</li>
                                        </ul>
                                        <ul className={language === "vi" || language === "VI" ? "" : "unactive"}>
                                            <li>Sách giáo khoa điện tử, Thư viện điện tử, Sách điện tử</li>
                                            <li>Đào tạo trong doanh nghiệp</li>
                                            <li>Phân tích hành vi học trực tuyến</li>
                                        </ul>
                                    </div>
                                    <div className="col-xl-6 box-text-content-col">
                                        <ul className={language === "en" || language === "EN" ? "" : "unactive"}>
                                            <li>Learning management</li>
                                            <li>Corporate training</li>
                                        </ul>
                                        <ul className={language === "vi" || language === "VI" ? "" : "unactive"}>
                                            <li>Phân tích học sinh</li>
                                            <li>Cá nhân hóa nội dung học</li>
                                            <li>Quản lý trường học</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex box-image-right">
                                <div className="box-image-col-3">
                                    {
                                        language === "en" || language === "EN" ?
                                        <img className='box-image-1' src={require("../../assets/images/Solutions/image10-solutions.webp")} alt="image" />
                                        : <img className='box-image-1' src={require("../../assets/images/Solutions/image9-solutions.webp")} alt="image" />
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SolutionsFour
