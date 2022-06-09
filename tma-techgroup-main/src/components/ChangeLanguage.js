import React, { useState } from "react";
import i18next from "i18next";
import '../assets/sass/changeLanguage.scss';

function ChangeLanguage(props) {
    const i18nextLng = localStorage.getItem('lang')  === null ? localStorage.getItem('i18nextLng') : localStorage.getItem('lang')
    const [textLanguage, setTextLanguage] = useState(i18nextLng)
    const onChangeLanguage = (value) => {
        i18next.changeLanguage(value);
        setTextLanguage(value)
        localStorage.setItem("lang", value)
        sendData(value)
    },
    sendData = (lang) => {
        props.Callback(lang);
    }
    return(
        <div className="change-language">
            <div className="container-change-language">
                <div className="change-language-div">
                    <span className={ textLanguage === 'vi' || textLanguage === 'vi-VN' ? "change-language-span cursor set-color-change-language" : "change-language-span cursor"} onClick={() => onChangeLanguage('vi')} >VN</span>
                    <span className="change-language-span cursor">|</span>
                    <span className={ textLanguage === 'en' || textLanguage === 'en-US' ? "cursor set-color-change-language" : "cursor"} onClick={() => onChangeLanguage('en')}>EN</span>
                </div>
            </div>
            
        </div>
    );
}

export default ChangeLanguage;