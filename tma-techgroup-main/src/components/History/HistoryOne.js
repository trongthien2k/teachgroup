import React from "react";
import "../../assets/sass/history.scss"
import i18next from "i18next";
import { useTranslation } from "react-i18next";
    
const HistoryOne = () => {
    const i18nextLng = localStorage.getItem('lang')  === null ? localStorage.getItem('i18nextLng') : localStorage.getItem('lang')
    const { t } = useTranslation();
  return (
    <div className="history-page">
        <div className="history-page-backgroud">
            <div className="history-page-backgroud-img">
                <img className="history-img" src={require("../../assets/images/History/backgroud-frame-history.webp")} alt="image" />
            </div>
            <div className="history-page-content">
                <div className="history-page-title">{t('History')}</div>
                <div className="history-content">
                    <div>
                        <img className="history-content-img" src={require("../../assets/images/History/lab-6-image.webp")} alt="image" />
                    </div>
                    <div className="history-line">
                        <div className="history-line-year" >
                            <div><div className="history-box-year">2021 - 2022</div></div>
                            <div className="box-2"><div className="history-box-year">2016 - 2020</div></div>
                            <div className="box-3"><div className="history-box-year">2011 - 2015</div></div>
                        </div>
                        <div className="history-content-item">
                            <div className="history-circle" />
                            <div className="history-circle circle-2" />
                            <div className="history-circle circle-3" />
                            <div className="history-text">
                                <ul className="history-text-ul ul-1">
                                    <li>{t("history.1")}</li>
                                    <li>{t("history.2")}</li>
                                    <li>{t("history.3")}</li>
                                </ul>
                                <ul className={i18nextLng === "EN" || i18nextLng === "en" ? "history-text-ul ul-2" : "history-text-ul ul-2-VN"}>
                                    <li>{t("history.4")}</li>
                                    <li>{t("history.5")}</li>
                                    <li>{t("history.6")}</li>
                                    <li>{t("history.7")}</li>
                                    <li>{t("history.8")}</li>
                                </ul>
                                <ul className={i18nextLng === "EN" || i18nextLng === "en"  ? "history-text-ul ul-3" : "history-text-ul ul-3-VN"}>
                                    <li>{t("history.9")}</li>
                                    <li>{t("history.10")}</li>
                                    <li>{t("history.11")}</li>
                                    <li>{t("history.12")}</li>
                                    <li>{t("history.13")}</li>
                                    <li>{t("history.14")}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
  );
};

export default HistoryOne;
