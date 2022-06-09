import React from "react";
import "../../assets/sass/historyTwo.scss"
import i18next from "i18next";
import { useTranslation } from "react-i18next";
    
const HistoryTwo = () => {
    const i18nextLng = localStorage.getItem('lang')  === null ? localStorage.getItem('i18nextLng') : localStorage.getItem('lang')
    const { t } = useTranslation();
  return (
    <div className="history-tow-page">
        <div className="history-page-backgroud">
            <div className="history-page-backgroud-img">
                <img className="history-img" src={require("../../assets/images/History/backgroud-frame-history.webp")} alt="image" />
            </div>
            <div className="history-page-content">
                <div className="history-page-title">{t('History')}</div>
                <div className="history-content">
                    
                    <div className="history-line">
                        <div className="history-line-year" >
                            <div className="box-1"><div className="history-box-year">2006 - 2010</div></div>
                            <div className="box-2"><div className="history-box-year">2001 - 2005</div></div>
                            <div className="box-3"><div className="history-box-year">1997 - 2000</div></div>
                        </div>
                        <div className="history-content-item">
                            <div className="history-circle circle-1" />
                            <div className="history-circle circle-2" />
                            <div className="history-circle circle-3" />
                            <div className="history-text">
                                <ul className="history-text-ul ul-1">
                                    <li>{t("history.15")}</li>
                                    <li>{t("history.16")}</li>
                                    <li>{t("history.17")}</li>
                                    <li>{t("history.18")}</li>
                                    <li>{t("history.19")}</li>
                                    <li>{t("history.20")}</li>
                                </ul>
                                <ul className={i18nextLng === "EN" || i18nextLng === "en" ? "history-text-ul ul-2" : "history-text-ul ul-2-VN"}>
                                    <li>{t("history.21")}</li>
                                    <li>{t("history.22")}</li>
                                    <li>{t("history.23")}</li>
                                    <li>{t("history.24")}</li>
                                    <li>{t("history.25")}</li>
                                </ul>
                                <ul className={i18nextLng === "EN" || i18nextLng === "en"  ? "history-text-ul ul-3" : "history-text-ul ul-3-VN"}>
                                    <li>{t("history.26")}</li>
                                    <li>{t("history.27")}</li>
                                    <li>{t("history.28")}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className="history-content-img" src={require("../../assets/images/History/lab-8-image.webp")} alt="image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default HistoryTwo;
