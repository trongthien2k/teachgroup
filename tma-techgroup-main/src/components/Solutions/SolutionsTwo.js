import React from 'react'
import { useTranslation } from "react-i18next";
import "../../assets/sass/solutionsTwo.scss"

function SolutionsTwo() {
    const { t } = useTranslation();
    const language = localStorage.getItem('lang')  === null ? localStorage.getItem('i18nextLng') : localStorage.getItem('lang')
    return (
        <div className="solutions-two">
            <div className="solutions-backgroud">
                <div className="solutions-contain container">
                    <div className='solutions-title'>
                        {t('Wide.range.of.technology.solutions')}
                    </div>
                    <div className='d-flex solutions-content'>
                        <div className="d-flex col-xl-6 solutions-content-col">
                           <div className="col-xl-6 finance-insurance-col">
                               <div className="finance-insurance">
                                    <div className="d-flex finance-insurance-title">
                                        <div><img className='box-icon' src={require("../../assets/images/Solutions/icon-finance.webp")} alt="image" /></div>
                                        <div className="box-title-finance">{t("Finance & Insurance")}</div>
                                    </div>
                                    <div className="finance-insurance-text">
                                        <ul>
                                            <li>{t('Wealth.management')}</li>
                                            <li>{t('Fund.management')}</li>
                                            <li>{t('Cash.flow.management')}</li>
                                            <li>{t('Asset.management')}</li>
                                            <li>{t('Mobile.payment')}</li>
                                            <li>{t('Insurance.quotation.tool')}</li>
                                            <li>{t('Capital.market')}</li>
                                            <li>{t('Investment.administration')}</li>
                                            <li>{t('Digital.wallet')}</li>
                                            <li>{t('Insurance.sale.support')}</li>
                                        </ul>
                                    </div>
                               </div>
                           </div>
                           <div className="col-xl-6 healthcare-col">
                               <div className="healthcare">
                                    <div className="d-flex finance-insurance-title">
                                        <div><img className='box-icon' src={require("../../assets/images/Solutions/icon-health.webp")} alt="image" /></div>
                                        <div className="box-title-finance">{t("Healthcare")}</div>
                                    </div>
                                    <div className="finance-insurance-text">
                                        <ul className={language === "en" || language === "EN" ? "" : "unactive"}>
                                            <li>Aged care. Homecare</li>
                                            <li>Pharmacy automation</li>
                                            <li>Clinical research tools</li>
                                            <li>Hospital data analytics</li>
                                            <li>Fitness solutions</li>
                                            <li>Human GNOME sequencing</li>
                                            <li>Healthcare information system</li>
                                            <li>Environmental health & safety</li>
                                        </ul>
                                        <ul className={language === "vi" || language === "VI" ? "" : "unactive"}>
                                            <li>Theo dõi sức khỏe người lớn tuổi tại nhà</li>
                                            <li>Theo dõi sức khỏe F0 từ xa</li>
                                            <li>Phân tích dữ liệu bệnh nhân</li>
                                            <li>Phân tích dữ liệu bệnh viện</li>
                                            <li>Hệ thống thông tin y tế</li>
                                            <li>Phần mềm quản lý nhà thuốc</li>
                                            <li>Công cụ hỗ trợ nghiên cứu lâm sàng</li>
                                            <li>Phần mềm phòng chống sốt rét</li>
                                            <li>Giải pháp phòng gym</li>
                                            <li>Phân tích gen</li>
                                        </ul>
                                    </div>
                               </div>
                           </div>
                        </div>
                        <div className="col-xl-6 solutions-image-col">
                            <div className="solutions-image-5"><img className="image-5" src={require("../../assets/images/Solutions/image5-solutions.webp")} alt="image" /></div>
                            <div className="solutions-image-4"><img className="image-4" src={require("../../assets/images/Solutions/image4-solutions.webp")} alt="image" /></div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default SolutionsTwo
